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
      <View style={styles.View_140_5519}>
        <View style={styles.View_71_8670}>
          <View style={styles.View_I71_8670_5_19}>
            <View style={styles.View_I71_8670_5_20}>
              <View style={styles.View_I71_8670_5_21} />
              <View style={styles.View_I71_8670_5_22}>
                <Text style={styles.Text_I71_8670_5_22}>Widgets</Text>
              </View>
            </View>
            <View style={styles.View_I71_8670_5_23}>
              <Text style={styles.Text_I71_8670_5_23}>
                Related: Apple Widgets UI Kit
              </Text>
            </View>
          </View>
          <View style={styles.View_I71_8670_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f29/0070/39f6295f6c72b824283bbfc43cb53cdb"
          }}
          style={styles.ImageBackground_140_5554}
        />
      </View>
      <View style={styles.View_71_8671}>
        <View style={styles.View_I71_8671_10_2304}>
          <Text style={styles.Text_I71_8671_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I71_8671_10_2303} />
      </View>
      <View style={styles.View_71_8672}>
        <View style={styles.View_71_8673}>
          <Text style={styles.Text_71_8673}>Widgets</Text>
        </View>
        <View style={styles.View_71_8674}>
          <View style={styles.View_71_8675}>
            <View style={styles.View_71_8676}>
              <View style={styles.View_71_8677}>
                <Text style={styles.Text_71_8677}>Light / Small</Text>
              </View>
              <View style={styles.View_71_8678}>
                <Text style={styles.Text_71_8678}>Light / Medium</Text>
              </View>
              <View style={styles.View_71_8827}>
                <Text style={styles.Text_71_8827}>Light / Large</Text>
              </View>
              <View style={styles.View_71_8828}>
                <Text style={styles.Text_71_8828}>Dark / Small</Text>
              </View>
              <View style={styles.View_71_8829}>
                <Text style={styles.Text_71_8829}>Dark / Medium</Text>
              </View>
              <View style={styles.View_71_8830}>
                <Text style={styles.Text_71_8830}>Dark / Large</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_71_8679}>
            <View style={styles.View_71_8795}>
              <View style={styles.View_119_5320}>
                <Text style={styles.Text_119_5320}>Widget</Text>
              </View>
            </View>
            <View style={styles.View_71_8796}>
              <View style={styles.View_119_5323}>
                <Text style={styles.Text_119_5323}>Widget</Text>
              </View>
            </View>
            <View style={styles.View_71_8797}>
              <View style={styles.View_119_5324}>
                <Text style={styles.Text_119_5324}>Widget</Text>
              </View>
            </View>
            <View style={styles.View_71_8798}>
              <View style={styles.View_119_5325}>
                <Text style={styles.Text_119_5325}>Widget</Text>
              </View>
            </View>
            <View style={styles.View_71_8800}>
              <View style={styles.View_119_5326}>
                <Text style={styles.Text_119_5326}>Widget</Text>
              </View>
            </View>
            <View style={styles.View_71_8802}>
              <View style={styles.View_119_5327}>
                <Text style={styles.Text_119_5327}>Widget</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("272.8142076502732%") },
  View_140_5519: {
    width: wp("84.44714459295261%"),
    minWidth: wp("84.44714459295261%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7764277035236935%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_8670: {
    flexGrow: 1,
    width: wp("84.44714459295261%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_8670_5_19: {
    flexGrow: 1,
    width: wp("84.44714459295261%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_8670_5_20: {
    width: wp("48.724179829890645%"),
    minWidth: wp("48.724179829890645%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_8670_5_21: {
    width: wp("6.804374240583232%"),
    minWidth: wp("6.804374240583232%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I71_8670_5_22: {
    width: wp("38.03159173754557%"),
    minWidth: wp("38.03159173754557%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.69258809234508%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I71_8670_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_8670_5_23: {
    width: wp("31.83475091130012%"),
    minWidth: wp("31.83475091130012%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.61239368165249%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I71_8670_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I71_8670_5_24: {
    flexGrow: 1,
    width: wp("84.44714459295261%"),
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
  ImageBackground_140_5554: {
    width: wp("6.804374240583232%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_71_8671: {
    width: wp("84.44714459295261%"),
    minWidth: wp("84.44714459295261%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7764277035236935%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_8671_10_2304: {
    flexGrow: 1,
    width: wp("8.626974483596598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I71_8671_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_8671_10_2303: {
    flexGrow: 1,
    width: wp("84.44714459295261%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_71_8672: {
    width: wp("67.07168894289185%"),
    minWidth: wp("67.07168894289185%"),
    height: hp("217.21311475409837%"),
    minHeight: hp("217.21311475409837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7764277035236935%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_8673: {
    width: wp("9.842041312272174%"),
    minWidth: wp("9.842041312272174%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_8673: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8674: {
    width: wp("67.07168894289185%"),
    minWidth: wp("67.07168894289185%"),
    height: hp("209.56284153005464%"),
    minHeight: hp("209.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_71_8675: {
    width: wp("15.43134872417983%"),
    minWidth: wp("15.43134872417983%"),
    height: hp("169.94535519125685%"),
    minHeight: hp("169.94535519125685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.64034021871203%"),
    top: hp("13.387978142076506%")
  },
  View_71_8676: {
    width: wp("15.43134872417983%"),
    minWidth: wp("15.43134872417983%"),
    height: hp("169.94535519125685%"),
    minHeight: hp("169.94535519125685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8677: {
    width: wp("14.33778857837181%"),
    minWidth: wp("14.33778857837181%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_8677: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8678: {
    width: wp("15.43134872417983%"),
    minWidth: wp("15.43134872417983%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.5464480874317%"),
    justifyContent: "center"
  },
  Text_71_8678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8827: {
    width: wp("14.33778857837181%"),
    minWidth: wp("14.33778857837181%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64.0710382513661%"),
    justifyContent: "center"
  },
  Text_71_8827: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8828: {
    width: wp("13.24422843256379%"),
    minWidth: wp("13.24422843256379%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102.59562841530052%"),
    justifyContent: "center"
  },
  Text_71_8828: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8829: {
    width: wp("14.33778857837181%"),
    minWidth: wp("14.33778857837181%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("128.14207650273224%"),
    justifyContent: "center"
  },
  Text_71_8829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8830: {
    width: wp("13.24422843256379%"),
    minWidth: wp("13.24422843256379%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("166.66666666666666%"),
    justifyContent: "center"
  },
  Text_71_8830: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8679: {
    width: wp("47.75212636695018%"),
    minWidth: wp("47.75212636695018%"),
    height: hp("209.56284153005464%"),
    minHeight: hp("209.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8795: {
    width: wp("18.833535844471445%"),
    minWidth: wp("18.833535844471445%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8882138517618463%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_119_5320: {
    flexGrow: 1,
    width: wp("5.103280680437424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.804374240583234%"),
    top: hp("21.448087431693985%"),
    justifyContent: "flex-start"
  },
  Text_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_8796: {
    width: wp("39.97569866342649%"),
    minWidth: wp("39.97569866342649%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8882138517618463%"),
    top: hp("29.91803278688525%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_119_5323: {
    flexGrow: 1,
    width: wp("5.103280680437424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.496962332928312%"),
    top: hp("21.448087431693992%"),
    justifyContent: "flex-start"
  },
  Text_119_5323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_8797: {
    width: wp("39.97569866342649%"),
    minWidth: wp("39.97569866342649%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8882138517618463%"),
    top: hp("55.46448087431693%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_119_5324: {
    flexGrow: 1,
    width: wp("5.103280680437424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.496962332928312%"),
    top: hp("47.40437158469946%"),
    justifyContent: "flex-start"
  },
  Text_119_5324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_8798: {
    width: wp("18.833535844471445%"),
    minWidth: wp("18.833535844471445%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8882138517618463%"),
    top: hp("106.96721311475407%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_119_5325: {
    flexGrow: 1,
    width: wp("5.103280680437424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.925880923450789%"),
    top: hp("21.448087431694006%"),
    justifyContent: "flex-start"
  },
  Text_119_5325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_8800: {
    width: wp("39.97569866342649%"),
    minWidth: wp("39.97569866342649%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8882138517618463%"),
    top: hp("132.5136612021858%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_119_5326: {
    flexGrow: 1,
    width: wp("5.103280680437424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.496962332928312%"),
    top: hp("21.448087431693978%"),
    justifyContent: "flex-start"
  },
  Text_119_5326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_8802: {
    width: wp("39.97569866342649%"),
    minWidth: wp("39.97569866342649%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8882138517618463%"),
    top: hp("158.06010928961746%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_119_5327: {
    flexGrow: 1,
    width: wp("5.103280680437424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.496962332928312%"),
    top: hp("47.40437158469945%"),
    justifyContent: "flex-start"
  },
  Text_119_5327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
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
