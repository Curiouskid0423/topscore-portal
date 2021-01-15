import React from 'react';
import { Page, Text, View, Font, Image, Document, StyleSheet } from '@react-pdf/renderer';
import moment from "moment";
import {pdfModalStyles} from "../../../styles/makeStyles/makePdfModalStyles";

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create(pdfModalStyles);

// Create Document Component
const MyDocument = (props) => {

    const { achievement, activities, engagement, goalSetting,
        gradesAndTests, improvement, summary, toDoList } = props.compassContent;
    // Sections in the PDF Mentor report.
    const sections = [
        ["Summary", summary],
        ["Need Improvement", improvement],
        ["Goal Setting", goalSetting],
        ["Engagement", engagement],
        ["Grades and Tests", gradesAndTests],
        ["Activities", activities],
        ["Achievements", achievement],
        ["ToDo List", toDoList]
    ];
    const today = moment(new Date()).format("MM/DD/YYYY");

    return (<Document>
        <Page size="A4" style={styles.body} title={"Mentor Report"}>
            <Text style={styles.header} fixed>
                TopScore Education Inc. Report created on {today}.
            </Text>
            <Image
                style={styles.imageBanner}
                src="../../images/horizontal-logo.png"
            />
            <Text style={styles.title}>Mentor Report</Text>
            <Text style={styles.author}>
                Student: {`${props.student.contact.firstName} ${props.student.contact.lastName}`}, {props.student.contact.highSchool}
            </Text>
            <Text style={styles.author}>Consultant: Johnny</Text>

            {
                sections.map((section) => (
                    <View key={section[0]}>
                        <Text style={styles.subtitle} break> {section[0]} </Text>
                        <Text style={styles.text}> {section[1]} </Text>
                    </View>
                ))
            }

            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
        </Page>
    </Document>
)};


export default MyDocument;