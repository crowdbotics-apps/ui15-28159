import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_140_5458}>
        <View style={styles.View_8_4233}>
          <View style={styles.View_I8_4233_5_19}>
            <View style={styles.View_I8_4233_5_20}>
              <View style={styles.View_I8_4233_5_21} />
              <View style={styles.View_I8_4233_5_22}>
                <Text style={styles.Text_I8_4233_5_22}>Typography</Text>
              </View>
            </View>
            <View style={styles.View_I8_4233_5_23}>
              <Text style={styles.Text_I8_4233_5_23}>
                Human Interface Guidelines: Typography
              </Text>
            </View>
          </View>
          <View style={styles.View_I8_4233_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd95/71ef/394c0d658e5d6523a70816c54251f72c"
          }}
          style={styles.ImageBackground_140_5459}
        />
      </View>
      <View style={styles.View_8_4749}>
        <View style={styles.View_8_4234}>
          <Text style={styles.Text_8_4234}>Regular Styles</Text>
        </View>
        <View style={styles.View_6_2052}>
          <View style={styles.View_6_2053}>
            <Text style={styles.Text_6_2053}>Default / Regular / Caption2</Text>
          </View>
          <View style={styles.View_6_2054}>
            <Text style={styles.Text_6_2054}>Default / Regular / Caption1</Text>
          </View>
          <View style={styles.View_6_2055}>
            <Text style={styles.Text_6_2055}>Default / Regular / Footnote</Text>
          </View>
          <View style={styles.View_6_2056}>
            <Text style={styles.Text_6_2056}>
              Default / Regular / Subheadline
            </Text>
          </View>
          <View style={styles.View_6_2057}>
            <Text style={styles.Text_6_2057}>Default / Regular / Callout</Text>
          </View>
          <View style={styles.View_6_2058}>
            <Text style={styles.Text_6_2058}>Default / Regular / Body</Text>
          </View>
          <View style={styles.View_6_2059}>
            <Text style={styles.Text_6_2059}>Default / Regular / Headline</Text>
          </View>
          <View style={styles.View_6_2060}>
            <Text style={styles.Text_6_2060}>Default / Regular / Title3</Text>
          </View>
          <View style={styles.View_6_2061}>
            <Text style={styles.Text_6_2061}>Default / Regular / Title2</Text>
          </View>
          <View style={styles.View_6_2062}>
            <Text style={styles.Text_6_2062}>Default / Regular / Title1</Text>
          </View>
          <View style={styles.View_6_2063}>
            <Text style={styles.Text_6_2063}>
              Default / Regular / LargeTitle
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_4750}>
        <View style={styles.View_8_4273}>
          <Text style={styles.Text_8_4273}>Bold Styles</Text>
        </View>
        <View style={styles.View_6_2064}>
          <View style={styles.View_6_2065}>
            <Text style={styles.Text_6_2065}>Default / Bold / Caption2</Text>
          </View>
          <View style={styles.View_6_2066}>
            <Text style={styles.Text_6_2066}>Default / Bold / Caption1</Text>
          </View>
          <View style={styles.View_6_2067}>
            <Text style={styles.Text_6_2067}>Default / Bold / Footnote</Text>
          </View>
          <View style={styles.View_6_2068}>
            <Text style={styles.Text_6_2068}>Default / Bold / Subheadline</Text>
          </View>
          <View style={styles.View_6_2069}>
            <Text style={styles.Text_6_2069}>Default / Bold / Callout</Text>
          </View>
          <View style={styles.View_6_2070}>
            <Text style={styles.Text_6_2070}>Default / Bold / Body</Text>
          </View>
          <View style={styles.View_6_2071}>
            <Text style={styles.Text_6_2071}>Default / Bold / Headline</Text>
          </View>
          <View style={styles.View_6_2072}>
            <Text style={styles.Text_6_2072}>Default / Bold / Title3</Text>
          </View>
          <View style={styles.View_6_2073}>
            <Text style={styles.Text_6_2073}>Default / Bold / Title2</Text>
          </View>
          <View style={styles.View_6_2074}>
            <Text style={styles.Text_6_2074}>Default / Bold / Title1</Text>
          </View>
          <View style={styles.View_6_2075}>
            <Text style={styles.Text_6_2075}>Default / Bold / LargeTitle</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("220.49180327868854%") },
  View_140_5458: {
    width: wp("86.29550321199143%"),
    minWidth: wp("86.29550321199143%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.852248394004283%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_4233: {
    flexGrow: 1,
    width: wp("86.29550321199143%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_4233_5_19: {
    flexGrow: 1,
    width: wp("86.29550321199143%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_4233_5_20: {
    width: wp("46.14561027837259%"),
    minWidth: wp("46.14561027837259%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_4233_5_21: {
    width: wp("5.995717344753747%"),
    minWidth: wp("5.995717344753747%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I8_4233_5_22: {
    width: wp("36.723768736616705%"),
    minWidth: wp("36.723768736616705%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.42184154175589%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I8_4233_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_4233_5_23: {
    width: wp("36.723768736616705%"),
    minWidth: wp("36.723768736616705%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.57173447537473%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I8_4233_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I8_4233_5_24: {
    flexGrow: 1,
    width: wp("86.29550321199143%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_140_5459: {
    width: wp("5.995717344753747%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_4749: {
    width: wp("43.46895074946467%"),
    minWidth: wp("43.46895074946467%"),
    height: hp("86.74863387978142%"),
    minHeight: hp("86.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.852248394004283%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_4234: {
    width: wp("17.237687366167023%"),
    minWidth: wp("17.237687366167023%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_4234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_6_2052: {
    width: wp("43.46895074946467%"),
    minWidth: wp("43.46895074946467%"),
    height: hp("79.09836065573771%"),
    minHeight: hp("79.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_2053: {
    width: wp("15.524625267665954%"),
    minWidth: wp("15.524625267665954%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_6_2053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_6_2054: {
    width: wp("16.488222698072803%"),
    minWidth: wp("16.488222698072803%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606554%"),
    justifyContent: "center"
  },
  Text_6_2054: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_2055: {
    width: wp("17.880085653104924%"),
    minWidth: wp("17.880085653104924%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.704918032786885%"),
    justifyContent: "center"
  },
  Text_6_2055: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_6_2056: {
    width: wp("22.591006423982872%"),
    minWidth: wp("22.591006423982872%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.53551912568306%"),
    justifyContent: "center"
  },
  Text_6_2056: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_6_2057: {
    width: wp("19.80728051391863%"),
    minWidth: wp("19.80728051391863%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.63934426229509%"),
    justifyContent: "center"
  },
  Text_6_2057: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_6_2058: {
    width: wp("19.271948608137045%"),
    minWidth: wp("19.271948608137045%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076502%"),
    justifyContent: "center"
  },
  Text_6_2058: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_6_2059: {
    width: wp("23.233404710920773%"),
    minWidth: wp("23.233404710920773%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.256830601092894%"),
    justifyContent: "center"
  },
  Text_6_2059: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_6_2060: {
    width: wp("22.376873661670235%"),
    minWidth: wp("22.376873661670235%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.63387978142077%"),
    justifyContent: "center"
  },
  Text_6_2060: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_6_2061: {
    width: wp("24.411134903640257%"),
    minWidth: wp("24.411134903640257%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.28415300546448%"),
    justifyContent: "center"
  },
  Text_6_2061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_6_2062: {
    width: wp("30.406852248394006%"),
    minWidth: wp("30.406852248394006%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64.48087431693989%"),
    justifyContent: "center"
  },
  Text_6_2062: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_6_2063: {
    width: wp("43.46895074946467%"),
    minWidth: wp("43.46895074946467%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.49726775956285%"),
    justifyContent: "center"
  },
  Text_6_2063: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_8_4750: {
    width: wp("41.86295503211991%"),
    minWidth: wp("41.86295503211991%"),
    height: hp("86.6120218579235%"),
    minHeight: hp("86.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.852248394004283%"),
    top: hp("125.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_4273: {
    width: wp("13.597430406852249%"),
    minWidth: wp("13.597430406852249%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_4273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_6_2064: {
    width: wp("41.86295503211991%"),
    minWidth: wp("41.86295503211991%"),
    height: hp("78.96174863387978%"),
    minHeight: hp("78.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_2065: {
    width: wp("14.23982869379015%"),
    minWidth: wp("14.23982869379015%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_6_2065: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_6_2066: {
    width: wp("14.989293361884368%"),
    minWidth: wp("14.989293361884368%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606575%"),
    justifyContent: "center"
  },
  Text_6_2066: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_2067: {
    width: wp("16.38115631691649%"),
    minWidth: wp("16.38115631691649%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.704918032786878%"),
    justifyContent: "center"
  },
  Text_6_2067: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_6_2068: {
    width: wp("20.449678800856532%"),
    minWidth: wp("20.449678800856532%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.535519125683066%"),
    justifyContent: "center"
  },
  Text_6_2068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_2069: {
    width: wp("18.094218415417558%"),
    minWidth: wp("18.094218415417558%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.639344262295083%"),
    justifyContent: "center"
  },
  Text_6_2069: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_6_2070: {
    width: wp("17.34475374732334%"),
    minWidth: wp("17.34475374732334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.879781420765056%"),
    justifyContent: "center"
  },
  Text_6_2070: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_6_2071: {
    width: wp("20.556745182012847%"),
    minWidth: wp("20.556745182012847%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.2568306010929%"),
    justifyContent: "center"
  },
  Text_6_2071: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_6_2072: {
    width: wp("20.449678800856532%"),
    minWidth: wp("20.449678800856532%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.633879781420774%"),
    justifyContent: "center"
  },
  Text_6_2072: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_6_2073: {
    width: wp("22.91220556745182%"),
    minWidth: wp("22.91220556745182%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.2841530054645%"),
    justifyContent: "center"
  },
  Text_6_2073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_6_2074: {
    width: wp("28.4796573875803%"),
    minWidth: wp("28.4796573875803%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64.48087431693989%"),
    justifyContent: "center"
  },
  Text_6_2074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36000001430511475,
    textTransform: "none"
  },
  View_6_2075: {
    width: wp("41.86295503211991%"),
    minWidth: wp("41.86295503211991%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.36065573770495%"),
    justifyContent: "center"
  },
  Text_6_2075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
