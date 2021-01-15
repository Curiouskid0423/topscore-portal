import pandas as pd
import numpy as np
import json
import moment
import random

NROWS = 58 # read in number
CSV_DIR = "topscore_portal_upload_form__g11.csv"

data = pd.read_csv(CSV_DIR, nrows=NROWS)
data.columns = ['college', 'email', 'firstName', 'lastName', 'studentID', 
                'graduationYear', 'highSchool', 'phone','isApply', 'isCourse', 
                'isPlan', 'parentName', 'parentEmail', 'parentPhone', 'relationship']
data = data[2:] # Remove the first line of column names, and the second line of example entry

# Hard code the default "content" info.
todayDate = 1609430400000 # Jan 1st 2021

courseInstance0 = {
    "type": "INIT",
    "courseName": "INIT_COURSE",
    "instructor": "Developer",
    "startDate": todayDate,
    "repeatBy": "days",
    "repeatTimes": 1
}

reportCardInstance0 = {
    "id": "000",
    "type": "SAT",
    "title": "PLACEHOLDER",
    "testDate": todayDate,
    "sourceLink": "https://www.ets.org/toefl",
}

contentsDefault = {
        "partOverview": {
            "atAGlance": {
                "notice": "Notes about students, family info, sibling info...etc.",
            },
        },
        "partCore": {
            "currentCourseList": [],
            "pastCourseList": [courseInstance0]
        },
        "partCompass": {
            "summary": "(Default Message) Part 1: Summary Placeholder",
            "improvement": "(Default Message) Part 2: Improve Placeholder",
            "goalSetting": "(Default Message) Part 3: Goals Placeholder",
            "engagement": "(Default Message) Part 4: Engagement Placeholder",
            "gradesAndTests": "(Default Message) Part 5: Grades and Tests Placeholder",
            "activities": "(Default Message) Part 6: Activities Placeholder",
            "achievement": "(Default Message) Part 6.5: Achievements Placeholder",
            "toDoList": "(Default Message) Part 7: To Do List Placeholder"
        },
        "partMentor": {
            "testInfo": "",
            "collegeList": "",
            "optionals": ""
        },
        "partReport": {
            "SATreport": [],
            "TOEFLreport": [reportCardInstance0]
        }
}


# In[213]:


def preprocessEntry(data_src, index):
    entry = {}
    for num in range(len(data_src.iloc[index])):
        value, col_name = data_src.iloc[index][num], data_src.columns[num]
        if pd.isnull(value):
            value = 'N/A'
        elif col_name.startswith('is'):
            value = True if value == "TRUE" else False
        entry[str(col_name)] = value
    return entry


# In[219]:


def createContactJSON(data, entryNumber, todayDate=1609430400000):
    """ Create Json Helper Method (todayDate = 2021/01/01) """
    entry = preprocessEntry(data, entryNumber)
    
    return {
        "contact" : {
            "attendedCollege" : entry["college"],
            "email" : entry["email"],
            "family" : {
              "email" : entry["parentEmail"],
              "parent" : entry["parentName"],
              "phone" : entry["parentPhone"],
              "relationship" : entry["relationship"]
            },
            "firstName" : entry["firstName"],
            "graduationYear" : int(entry["graduationYear"]),
            "highSchool" : entry["highSchool"],
            "lastName" : entry["lastName"],
            "packageType" : {
              "apply" : entry["isApply"],
              "course" : entry["isCourse"],
              "planning" : entry["isPlan"]
            },
            "personOfRecommendation" : "",
            "phone" : entry["phone"],
            "preTestResult" : {
              "date" : todayDate,
              "essay" : "",
              "math" : "",
              "reading" : "",
              "writing" : ""
            },
            "recordOfFirstAppt" : "",
            "specialId" : {
              "isBlackList" : False,
              "isVIP" : False
            },
            "studentID" : entry["studentID"]
          }
    }


# In[220]:


def createJSON(data, entryNumber, content, supervisor=""):
    obj = createContactJSON(data, entryNumber)
    obj["content"] = content
    obj["supervisor"] = supervisor
    return obj
# Test
createJSON(data, 12, contentsDefault)


# In[221]:


file_path = "studentsList.json"
exportJSON = open(file_path, "w", encoding="utf-8")
exportJSON.write("{")
        
def processData(rows, data_src, content, seed=10):
    random.seed(10)
    for i in range(rows):
        json_block = createJSON(data_src, i, content)
        block_id = "MAN" + str(random.randint(1e9, 9999999999)) # MAN = Manual Upload
        # Ensure Chinese characters are preserved.
        json_finalized = json.dumps(json_block, ensure_ascii=False).encode('utf8')
        exportJSON.write(json.dumps(block_id) + ": ")
        exportJSON.write(json_finalized.decode("utf-8"))
        if i < rows-1:
            exportJSON.write(",")

processData(rows=len(data), data_src=data, content=contentsDefault)
exportJSON.write("}")

exportJSON.close()


