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
      <View style={styles.View_140_5514}>
        <View style={styles.View_23_946}>
          <View style={styles.View_I23_946_5_19}>
            <View style={styles.View_I23_946_5_20}>
              <View style={styles.View_I23_946_5_21} />
              <View style={styles.View_I23_946_5_22}>
                <Text style={styles.Text_I23_946_5_22}>Contextual Menu</Text>
              </View>
            </View>
            <View style={styles.View_I23_946_5_23}>
              <Text style={styles.Text_I23_946_5_23}>
                Human Interface Guidelines: Contextual Menu
              </Text>
            </View>
          </View>
          <View style={styles.View_I23_946_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5d8/8772/9c0315104fb63ea0bed18c3419424881"
          }}
          style={styles.ImageBackground_140_5544}
        />
      </View>
      <View style={styles.View_23_947}>
        <View style={styles.View_I23_947_10_2304}>
          <Text style={styles.Text_I23_947_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I23_947_10_2303} />
      </View>
      <View style={styles.View_23_948}>
        <View style={styles.View_23_949}>
          <Text style={styles.Text_23_949}>Menu Item</Text>
        </View>
        <View style={styles.View_23_950}>
          <View style={styles.View_23_951}>
            <View style={styles.View_23_952}>
              <View style={styles.View_23_953}>
                <Text style={styles.Text_23_953}>Light / With Icon</Text>
              </View>
              <View style={styles.View_23_954}>
                <Text style={styles.Text_23_954}>Light / No Icon</Text>
              </View>
              <View style={styles.View_140_11333}>
                <Text style={styles.Text_140_11333}>Light / Spacer</Text>
              </View>
              <View style={styles.View_23_1261}>
                <Text style={styles.Text_23_1261}>Dark / With Icon</Text>
              </View>
              <View style={styles.View_23_1262}>
                <Text style={styles.Text_23_1262}>Dark / No Icon</Text>
              </View>
              <View style={styles.View_140_10036}>
                <Text style={styles.Text_140_10036}>Dark / Spacer</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_955}>
            <View style={styles.View_23_1038}>
              <View style={styles.View_23_1039}>
                <Text style={styles.Text_23_1039}>Menu Item</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ab/20cb/b8420576dd6c22e736d300696ea3fec2"
                }}
                style={styles.ImageBackground_140_11377}
              />
            </View>
            <View style={styles.View_23_1252}>
              <View style={styles.View_23_1253}>
                <Text style={styles.Text_23_1253}>Menu Item</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37dc/8367/d68e5877c980bb177740badb3dab57e4"
              }}
              style={styles.ImageBackground_140_10037}
            />
            <View style={styles.View_23_1041}>
              <View style={styles.View_23_1042}>
                <Text style={styles.Text_23_1042}>Menu Item</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a4/d94a/b57eefab7ad8099937892d16446703ea"
                }}
                style={styles.ImageBackground_140_11546}
              />
            </View>
            <View style={styles.View_23_1255}>
              <View style={styles.View_23_1256}>
                <Text style={styles.Text_23_1256}>Menu Item</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3c1/d701/69d7e8f5e572b32b9cf9b90351d7c7ad"
              }}
              style={styles.ImageBackground_140_9970}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_23_960}>
        <View style={styles.View_I23_960_10_2311}>
          <Text style={styles.Text_I23_960_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I23_960_10_2312} />
      </View>
      <View style={styles.View_23_1271}>
        <View style={styles.View_23_1272}>
          <Text style={styles.Text_23_1272}>Contextual Menu</Text>
        </View>
        <View style={styles.View_23_1273}>
          <View style={styles.View_23_1274}>
            <View style={styles.View_23_1275}>
              <View style={styles.View_23_1276}>
                <Text style={styles.Text_23_1276}>Light</Text>
              </View>
              <View style={styles.View_23_2455}>
                <Text style={styles.Text_23_2455}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_1280}>
            <View style={styles.View_23_1300}>
              <View style={styles.View_23_1294}>
                <View style={styles.View_I23_1294_23_1039}>
                  <Text style={styles.Text_I23_1294_23_1039}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ab/20cb/b8420576dd6c22e736d300696ea3fec2"
                  }}
                  style={styles.ImageBackground_I23_1294_140_11377}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d7e/3572/d2f6815830cb835f1543befcd845fd9e"
                }}
                style={styles.ImageBackground_23_1301}
              />
              <View style={styles.View_23_1297}>
                <View style={styles.View_I23_1297_23_1039}>
                  <Text style={styles.Text_I23_1297_23_1039}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ab/20cb/b8420576dd6c22e736d300696ea3fec2"
                  }}
                  style={styles.ImageBackground_I23_1297_140_11377}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d7e/3572/d2f6815830cb835f1543befcd845fd9e"
                }}
                style={styles.ImageBackground_23_1349}
              />
              <View style={styles.View_23_1350}>
                <View style={styles.View_I23_1350_23_1039}>
                  <Text style={styles.Text_I23_1350_23_1039}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ab/20cb/b8420576dd6c22e736d300696ea3fec2"
                  }}
                  style={styles.ImageBackground_I23_1350_140_11377}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d7e/3572/d2f6815830cb835f1543befcd845fd9e"
                }}
                style={styles.ImageBackground_23_1551}
              />
              <View style={styles.View_23_1552}>
                <View style={styles.View_I23_1552_23_1039}>
                  <Text style={styles.Text_I23_1552_23_1039}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ab/20cb/b8420576dd6c22e736d300696ea3fec2"
                  }}
                  style={styles.ImageBackground_I23_1552_140_11377}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8859/10c0/845185d918eed500b4acf3013079fe75"
                }}
                style={styles.ImageBackground_140_11300}
              />
              <View style={styles.View_23_1616}>
                <View style={styles.View_I23_1616_23_1039}>
                  <Text style={styles.Text_I23_1616_23_1039}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0418/d898/f41ea5a5302ff96e7c4041eef11809f3"
                  }}
                  style={styles.ImageBackground_I23_1616_140_11377}
                />
              </View>
            </View>
            <View style={styles.View_71_6572}>
              <View style={styles.View_71_6573}>
                <View style={styles.View_I71_6573_23_1042}>
                  <Text style={styles.Text_I71_6573_23_1042}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a4/d94a/b57eefab7ad8099937892d16446703ea"
                  }}
                  style={styles.ImageBackground_I71_6573_140_11546}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9027/0858/53ecd5c5a651388a09b3b02f968b9aa0"
                }}
                style={styles.ImageBackground_71_6574}
              />
              <View style={styles.View_71_6575}>
                <View style={styles.View_I71_6575_23_1042}>
                  <Text style={styles.Text_I71_6575_23_1042}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a4/d94a/b57eefab7ad8099937892d16446703ea"
                  }}
                  style={styles.ImageBackground_I71_6575_140_11546}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9027/0858/53ecd5c5a651388a09b3b02f968b9aa0"
                }}
                style={styles.ImageBackground_71_6576}
              />
              <View style={styles.View_71_6577}>
                <View style={styles.View_I71_6577_23_1042}>
                  <Text style={styles.Text_I71_6577_23_1042}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a4/d94a/b57eefab7ad8099937892d16446703ea"
                  }}
                  style={styles.ImageBackground_I71_6577_140_11546}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9027/0858/53ecd5c5a651388a09b3b02f968b9aa0"
                }}
                style={styles.ImageBackground_71_6578}
              />
              <View style={styles.View_71_6579}>
                <View style={styles.View_I71_6579_23_1042}>
                  <Text style={styles.Text_I71_6579_23_1042}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a4/d94a/b57eefab7ad8099937892d16446703ea"
                  }}
                  style={styles.ImageBackground_I71_6579_140_11546}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bf6/6cc6/41beabc60918f24b6575ea09ad2bf002"
                }}
                style={styles.ImageBackground_140_9974}
              />
              <View style={styles.View_71_6581}>
                <View style={styles.View_I71_6581_23_1042}>
                  <Text style={styles.Text_I71_6581_23_1042}>Menu Item</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8deb/9f8d/02e3351d208faf7903bdcea3bffcdd70"
                  }}
                  style={styles.ImageBackground_I71_6581_140_11546}
                />
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
  View_2: { height: hp("229.0983606557377%") },
  View_140_5514: {
    width: wp("87.2255489021956%"),
    minWidth: wp("87.2255489021956%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.387225548902195%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_946: {
    flexGrow: 1,
    width: wp("87.2255489021956%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_946_5_19: {
    flexGrow: 1,
    width: wp("87.2255489021956%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_946_5_20: {
    width: wp("45.209580838323355%"),
    minWidth: wp("45.209580838323355%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_946_5_21: {
    width: wp("5.588822355289421%"),
    minWidth: wp("5.588822355289421%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I23_946_5_22: {
    width: wp("36.427145708582835%"),
    minWidth: wp("36.427145708582835%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.78243512974052%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_946_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_946_5_23: {
    width: wp("38.822355289421154%"),
    minWidth: wp("38.822355289421154%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.40319361277446%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I23_946_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I23_946_5_24: {
    flexGrow: 1,
    width: wp("87.2255489021956%"),
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
  ImageBackground_140_5544: {
    width: wp("5.588822355289421%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_947: {
    width: wp("87.2255489021956%"),
    minWidth: wp("87.2255489021956%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.387225548902195%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_947_10_2304: {
    flexGrow: 1,
    width: wp("7.0858283433133735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_947_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_947_10_2303: {
    flexGrow: 1,
    width: wp("87.2255489021956%"),
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
  View_23_948: {
    width: wp("50.29940119760479%"),
    minWidth: wp("50.29940119760479%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.387225548902195%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_949: {
    width: wp("10.379241516966067%"),
    minWidth: wp("10.379241516966067%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_949: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_950: {
    width: wp("50.29940119760479%"),
    minWidth: wp("50.29940119760479%"),
    height: hp("56.830601092896174%"),
    minHeight: hp("56.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_23_951: {
    width: wp("15.369261477045908%"),
    minWidth: wp("15.369261477045908%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.930139720558884%"),
    top: hp("5.737704918032776%")
  },
  View_23_952: {
    width: wp("15.369261477045908%"),
    minWidth: wp("15.369261477045908%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_953: {
    width: wp("15.369261477045908%"),
    minWidth: wp("15.369261477045908%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_953: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_954: {
    width: wp("13.572854291417165%"),
    minWidth: wp("13.572854291417165%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202182%"),
    justifyContent: "center"
  },
  Text_23_954: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_140_11333: {
    width: wp("12.674650698602793%"),
    minWidth: wp("12.674650698602793%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.306010928961754%"),
    justifyContent: "center"
  },
  Text_140_11333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_1261: {
    width: wp("14.471057884231536%"),
    minWidth: wp("14.471057884231536%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.229508196721326%"),
    justifyContent: "center"
  },
  Text_23_1261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_1262: {
    width: wp("12.674650698602793%"),
    minWidth: wp("12.674650698602793%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.61202185792351%"),
    justifyContent: "center"
  },
  Text_23_1262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_140_10036: {
    width: wp("11.776447105788424%"),
    minWidth: wp("11.776447105788424%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568307%"),
    justifyContent: "center"
  },
  Text_140_10036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_955: {
    width: wp("31.736526946107784%"),
    minWidth: wp("31.736526946107784%"),
    height: hp("56.830601092896174%"),
    minHeight: hp("56.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_1038: {
    width: wp("25.349301397205586%"),
    minWidth: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1936127744510996%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(237, 237, 237, 0.800000011920929)"
  },
  View_23_1039: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_23_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11377: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.8021046789617472%")
  },
  View_23_1252: {
    width: wp("24.9500998003992%"),
    minWidth: wp("24.9500998003992%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3932135728542923%"),
    top: hp("14.754098360655746%"),
    backgroundColor: "rgba(237, 237, 237, 0.800000011920929)"
  },
  View_23_1253: {
    flexGrow: 1,
    width: wp("21.756487025948104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_23_1253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_10037: {
    width: wp("24.9500998003992%"),
    minWidth: wp("24.9500998003992%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3932135728542923%"),
    top: hp("25.13661202185793%")
  },
  View_23_1041: {
    width: wp("25.349301397205586%"),
    minWidth: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1936127744510996%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_23_1042: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_23_1042: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11546: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.80210467896174%")
  },
  View_23_1255: {
    width: wp("24.9500998003992%"),
    minWidth: wp("24.9500998003992%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3932135728542923%"),
    top: hp("40.983606557377044%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_23_1256: {
    flexGrow: 1,
    width: wp("21.756487025948104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_23_1256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_9970: {
    width: wp("24.9500998003992%"),
    minWidth: wp("24.9500998003992%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3932135728542923%"),
    top: hp("51.36612021857924%")
  },
  View_23_960: {
    width: wp("87.2255489021956%"),
    minWidth: wp("87.2255489021956%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.387225548902195%"),
    top: hp("120.08196721311475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_960_10_2311: {
    flexGrow: 1,
    width: wp("11.177644710578843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_960_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_960_10_2312: {
    flexGrow: 1,
    width: wp("87.2255489021956%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333343%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_23_1271: {
    width: wp("39.421157684630735%"),
    minWidth: wp("39.421157684630735%"),
    height: hp("83.06010928961749%"),
    minHeight: hp("83.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.387225548902195%"),
    top: hp("137.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_1272: {
    width: wp("17.26546906187625%"),
    minWidth: wp("17.26546906187625%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_1272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_1273: {
    width: wp("39.421157684630735%"),
    minWidth: wp("39.421157684630735%"),
    height: hp("75.40983606557377%"),
    minHeight: hp("75.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_23_1274: {
    width: wp("4.491017964071856%"),
    minWidth: wp("4.491017964071856%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.930139720558884%"),
    top: hp("17.759562841530027%")
  },
  View_23_1275: {
    width: wp("4.491017964071856%"),
    minWidth: wp("4.491017964071856%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_1276: {
    width: wp("4.491017964071856%"),
    minWidth: wp("4.491017964071856%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_1276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_2455: {
    width: wp("3.592814371257485%"),
    minWidth: wp("3.592814371257485%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.42622950819671%"),
    justifyContent: "center"
  },
  Text_23_2455: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_1280: {
    width: wp("31.736526946107784%"),
    minWidth: wp("31.736526946107784%"),
    height: hp("75.40983606557377%"),
    minHeight: hp("75.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_1300: {
    width: wp("25.349301397205586%"),
    minWidth: wp("25.349301397205586%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1936127744510996%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_1294: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 0.800000011920929)"
  },
  View_I23_1294_23_1039: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I23_1294_23_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I23_1294_140_11377: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.80210467896174%")
  },
  ImageBackground_23_1301: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%")
  },
  View_23_1297: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%"),
    backgroundColor: "rgba(237, 237, 237, 0.800000011920929)"
  },
  View_I23_1297_23_1039: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I23_1297_23_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I23_1297_140_11377: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.8021046789617685%")
  },
  ImageBackground_23_1349: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497265%")
  },
  View_23_1350: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497265%"),
    backgroundColor: "rgba(237, 237, 237, 0.800000011920929)"
  },
  View_I23_1350_23_1039: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I23_1350_23_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I23_1350_140_11377: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.80210467896174%")
  },
  ImageBackground_23_1551: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.032786885245883%")
  },
  View_23_1552: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.032786885245883%"),
    backgroundColor: "rgba(237, 237, 237, 0.800000011920929)"
  },
  View_I23_1552_23_1039: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_I23_1552_23_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I23_1552_140_11377: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.8021046789617685%")
  },
  ImageBackground_140_11300: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.04371584699453%")
  },
  View_23_1616: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.13661202185793%"),
    backgroundColor: "rgba(237, 237, 237, 0.800000011920929)"
  },
  View_I23_1616_23_1039: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I23_1616_23_1039: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I23_1616_140_11377: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.80210467896174%")
  },
  View_71_6572: {
    width: wp("25.349301397205586%"),
    minWidth: wp("25.349301397205586%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1936127744510996%"),
    top: hp("39.890710382513646%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_71_6573: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I71_6573_23_1042: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I71_6573_23_1042: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I71_6573_140_11546: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.80210467896174%")
  },
  ImageBackground_71_6574: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%")
  },
  View_71_6575: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I71_6575_23_1042: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I71_6575_23_1042: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I71_6575_140_11546: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.8021046789617685%")
  },
  ImageBackground_71_6576: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497265%")
  },
  View_71_6577: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497265%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I71_6577_23_1042: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I71_6577_23_1042: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I71_6577_140_11546: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.80210467896174%")
  },
  ImageBackground_71_6578: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.032786885245912%")
  },
  View_71_6579: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.032786885245912%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I71_6579_23_1042: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I71_6579_23_1042: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I71_6579_140_11546: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.80210467896174%")
  },
  ImageBackground_140_9974: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.04371584699453%")
  },
  View_71_6581: {
    flexGrow: 1,
    width: wp("25.349301397205586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.1366120218579%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I71_6581_23_1042: {
    flexGrow: 1,
    width: wp("19.51752013551023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5968063872255485%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I71_6581_23_1042: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I71_6581_140_11546: {
    flexGrow: 1,
    width: wp("1.839765674339797%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.91281499500998%"),
    top: hp("1.8021046789617685%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
