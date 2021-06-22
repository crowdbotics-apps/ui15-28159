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
      <View style={styles.View_146_5072}>
        <View style={styles.View_146_5073}>
          <View style={styles.View_I146_5073_5_19}>
            <View style={styles.View_I146_5073_5_20}>
              <View style={styles.View_I146_5073_5_21} />
              <View style={styles.View_I146_5073_5_22}>
                <Text style={styles.Text_I146_5073_5_22}>Action Sheet</Text>
              </View>
            </View>
            <View style={styles.View_I146_5073_5_23}>
              <Text style={styles.Text_I146_5073_5_23}>
                Human Interface Guidelines: Action Sheet
              </Text>
            </View>
          </View>
          <View style={styles.View_I146_5073_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea0b/006e/bbfa927bdece6e3ee3370e4a4d8a6caf"
          }}
          style={styles.ImageBackground_146_5074}
        />
      </View>
      <View style={styles.View_147_5282}>
        <View style={styles.View_I147_5282_10_2304}>
          <Text style={styles.Text_I147_5282_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I147_5282_10_2303} />
      </View>
      <View style={styles.View_146_5313}>
        <View style={styles.View_146_5314}>
          <Text style={styles.Text_146_5314}>Actions</Text>
        </View>
        <View style={styles.View_146_5315}>
          <View style={styles.View_146_5316}>
            <View style={styles.View_146_5317}>
              <View style={styles.View_146_5318}>
                <Text style={styles.Text_146_5318}>
                  Light / Action Grouping
                </Text>
              </View>
              <View style={styles.View_146_5319}>
                <Text style={styles.Text_146_5319}>Light / Bottom Action</Text>
              </View>
              <View style={styles.View_149_5074}>
                <Text style={styles.Text_149_5074}>Light / Text</Text>
              </View>
              <View style={styles.View_146_5320}>
                <Text style={styles.Text_146_5320}>Dark / Action Grouping</Text>
              </View>
              <View style={styles.View_147_5115}>
                <Text style={styles.Text_147_5115}>Dark / Bottom Action</Text>
              </View>
              <View style={styles.View_149_5073}>
                <Text style={styles.Text_149_5073}>Dark / Text</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_146_5322}>
            <View style={styles.View_146_5323}>
              <View style={styles.View_146_5324}>
                <Text style={styles.Text_146_5324}>Action</Text>
              </View>
            </View>
            <View style={styles.View_147_5110}>
              <View style={styles.View_147_5111}>
                <Text style={styles.Text_147_5111}>Action</Text>
              </View>
            </View>
            <View style={styles.View_149_5062}>
              <View style={styles.View_149_5063}>
                <Text style={styles.Text_149_5063}>
                  Are you sure you want to delete this?
                </Text>
              </View>
            </View>
            <View style={styles.View_146_5335}>
              <View style={styles.View_146_5336}>
                <Text style={styles.Text_146_5336}>Action</Text>
              </View>
            </View>
            <View style={styles.View_147_5113}>
              <View style={styles.View_147_5114}>
                <Text style={styles.Text_147_5114}>Action</Text>
              </View>
            </View>
            <View style={styles.View_149_5070}>
              <View style={styles.View_149_5072}>
                <Text style={styles.Text_149_5072}>
                  Are you sure you want to delete this?
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_146_5076}>
        <View style={styles.View_I146_5076_10_2311}>
          <Text style={styles.Text_I146_5076_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I146_5076_10_2312} />
      </View>
      <View style={styles.View_146_5248}>
        <View style={styles.View_146_5249}>
          <Text style={styles.Text_146_5249}>Action Sheet</Text>
        </View>
        <View style={styles.View_146_5250}>
          <View style={styles.View_146_5251}>
            <View style={styles.View_146_5252}>
              <View style={styles.View_146_5253}>
                <Text style={styles.Text_146_5253}>Light</Text>
              </View>
            </View>
            <View style={styles.View_146_5254}>
              <View style={styles.View_146_5255}>
                <Text style={styles.Text_146_5255}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_146_5256}>
            <View style={styles.View_146_5257}>
              <View style={styles.View_147_5138}>
                <View style={styles.View_147_5131}>
                  <View style={styles.View_I147_5131_149_5063}>
                    <Text style={styles.Text_I147_5131_149_5063}>
                      Are you sure you want to do this?
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec5/8eff/7d5462e9644b214de71f76e14d5f9b51"
                  }}
                  style={styles.ImageBackground_149_5078}
                />
                <View style={styles.View_149_5075}>
                  <View style={styles.View_I149_5075_146_5324}>
                    <Text style={styles.Text_I149_5075_146_5324}>Action</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec5/8eff/7d5462e9644b214de71f76e14d5f9b51"
                  }}
                  style={styles.ImageBackground_147_5140}
                />
                <View style={styles.View_147_5133}>
                  <View style={styles.View_I147_5133_146_5324}>
                    <Text style={styles.Text_I147_5133_146_5324}>Action</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec5/8eff/7d5462e9644b214de71f76e14d5f9b51"
                  }}
                  style={styles.ImageBackground_147_5141}
                />
                <View style={styles.View_147_5135}>
                  <View style={styles.View_I147_5135_146_5324}>
                    <Text style={styles.Text_I147_5135_146_5324}>Action</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec5/8eff/7d5462e9644b214de71f76e14d5f9b51"
                  }}
                  style={styles.ImageBackground_147_5139}
                />
              </View>
              <View style={styles.View_147_5126}>
                <View style={styles.View_I147_5126_147_5111}>
                  <Text style={styles.Text_I147_5126_147_5111}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_146_5259}>
              <View style={styles.View_147_5156}>
                <View style={styles.View_149_5079}>
                  <View style={styles.View_I149_5079_149_5072}>
                    <Text style={styles.Text_I149_5079_149_5072}>
                      Are you sure you want to do this?
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6007/2904/567cf3c16353b25fd541956edb87c13a"
                  }}
                  style={styles.ImageBackground_149_5080}
                />
                <View style={styles.View_147_5157}>
                  <View style={styles.View_I147_5157_146_5336}>
                    <Text style={styles.Text_I147_5157_146_5336}>Action</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6007/2904/567cf3c16353b25fd541956edb87c13a"
                  }}
                  style={styles.ImageBackground_147_5158}
                />
                <View style={styles.View_147_5159}>
                  <View style={styles.View_I147_5159_146_5336}>
                    <Text style={styles.Text_I147_5159_146_5336}>Action</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6007/2904/567cf3c16353b25fd541956edb87c13a"
                  }}
                  style={styles.ImageBackground_147_5160}
                />
                <View style={styles.View_147_5161}>
                  <View style={styles.View_I147_5161_146_5336}>
                    <Text style={styles.Text_I147_5161_146_5336}>Action</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_147_5163}>
                <View style={styles.View_I147_5163_147_5114}>
                  <Text style={styles.Text_I147_5163_147_5114}>Action</Text>
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
  View_2: { height: hp("272.8142076502732%") },
  View_146_5072: {
    width: wp("87.45098039215686%"),
    minWidth: wp("87.45098039215686%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_146_5073: {
    flexGrow: 1,
    width: wp("87.45098039215686%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I146_5073_5_19: {
    flexGrow: 1,
    width: wp("87.45098039215686%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I146_5073_5_20: {
    width: wp("48.92156862745098%"),
    minWidth: wp("48.92156862745098%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I146_5073_5_21: {
    width: wp("5.490196078431373%"),
    minWidth: wp("5.490196078431373%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I146_5073_5_22: {
    width: wp("40.294117647058826%"),
    minWidth: wp("40.294117647058826%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.627450980392158%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I146_5073_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I146_5073_5_23: {
    width: wp("35.3921568627451%"),
    minWidth: wp("35.3921568627451%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.05882352941177%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I146_5073_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I146_5073_5_24: {
    flexGrow: 1,
    width: wp("87.45098039215686%"),
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
  ImageBackground_146_5074: {
    width: wp("5.490196078431373%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_5282: {
    width: wp("87.45098039215686%"),
    minWidth: wp("87.45098039215686%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I147_5282_10_2304: {
    flexGrow: 1,
    width: wp("6.96078431372549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I147_5282_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I147_5282_10_2303: {
    flexGrow: 1,
    width: wp("87.45098039215686%"),
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
  View_146_5313: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("82.5136612021858%"),
    minHeight: hp("82.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_146_5314: {
    width: wp("7.941176470588235%"),
    minWidth: wp("7.941176470588235%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_146_5314: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5315: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("74.86338797814209%"),
    minHeight: hp("74.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_146_5316: {
    width: wp("20.392156862745097%"),
    minWidth: wp("20.392156862745097%"),
    height: hp("62.431693989071036%"),
    minHeight: hp("62.431693989071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.607843137254896%"),
    top: hp("6.830601092896167%")
  },
  View_146_5317: {
    width: wp("20.392156862745097%"),
    minWidth: wp("20.392156862745097%"),
    height: hp("62.431693989071036%"),
    minHeight: hp("62.431693989071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_146_5318: {
    width: wp("20.392156862745097%"),
    minWidth: wp("20.392156862745097%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_146_5318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5319: {
    width: wp("18.627450980392158%"),
    minWidth: wp("18.627450980392158%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.568306010928971%"),
    justifyContent: "center"
  },
  Text_146_5319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_149_5074: {
    width: wp("10.686274509803921%"),
    minWidth: wp("10.686274509803921%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.90710382513661%"),
    justifyContent: "center"
  },
  Text_149_5074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5320: {
    width: wp("19.50980392156863%"),
    minWidth: wp("19.50980392156863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.245901639344275%"),
    justifyContent: "center"
  },
  Text_146_5320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_147_5115: {
    width: wp("17.745098039215687%"),
    minWidth: wp("17.745098039215687%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.81420765027324%"),
    justifyContent: "center"
  },
  Text_147_5115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_149_5073: {
    width: wp("9.705882352941178%"),
    minWidth: wp("9.705882352941178%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.15300546448086%"),
    justifyContent: "center"
  },
  Text_149_5073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5322: {
    width: wp("41.47058823529412%"),
    minWidth: wp("41.47058823529412%"),
    height: hp("74.86338797814209%"),
    minHeight: hp("74.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_146_5323: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(245, 245, 245, 0.699999988079071)"
  },
  View_146_5324: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.45901639344261%"),
    justifyContent: "center"
  },
  Text_146_5324: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_147_5110: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_147_5111: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_147_5111: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_149_5062: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("29.508196721311478%"),
    backgroundColor: "rgba(245, 245, 245, 0.699999988079071)"
  },
  View_149_5063: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_149_5063: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_146_5335: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("39.617486338797804%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_146_5336: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426386%"),
    justifyContent: "center"
  },
  Text_146_5336: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_147_5113: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("52.18579234972677%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_147_5114: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426386%"),
    justifyContent: "center"
  },
  Text_147_5114: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_149_5070: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("64.75409836065575%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_149_5072: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_149_5072: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_146_5076: {
    width: wp("87.45098039215686%"),
    minWidth: wp("87.45098039215686%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("138.11475409836063%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I146_5076_10_2311: {
    flexGrow: 1,
    width: wp("10.980392156862745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I146_5076_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I146_5076_10_2312: {
    flexGrow: 1,
    width: wp("87.45098039215686%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333371%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_146_5248: {
    width: wp("50.588235294117645%"),
    minWidth: wp("50.588235294117645%"),
    height: hp("108.74316939890711%"),
    minHeight: hp("108.74316939890711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("155.327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_146_5249: {
    width: wp("13.529411764705882%"),
    minWidth: wp("13.529411764705882%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_146_5249: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5250: {
    width: wp("50.588235294117645%"),
    minWidth: wp("50.588235294117645%"),
    height: hp("101.09289617486338%"),
    minHeight: hp("101.09289617486338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_146_5251: {
    width: wp("4.411764705882353%"),
    minWidth: wp("4.411764705882353%"),
    height: hp("45.90163934426229%"),
    minHeight: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.1764705882353%"),
    top: hp("21.857923497267763%")
  },
  View_146_5252: {
    width: wp("4.411764705882353%"),
    minWidth: wp("4.411764705882353%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_146_5253: {
    width: wp("4.411764705882353%"),
    minWidth: wp("4.411764705882353%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_146_5253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5254: {
    width: wp("3.5294117647058822%"),
    minWidth: wp("3.5294117647058822%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.62295081967213%")
  },
  View_146_5255: {
    width: wp("3.5294117647058822%"),
    minWidth: wp("3.5294117647058822%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_146_5255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5256: {
    width: wp("43.03921568627451%"),
    minWidth: wp("43.03921568627451%"),
    height: hp("101.09289617486338%"),
    minHeight: hp("101.09289617486338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_146_5257: {
    width: wp("36.76470588235294%"),
    minWidth: wp("36.76470588235294%"),
    height: hp("43.98907103825137%"),
    minHeight: hp("43.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0.4000000059604645)"
  },
  View_147_5138: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7843137254901951%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_147_5131: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 0.699999988079071)"
  },
  View_I147_5131_149_5063: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_I147_5131_149_5063: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_149_5078: {
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    top: hp("5.737704918032819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_149_5075: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%"),
    backgroundColor: "rgba(245, 245, 245, 0.699999988079071)"
  },
  View_I149_5075_146_5324: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.459016393442596%"),
    justifyContent: "center"
  },
  Text_I149_5075_146_5324: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_147_5140: {
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_5133: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(245, 245, 245, 0.699999988079071)"
  },
  View_I147_5133_146_5324: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "center"
  },
  Text_I147_5133_146_5324: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_147_5141: {
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    top: hp("22.13114754098362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_5135: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.13114754098362%"),
    backgroundColor: "rgba(245, 245, 245, 0.699999988079071)"
  },
  View_I147_5135_146_5324: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_I147_5135_146_5324: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_147_5139: {
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    top: hp("30.327868852459034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_5126: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7843137254901951%"),
    top: hp("31.420765027322403%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I147_5126_147_5111: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_I147_5126_147_5111: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_146_5259: {
    width: wp("36.76470588235294%"),
    minWidth: wp("36.76470588235294%"),
    height: hp("43.98907103825137%"),
    minHeight: hp("43.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("52.73224043715848%"),
    backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)"
  },
  View_147_5156: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7843137254901951%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_149_5079: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I149_5079_149_5072: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("1.6393442622950545%"),
    justifyContent: "center"
  },
  Text_I149_5079_149_5072: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_149_5080: {
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    top: hp("5.737704918032762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_5157: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I147_5157_146_5336: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_I147_5157_146_5336: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_147_5158: {
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_5159: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I147_5159_146_5336: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.459016393442596%"),
    justifyContent: "center"
  },
  Text_I147_5159_146_5336: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_147_5160: {
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    top: hp("22.13114754098359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_5161: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.13114754098359%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I147_5161_146_5336: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "center"
  },
  Text_I147_5161_146_5336: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_147_5163: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7843137254901951%"),
    top: hp("31.420765027322375%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I147_5163_147_5114: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "center"
  },
  Text_I147_5163_147_5114: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
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
