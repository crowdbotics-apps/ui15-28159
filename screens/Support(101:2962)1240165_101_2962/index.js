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
      <View style={styles.View_101_2963}>
        <View style={styles.View_I101_2963_36_10245}>
          <View style={styles.View_I101_2963_36_10246}>
            <ImageBackground
              style={styles.ImageBackground_I101_2963_36_10247}
            />
            <View style={styles.View_I101_2963_36_10248}>
              <Text style={styles.Text_I101_2963_36_10248}>Support</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I101_2963_36_10250} />
      </View>
      <View style={styles.View_101_2965}>
        <View style={styles.View_101_2966}>
          <Text style={styles.Text_101_2966}>About</Text>
        </View>
        <View style={styles.View_101_3217}>
          <Text style={styles.Text_101_3217}>
            Hi, I’m Joey! I’m a product designer who really enjoys making these
            types of kits for others to use. If you know me, you know that the
            thing that inspires me the most is to be able to create things that
            can help others do their thing—and that was my goal with this UI
            kit. If you found this file helpful, I’d love to know. Say hi over
            on Twitter (I’m @joeyabanks)—please share any bugs or mistakes you
            find, too! 🙏 Several weeks of work and cups of coffee went into
            making this, and if it was useful, your support would mean so much.
            My plan is to keep this file as updated as I can and continue making
            them in the years to come!
          </Text>
        </View>
      </View>
      <View style={styles.View_101_3195}>
        <View style={styles.View_101_3196}>
          <Text style={styles.Text_101_3196}>Ways to Donate</Text>
        </View>
        <View style={styles.View_101_3197}>
          <View style={styles.View_101_3198}>
            <View style={styles.View_101_3199}>
              <View style={styles.View_101_3200}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/275b/f4c2/8100533b162e288d0ff0acbdba7a2d5b"
                  }}
                  style={styles.ImageBackground_101_3201}
                />
              </View>
              <View style={styles.View_101_3202}>
                <View style={styles.View_101_3203}>
                  <Text style={styles.Text_101_3203}>Cash App</Text>
                </View>
                <View style={styles.View_101_3204}>
                  <Text style={styles.Text_101_3204}>cash.app/$joeyabanks</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_101_3205}>
              <View style={styles.View_101_3206}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b2f/4302/3635abde38fd7b352ba44de4b3070c79"
                  }}
                  style={styles.ImageBackground_101_3207}
                />
              </View>
              <View style={styles.View_101_3208}>
                <View style={styles.View_101_3209}>
                  <Text style={styles.Text_101_3209}>PayPal</Text>
                </View>
                <View style={styles.View_101_3210}>
                  <Text style={styles.Text_101_3210}>paypal.me/joeyabanks</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_101_3211}>
              <View style={styles.View_101_3212}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee5f/e361/8e0ab3aec17bc2a4542f521be43ef5c9"
                  }}
                  style={styles.ImageBackground_101_3213}
                />
              </View>
              <View style={styles.View_101_3214}>
                <View style={styles.View_101_3215}>
                  <Text style={styles.Text_101_3215}>Buy Me A Coffee</Text>
                </View>
                <View style={styles.View_101_3216}>
                  <Text style={styles.Text_101_3216}>
                    buymeacoffee.com/joeyabanks
                  </Text>
                </View>
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
  View_2: { height: hp("117.07650273224044%") },
  View_101_2963: {
    width: wp("85.1508120649652%"),
    minWidth: wp("85.1508120649652%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.424593967517401%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_2963_36_10245: {
    flexGrow: 1,
    width: wp("85.1508120649652%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_2963_36_10246: {
    width: wp("85.1508120649652%"),
    minWidth: wp("85.1508120649652%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I101_2963_36_10247: {
    width: wp("6.496519721577726%"),
    minWidth: wp("6.496519721577726%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I101_2963_36_10248: {
    width: wp("74.94199535962876%"),
    minWidth: wp("74.94199535962876%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.208816705336426%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I101_2963_36_10248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I101_2963_36_10250: {
    flexGrow: 1,
    width: wp("85.1508120649652%"),
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
  View_101_2965: {
    width: wp("85.1508120649652%"),
    minWidth: wp("85.1508120649652%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.424593967517401%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_2966: {
    width: wp("6.728538283062645%"),
    minWidth: wp("6.728538283062645%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_2966: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_101_3217: {
    width: wp("85.1508120649652%"),
    minWidth: wp("85.1508120649652%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "center"
  },
  Text_101_3217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_101_3195: {
    width: wp("85.1508120649652%"),
    minWidth: wp("85.1508120649652%"),
    height: hp("33.60655737704918%"),
    minHeight: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.424593967517401%"),
    top: hp("74.72677595628416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_3196: {
    width: wp("18.677494199535964%"),
    minWidth: wp("18.677494199535964%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_3196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_101_3197: {
    width: wp("85.1508120649652%"),
    minWidth: wp("85.1508120649652%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_101_3198: {
    width: wp("85.1508120649652%"),
    minWidth: wp("85.1508120649652%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_3199: {
    width: wp("20.99767981438515%"),
    minWidth: wp("20.99767981438515%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7122969837586997%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_3200: {
    flexGrow: 1,
    width: wp("6.960601541116454%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.018561484918795%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_101_3201: {
    width: wp("5.220417633410673%"),
    height: hp("6.284153005464481%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.870069605568446%")
  },
  View_101_3202: {
    flexGrow: 1,
    width: wp("20.99767981438515%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_3203: {
    width: wp("10.440835266821345%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.278422273781903%"),
    justifyContent: "center"
  },
  Text_101_3203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_101_3204: {
    width: wp("20.99767981438515%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_101_3204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_101_3205: {
    width: wp("20.99767981438515%"),
    minWidth: wp("20.99767981438515%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.422273781902547%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_3206: {
    flexGrow: 1,
    width: wp("6.960601541116454%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.0185614849187985%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_101_3207: {
    width: wp("6.960556844547564%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_101_3208: {
    flexGrow: 1,
    width: wp("20.99767981438515%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_3209: {
    width: wp("7.076566125290023%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.960556844547568%"),
    justifyContent: "center"
  },
  Text_101_3209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_101_3210: {
    width: wp("20.99767981438515%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_101_3210: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_101_3211: {
    width: wp("28.306264501160094%"),
    minWidth: wp("28.306264501160094%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.1322505800464%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_3212: {
    flexGrow: 1,
    width: wp("6.960601541116454%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.672853828306266%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 216, 0, 1)",
    overflow: "hidden"
  },
  ImageBackground_101_3213: {
    width: wp("6.960556844547564%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_3214: {
    flexGrow: 1,
    width: wp("28.306264501160094%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_3215: {
    width: wp("17.749419953596288%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.278422273781906%"),
    justifyContent: "center"
  },
  Text_101_3215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_101_3216: {
    width: wp("28.306264501160094%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_101_3216: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
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
