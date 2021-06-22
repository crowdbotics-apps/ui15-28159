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
      <View style={styles.View_140_5518}>
        <View style={styles.View_71_6739}>
          <View style={styles.View_I71_6739_5_19}>
            <View style={styles.View_I71_6739_5_20}>
              <View style={styles.View_I71_6739_5_21} />
              <View style={styles.View_I71_6739_5_22}>
                <Text style={styles.Text_I71_6739_5_22}>Video Player</Text>
              </View>
            </View>
            <View style={styles.View_I71_6739_5_23}>
              <Text style={styles.Text_I71_6739_5_23}>
                Human Interface Guidelines: Video
              </Text>
            </View>
          </View>
          <View style={styles.View_I71_6739_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1420/dfe0/fda374fe35271454fd661994292c0109"
          }}
          style={styles.ImageBackground_140_5552}
        />
      </View>
      <View style={styles.View_71_6740}>
        <View style={styles.View_I71_6740_10_2304}>
          <Text style={styles.Text_I71_6740_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I71_6740_10_2303} />
      </View>
      <View style={styles.View_71_6741}>
        <View style={styles.View_71_6742}>
          <Text style={styles.Text_71_6742}>Playback Controls</Text>
        </View>
        <View style={styles.View_71_6743}>
          <View style={styles.View_71_6744}>
            <View style={styles.View_71_6745}>
              <View style={styles.View_71_6746}>
                <Text style={styles.Text_71_6746}>Large</Text>
              </View>
              <View style={styles.View_71_6747}>
                <Text style={styles.Text_71_6747}>Small</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_71_6748}>
            <View style={styles.View_71_7264}>
              <View style={styles.View_71_8123}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/baf7/113ca3d3b92e870d6ca4cc05b862cf7e"
                  }}
                  style={styles.ImageBackground_71_7969}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b9d/fea6/df29153bf2a65cac653fca78b3be6051"
                  }}
                  style={styles.ImageBackground_140_11620}
                />
              </View>
              <View style={styles.View_71_7266}>
                <View style={styles.View_71_7267}>
                  <View style={styles.View_71_7268} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f0/79bd/45bae730d62ca23324118a69fe432191"
                    }}
                    style={styles.ImageBackground_71_7269}
                  />
                </View>
                <View style={styles.View_71_7270}>
                  <Text style={styles.Text_71_7270}>0:07:02</Text>
                </View>
                <View style={styles.View_71_7271}>
                  <Text style={styles.Text_71_7271}>-2:36:44</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_71_7275}>
              <View style={styles.View_71_7276}>
                <View style={styles.View_71_7277}>
                  <Text style={styles.Text_71_7277}>0:07:02</Text>
                </View>
                <View style={styles.View_71_7278}>
                  <Text style={styles.Text_71_7278}>-2:36:44</Text>
                </View>
                <View style={styles.View_71_7279} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f0/79bd/45bae730d62ca23324118a69fe432191"
                  }}
                  style={styles.ImageBackground_71_7280}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a87b/155f/33f919642b851f11a79e58ce9dbbeba8"
                }}
                style={styles.ImageBackground_140_11631}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a0a/1345/3d69b01ffd81db9686bfb0670cc1a95a"
                }}
                style={styles.ImageBackground_140_11632}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_71_8187}>
        <View style={styles.View_71_8188}>
          <Text style={styles.Text_71_8188}>Player Controls</Text>
        </View>
        <View style={styles.View_71_8189}>
          <View style={styles.View_71_8190}>
            <View style={styles.View_71_8191}>
              <View style={styles.View_71_8192}>
                <Text style={styles.Text_71_8192}>Volume</Text>
              </View>
              <View style={styles.View_71_8193}>
                <Text style={styles.Text_71_8193}>Window</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_71_8194}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f127/f78a/325c17c5dd81ca152ce83fcf05099c17"
              }}
              style={styles.ImageBackground_71_7240}
            />
            <View style={styles.View_71_7228}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e1c/d334/778453b8d0eec7d52e208b7ae66c8df0"
                }}
                style={styles.ImageBackground_71_7229}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5132/ef74/734d258d9a8e4851ce1a46a6010f8082"
                }}
                style={styles.ImageBackground_71_7232}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc2a/c48d/2deb4ab0687953195e78562d613fea2d"
                }}
                style={styles.ImageBackground_71_7235}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_71_8356}>
        <View style={styles.View_I71_8356_10_2318}>
          <Text style={styles.Text_I71_8356_10_2318}>Templates</Text>
        </View>
        <View style={styles.View_I71_8356_10_2319} />
      </View>
      <View style={styles.View_71_8363}>
        <View style={styles.View_71_8364}>
          <Text style={styles.Text_71_8364}>Player Preview</Text>
        </View>
        <View style={styles.View_71_8587}>
          <View style={styles.View_71_8558}>
            <View style={styles.View_I71_8558_36_10050} />
          </View>
          <View style={styles.View_71_8574}>
            <View style={styles.View_I71_8574_71_8123}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/baf7/113ca3d3b92e870d6ca4cc05b862cf7e"
                }}
                style={styles.ImageBackground_I71_8574_71_7969}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b9d/fea6/df29153bf2a65cac653fca78b3be6051"
                }}
                style={styles.ImageBackground_I71_8574_140_11620}
              />
            </View>
            <View style={styles.View_I71_8574_71_7266}>
              <View style={styles.View_I71_8574_71_7267}>
                <View style={styles.View_I71_8574_71_7268} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f0/79bd/45bae730d62ca23324118a69fe432191"
                  }}
                  style={styles.ImageBackground_I71_8574_71_7269}
                />
              </View>
              <View style={styles.View_I71_8574_71_7270}>
                <Text style={styles.Text_I71_8574_71_7270}>0:07:02</Text>
              </View>
              <View style={styles.View_I71_8574_71_7271}>
                <Text style={styles.Text_I71_8574_71_7271}>-2:36:44</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29ed/4589/b66444c5d041576c56995eef5839c758"
            }}
            style={styles.ImageBackground_71_8513}
          />
          <View style={styles.View_71_8514}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/797e/6ae1/9be6203dd2dbd51fc88f21d303df523f"
              }}
              style={styles.ImageBackground_I71_8514_71_7229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f7/9836/33f729a0f37a04adb5d13971d998b204"
              }}
              style={styles.ImageBackground_I71_8514_71_7232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a13c/dfd2/8d770a43cc6aa98c37c65b9739c8f52c"
              }}
              style={styles.ImageBackground_I71_8514_71_7235}
            />
          </View>
          <View style={styles.View_71_8433}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
              }}
              style={styles.ImageBackground_I71_8433_36_7726}
            />
            <View style={styles.View_I71_8433_36_7731}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I71_8433_36_7732}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I71_8433_36_7736}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I71_8433_36_7740}
              />
            </View>
            <View style={styles.View_I71_8433_36_7747}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                }}
                style={styles.ImageBackground_I71_8433_36_7748}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("280.0546448087432%") },
  View_140_5518: {
    width: wp("84.7255369928401%"),
    minWidth: wp("84.7255369928401%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637231503579953%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_6739: {
    flexGrow: 1,
    width: wp("84.7255369928401%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_6739_5_19: {
    flexGrow: 1,
    width: wp("84.7255369928401%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_6739_5_20: {
    width: wp("45.346062052505964%"),
    minWidth: wp("45.346062052505964%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_6739_5_21: {
    width: wp("6.682577565632458%"),
    minWidth: wp("6.682577565632458%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I71_6739_5_22: {
    width: wp("34.84486873508354%"),
    minWidth: wp("34.84486873508354%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.501193317422432%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I71_6739_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_6739_5_23: {
    width: wp("35.56085918854415%"),
    minWidth: wp("35.56085918854415%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.16467780429594%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I71_6739_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I71_6739_5_24: {
    flexGrow: 1,
    width: wp("84.7255369928401%"),
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
  ImageBackground_140_5552: {
    width: wp("6.682577565632458%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_71_6740: {
    width: wp("84.7255369928401%"),
    minWidth: wp("84.7255369928401%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637231503579953%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_6740_10_2304: {
    flexGrow: 1,
    width: wp("8.47255369928401%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I71_6740_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_6740_10_2303: {
    flexGrow: 1,
    width: wp("84.7255369928401%"),
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
  View_71_6741: {
    width: wp("56.801909307875896%"),
    minWidth: wp("56.801909307875896%"),
    height: hp("37.56830601092896%"),
    minHeight: hp("37.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637231503579953%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_6742: {
    width: wp("23.389021479713605%"),
    minWidth: wp("23.389021479713605%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_6742: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_6743: {
    width: wp("56.801909307875896%"),
    minWidth: wp("56.801909307875896%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_71_6744: {
    width: wp("5.369928400954653%"),
    minWidth: wp("5.369928400954653%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.43198090692124%"),
    top: hp("9.153005464480877%")
  },
  View_71_6745: {
    width: wp("5.369928400954653%"),
    minWidth: wp("5.369928400954653%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_6746: {
    width: wp("5.369928400954653%"),
    minWidth: wp("5.369928400954653%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_6746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_6747: {
    width: wp("5.369928400954653%"),
    minWidth: wp("5.369928400954653%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.8415300546448%"),
    justifyContent: "center"
  },
  Text_71_6747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_6748: {
    width: wp("47.61336515513126%"),
    minWidth: wp("47.61336515513126%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_7264: {
    width: wp("39.97613365155131%"),
    minWidth: wp("39.97613365155131%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8186157517899755%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_71_8123: {
    flexGrow: 1,
    width: wp("26.610978520286395%"),
    height: hp("3.2865266330906606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.000764468973749%"),
    top: hp("6.830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_71_7969: {
    width: wp("13.965193354713604%"),
    height: hp("3.104454832650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0723541915274417%"),
    top: hp("0%")
  },
  ImageBackground_140_11620: {
    width: wp("2.064998508353222%"),
    minWidth: wp("2.064998508353222%"),
    height: hp("2.2519637978142075%"),
    minHeight: hp("2.2519637978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.08636634844869%"),
    top: hp("0.6275614754098342%")
  },
  View_71_7266: {
    flexGrow: 1,
    width: wp("36.63484486873509%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.670644391408116%"),
    top: hp("2.45901639344261%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_7267: {
    width: wp("36.63484486873509%"),
    minWidth: wp("36.63484486873509%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_7268: {
    flexGrow: 1,
    width: wp("36.63484486873509%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%"),
    backgroundColor: "rgba(120, 120, 128, 1)",
    opacity: 0.3199999928474426,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_71_7269: {
    width: wp("1.0739856801909307%"),
    minWidth: wp("1.0739856801909307%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9546539379474943%"),
    top: hp("0%")
  },
  View_71_7270: {
    width: wp("4.892601431980907%"),
    minWidth: wp("4.892601431980907%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688607%"),
    justifyContent: "flex-end"
  },
  Text_71_7270: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_71_7271: {
    width: wp("5.608591885441527%"),
    minWidth: wp("5.608591885441527%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.02625298329356%"),
    top: hp("2.0491803278688607%"),
    justifyContent: "flex-end"
  },
  Text_71_7271: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_71_7275: {
    width: wp("39.97613365155131%"),
    minWidth: wp("39.97613365155131%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8186157517899755%"),
    top: hp("21.584699453551906%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_71_7276: {
    flexGrow: 1,
    width: wp("30.787589498806682%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9379474940334127%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_7277: {
    width: wp("4.892601431980907%"),
    minWidth: wp("4.892601431980907%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_71_7277: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_71_7278: {
    width: wp("5.608591885441527%"),
    minWidth: wp("5.608591885441527%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.178997613365155%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_71_7278: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_71_7279: {
    flexGrow: 1,
    width: wp("19.09307875894988%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.489260143198091%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(120, 120, 128, 1)",
    opacity: 0.3199999928474426,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_71_7280: {
    width: wp("1.0739856801909307%"),
    minWidth: wp("1.0739856801909307%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.68257756563246%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_140_11631: {
    flexGrow: 1,
    width: wp("1.314164118436754%"),
    height: hp("1.680968237704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6440744331742252%"),
    top: hp("1.21843515198087%")
  },
  ImageBackground_140_11632: {
    flexGrow: 1,
    width: wp("1.5094183509844867%"),
    height: hp("1.40807771943306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.536023269689736%"),
    top: hp("1.361450862363398%")
  },
  View_71_8187: {
    width: wp("38.18615751789976%"),
    minWidth: wp("38.18615751789976%"),
    height: hp("33.60655737704918%"),
    minHeight: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637231503579953%"),
    top: hp("93.16939890710383%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_8188: {
    width: wp("20.644391408114558%"),
    minWidth: wp("20.644391408114558%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_8188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8189: {
    width: wp("38.18615751789976%"),
    minWidth: wp("38.18615751789976%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_71_8190: {
    width: wp("6.443914081145586%"),
    minWidth: wp("6.443914081145586%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.742243436754173%"),
    top: hp("6.010928961748647%")
  },
  View_71_8191: {
    width: wp("6.443914081145586%"),
    minWidth: wp("6.443914081145586%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8192: {
    width: wp("6.443914081145586%"),
    minWidth: wp("6.443914081145586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_8192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8193: {
    width: wp("6.443914081145586%"),
    minWidth: wp("6.443914081145586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775953%"),
    justifyContent: "center"
  },
  Text_71_8193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8194: {
    width: wp("27.923627684964202%"),
    minWidth: wp("27.923627684964202%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_71_7240: {
    width: wp("7.159904534606206%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8186157517899755%"),
    top: hp("4.371584699453564%")
  },
  View_71_7228: {
    width: wp("20.286396181384248%"),
    minWidth: wp("20.286396181384248%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8186157517899755%"),
    top: hp("15.163934426229517%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_7229: {
    flexGrow: 1,
    width: wp("6.762132212199573%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_71_7232: {
    flexGrow: 1,
    width: wp("6.762132212199573%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.76205437052506%"),
    top: hp("0%")
  },
  ImageBackground_71_7235: {
    flexGrow: 1,
    width: wp("6.762132212199573%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.524341810859188%"),
    top: hp("0%")
  },
  View_71_8356: {
    width: wp("84.7255369928401%"),
    minWidth: wp("84.7255369928401%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637231503579953%"),
    top: hp("135.5191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_8356_10_2318: {
    flexGrow: 1,
    width: wp("13.484486873508352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I71_8356_10_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_8356_10_2319: {
    flexGrow: 1,
    width: wp("84.7255369928401%"),
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
  View_71_8363: {
    width: wp("44.74940334128878%"),
    minWidth: wp("44.74940334128878%"),
    height: hp("118.5792349726776%"),
    minHeight: hp("118.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637231503579953%"),
    top: hp("152.73224043715848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_8364: {
    width: wp("19.212410501193318%"),
    minWidth: wp("19.212410501193318%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_8364: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8587: {
    width: wp("44.74940334128878%"),
    minWidth: wp("44.74940334128878%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_71_8558: {
    flexGrow: 1,
    width: wp("44.74940334128878%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546445%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_8558_36_10050: {
    flexGrow: 1,
    width: wp("15.990453460620524%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.439140811455848%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_71_8574: {
    flexGrow: 1,
    width: wp("39.97613365155131%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.386634844868734%"),
    top: hp("92.62295081967213%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I71_8574_71_8123: {
    flexGrow: 1,
    width: wp("26.610978520286395%"),
    height: hp("3.2865266330906606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.000764468973747%"),
    top: hp("6.830601092896188%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I71_8574_71_7969: {
    width: wp("13.965193354713604%"),
    height: hp("3.104454832650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0723541915274453%"),
    top: hp("0%")
  },
  ImageBackground_I71_8574_140_11620: {
    width: wp("2.064998508353222%"),
    minWidth: wp("2.064998508353222%"),
    height: hp("2.2519637978142075%"),
    minHeight: hp("2.2519637978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.086366348448685%"),
    top: hp("0.6275614754098342%")
  },
  View_I71_8574_71_7266: {
    flexGrow: 1,
    width: wp("36.63484486873509%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.670644391408116%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_8574_71_7267: {
    width: wp("36.63484486873509%"),
    minWidth: wp("36.63484486873509%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I71_8574_71_7268: {
    flexGrow: 1,
    width: wp("36.63484486873509%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(120, 120, 128, 1)",
    opacity: 0.3199999928474426,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_I71_8574_71_7269: {
    width: wp("1.0739856801909307%"),
    minWidth: wp("1.0739856801909307%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9546539379474925%"),
    top: hp("0%")
  },
  View_I71_8574_71_7270: {
    width: wp("4.892601431980907%"),
    minWidth: wp("4.892601431980907%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.049180327868811%"),
    justifyContent: "flex-end"
  },
  Text_I71_8574_71_7270: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I71_8574_71_7271: {
    width: wp("5.608591885441527%"),
    minWidth: wp("5.608591885441527%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.026252983293553%"),
    top: hp("2.049180327868811%"),
    justifyContent: "flex-end"
  },
  Text_I71_8574_71_7271: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  ImageBackground_71_8513: {
    flexGrow: 1,
    width: wp("7.159904534606206%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.84486873508353%"),
    top: hp("7.786885245901658%")
  },
  View_71_8514: {
    flexGrow: 1,
    width: wp("20.286396181384248%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.221957040572793%"),
    top: hp("7.786885245901658%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I71_8514_71_7229: {
    flexGrow: 1,
    width: wp("6.762132212199573%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I71_8514_71_7232: {
    flexGrow: 1,
    width: wp("6.762132212199573%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.762054370525059%"),
    top: hp("0%")
  },
  ImageBackground_I71_8514_71_7235: {
    flexGrow: 1,
    width: wp("6.762132212199573%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.52434181085919%"),
    top: hp("0%")
  },
  View_71_8433: {
    flexGrow: 1,
    width: wp("44.74940334128878%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I71_8433_36_7726: {
    flexGrow: 1,
    width: wp("44.74940334128878%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_I71_8433_36_7731: {
    flexGrow: 1,
    width: wp("7.954818252162887%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.04367728221957%"),
    top: hp("1.092912851135594%")
  },
  ImageBackground_I71_8433_36_7732: {
    width: wp("2.9031070718332805%"),
    minWidth: wp("2.9031070718332805%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.051788111575178%"),
    top: hp("1.2750344198258006%")
  },
  ImageBackground_I71_8433_36_7736: {
    width: wp("1.8224792434947303%"),
    minWidth: wp("1.8224792434947303%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6285613066825775%"),
    top: hp("1.274667541837431%")
  },
  ImageBackground_I71_8433_36_7740: {
    width: wp("2.028639618138425%"),
    minWidth: wp("2.028639618138425%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I71_8433_36_7747: {
    flexGrow: 1,
    width: wp("6.443914081145586%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5059665871121712%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I71_8433_36_7748: {
    width: wp("6.443914081145586%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
