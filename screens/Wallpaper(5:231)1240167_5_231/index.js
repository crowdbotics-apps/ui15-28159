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
      <View style={styles.View_140_5455}>
        <View style={styles.View_5_1914}>
          <View style={styles.View_I5_1914_5_19}>
            <View style={styles.View_I5_1914_5_20}>
              <View style={styles.View_I5_1914_5_21} />
              <View style={styles.View_I5_1914_5_22}>
                <Text style={styles.Text_I5_1914_5_22}>Wallpaper</Text>
              </View>
            </View>
            <View style={styles.View_I5_1914_5_23}>
              <Text style={styles.Text_I5_1914_5_23}>
                Source: 9To5Mac (iPhones, iOS 15)
              </Text>
            </View>
          </View>
          <View style={styles.View_I5_1914_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f757/8a7c/3a95d44b85afef3f9c83897915ee3182"
          }}
          style={styles.ImageBackground_140_5456}
        />
      </View>
      <View style={styles.View_5_233}>
        <View style={styles.View_75_9141}>
          <Text style={styles.Text_75_9141}>Wallpaper</Text>
        </View>
        <View style={styles.View_75_9142}>
          <View style={styles.View_5_234}>
            <View style={styles.View_5_235}>
              <View style={styles.View_124_1268}>
                <Text style={styles.Text_124_1268}>iOS 15 / Light</Text>
              </View>
              <View style={styles.View_124_1267}>
                <Text style={styles.Text_124_1267}>iOS 15 / Dark</Text>
              </View>
              <View style={styles.View_5_236}>
                <Text style={styles.Text_5_236}>iPhone 12 / Blue / Light</Text>
              </View>
              <View style={styles.View_5_237}>
                <Text style={styles.Text_5_237}>iPhone 12 / Blue / Dark</Text>
              </View>
              <View style={styles.View_5_238}>
                <Text style={styles.Text_5_238}>iPhone 12 / Green / Light</Text>
              </View>
              <View style={styles.View_5_239}>
                <Text style={styles.Text_5_239}>iPhone 12 / Green / Dark</Text>
              </View>
              <View style={styles.View_5_240}>
                <Text style={styles.Text_5_240}>iPhone 12 / White / Light</Text>
              </View>
              <View style={styles.View_5_241}>
                <Text style={styles.Text_5_241}>iPhone 12 / White / Dark</Text>
              </View>
              <View style={styles.View_5_242}>
                <Text style={styles.Text_5_242}>iPhone 12 / Black / Light</Text>
              </View>
              <View style={styles.View_5_243}>
                <Text style={styles.Text_5_243}>iPhone 12 / Black / Dark</Text>
              </View>
              <View style={styles.View_5_244}>
                <Text style={styles.Text_5_244}>
                  iPhone 12 / Purple / Light
                </Text>
              </View>
              <View style={styles.View_5_245}>
                <Text style={styles.Text_5_245}>iPhone 12 / Purple / Dark</Text>
              </View>
              <View style={styles.View_5_246}>
                <Text style={styles.Text_5_246}>
                  iPhone 12 Pro / Silver / Light
                </Text>
              </View>
              <View style={styles.View_5_247}>
                <Text style={styles.Text_5_247}>
                  iPhone 12 Pro / Silver / Dark
                </Text>
              </View>
              <View style={styles.View_5_248}>
                <Text style={styles.Text_5_248}>
                  iPhone 12 Pro / Space Gray / Light
                </Text>
              </View>
              <View style={styles.View_5_249}>
                <Text style={styles.Text_5_249}>
                  iPhone 12 Pro / Space Gray / Dark
                </Text>
              </View>
              <View style={styles.View_5_250}>
                <Text style={styles.Text_5_250}>
                  iPhone 12 Pro / Gold / Light
                </Text>
              </View>
              <View style={styles.View_5_251}>
                <Text style={styles.Text_5_251}>
                  iPhone 12 Pro / Gold / Dark
                </Text>
              </View>
              <View style={styles.View_5_252}>
                <Text style={styles.Text_5_252}>
                  iPhone 12 Pro / Pacific Blue / Light
                </Text>
              </View>
              <View style={styles.View_5_253}>
                <Text style={styles.Text_5_253}>
                  iPhone 12 Pro / Pacific Blue / Dark
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_5_254}>
            <View style={styles.View_5_255}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d0/f310/0165ee9fdf32ff45b62833123c159b5b"
                }}
                style={styles.ImageBackground_5_256}
              />
            </View>
            <View style={styles.View_122_4127}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1caa/7b78/99057de4e940a4a9c78ac058302ef9f1"
                }}
                style={styles.ImageBackground_122_4128}
              />
            </View>
            <View style={styles.View_122_4125}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/317b/e9a0/5cf92ebabea3b29a3c9eddd53dae329b"
                }}
                style={styles.ImageBackground_122_4126}
              />
            </View>
            <View style={styles.View_5_257}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c7/815a/a737a9e84896b0eaa251363221b38803"
                }}
                style={styles.ImageBackground_5_258}
              />
            </View>
            <View style={styles.View_5_259}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eba/0b8e/c7e861ad71eb269ecb0100b4a8f71d65"
                }}
                style={styles.ImageBackground_5_260}
              />
            </View>
            <View style={styles.View_5_261}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/096f/cacb/95d99550e851dfd72d3f61e6cc1006a4"
                }}
                style={styles.ImageBackground_5_262}
              />
            </View>
            <View style={styles.View_5_263}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7501/9c80/cd252a2490ab3dc62b98f4b1b11caaee"
                }}
                style={styles.ImageBackground_5_264}
              />
            </View>
            <View style={styles.View_5_265}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f33d/34cb/db58cffbc01fcd18361956f6cf5894d2"
                }}
                style={styles.ImageBackground_5_266}
              />
            </View>
            <View style={styles.View_5_267}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a83/1e9c/9e996069ef788c287aef8c8e913562ed"
                }}
                style={styles.ImageBackground_5_268}
              />
            </View>
            <View style={styles.View_5_269}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a91d/9324/9427200efe191ddee11545ccf28ae43f"
                }}
                style={styles.ImageBackground_5_270}
              />
            </View>
            <View style={styles.View_5_271}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e83/f0ef/06c63661894505159cf11eb57c45d12f"
                }}
                style={styles.ImageBackground_5_272}
              />
            </View>
            <View style={styles.View_5_273}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76c/87aa/f92f8a966161560b70b40efe76e0f2f9"
                }}
                style={styles.ImageBackground_5_274}
              />
            </View>
            <View style={styles.View_5_275}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d46/75c1/7fd35509b58818d3653bd4922f3def1d"
                }}
                style={styles.ImageBackground_5_276}
              />
            </View>
            <View style={styles.View_5_277}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3545/1fc1/b85d25fa0fd252edd5881406c2c86d91"
                }}
                style={styles.ImageBackground_5_278}
              />
            </View>
            <View style={styles.View_5_279}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ed8/02ed/5cb829407d814ffb1389789adfdf7cca"
                }}
                style={styles.ImageBackground_5_280}
              />
            </View>
            <View style={styles.View_5_281}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8691/1a4c/361701344e0a04c90171e3289c8e78f3"
                }}
                style={styles.ImageBackground_5_282}
              />
            </View>
            <View style={styles.View_5_283}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad3b/7400/744319f4bd69e4637e08a7e496039698"
                }}
                style={styles.ImageBackground_5_284}
              />
            </View>
            <View style={styles.View_5_285}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8788/12bf/11cb50b4330713d389e124b2c11c5c7f"
                }}
                style={styles.ImageBackground_5_286}
              />
            </View>
            <View style={styles.View_5_287}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5180/c0cd/c2ef5c49c3446e2988560237998dad62"
                }}
                style={styles.ImageBackground_5_288}
              />
            </View>
            <View style={styles.View_5_289}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa11/cbff/11f9bd18b07107cf20e15153a31057ff"
                }}
                style={styles.ImageBackground_5_290}
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
  View_2: { height: hp("173.36065573770492%") },
  View_140_5455: {
    width: wp("98.4578313253012%"),
    minWidth: wp("98.4578313253012%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7710843373493975%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1914: {
    flexGrow: 1,
    width: wp("98.4578313253012%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1914_5_19: {
    flexGrow: 1,
    width: wp("98.4578313253012%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1914_5_20: {
    width: wp("94.48192771084337%"),
    minWidth: wp("94.48192771084337%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1914_5_21: {
    width: wp("0.6746987951807228%"),
    minWidth: wp("0.6746987951807228%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1914_5_22: {
    width: wp("93.42168674698796%"),
    minWidth: wp("93.42168674698796%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.060240963855422%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_1914_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1914_5_23: {
    width: wp("3.5903614457831328%"),
    minWidth: wp("3.5903614457831328%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.86746987951807%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I5_1914_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_1914_5_24: {
    flexGrow: 1,
    width: wp("98.4578313253012%"),
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
  ImageBackground_140_5456: {
    width: wp("0.6746987951807228%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_233: {
    width: wp("98.4578313253012%"),
    minWidth: wp("98.4578313253012%"),
    height: hp("134.9726775956284%"),
    minHeight: hp("134.9726775956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7710843373493975%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_75_9141: {
    width: wp("1.253012048192771%"),
    minWidth: wp("1.253012048192771%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9142: {
    width: wp("98.4578313253012%"),
    minWidth: wp("98.4578313253012%"),
    height: hp("127.32240437158471%"),
    minHeight: hp("127.32240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_5_234: {
    width: wp("96.97590361445783%"),
    minWidth: wp("96.97590361445783%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3855421686746988%"),
    top: hp("0%")
  },
  View_5_235: {
    width: wp("96.97590361445783%"),
    minWidth: wp("96.97590361445783%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_124_1268: {
    width: wp("1.5301204819277108%"),
    minWidth: wp("1.5301204819277108%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_124_1268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_124_1267: {
    width: wp("1.4216867469879517%"),
    minWidth: wp("1.4216867469879517%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.903614457831325%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_124_1267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_236: {
    width: wp("2.6144578313253013%"),
    minWidth: wp("2.6144578313253013%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.80722891566265%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_237: {
    width: wp("2.506024096385542%"),
    minWidth: wp("2.506024096385542%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.710843373493976%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_238: {
    width: wp("2.7228915662650603%"),
    minWidth: wp("2.7228915662650603%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.6144578313253%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_239: {
    width: wp("2.6144578313253013%"),
    minWidth: wp("2.6144578313253013%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.518072289156628%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_239: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_240: {
    width: wp("2.7228915662650603%"),
    minWidth: wp("2.7228915662650603%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.421686746987948%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_241: {
    width: wp("2.6144578313253013%"),
    minWidth: wp("2.6144578313253013%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.325301204819276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_241: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_242: {
    width: wp("2.7228915662650603%"),
    minWidth: wp("2.7228915662650603%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2289156626506%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_242: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_243: {
    width: wp("2.6144578313253013%"),
    minWidth: wp("2.6144578313253013%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.132530120481924%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_244: {
    width: wp("2.8313253012048194%"),
    minWidth: wp("2.8313253012048194%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.036144578313255%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_245: {
    width: wp("2.7228915662650603%"),
    minWidth: wp("2.7228915662650603%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.939759036144586%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_245: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_246: {
    width: wp("3.265060240963855%"),
    minWidth: wp("3.265060240963855%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.8433734939759%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_246: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_247: {
    width: wp("3.156626506024096%"),
    minWidth: wp("3.156626506024096%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.74698795180723%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_248: {
    width: wp("3.6987951807228914%"),
    minWidth: wp("3.6987951807228914%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.65060240963857%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_249: {
    width: wp("3.5903614457831328%"),
    minWidth: wp("3.5903614457831328%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.55421686746988%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_249: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_250: {
    width: wp("3.048192771084337%"),
    minWidth: wp("3.048192771084337%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4578313253012%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_251: {
    width: wp("2.9397590361445785%"),
    minWidth: wp("2.9397590361445785%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.36144578313254%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_252: {
    width: wp("3.91566265060241%"),
    minWidth: wp("3.91566265060241%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26506024096385%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_253: {
    width: wp("3.8072289156626504%"),
    minWidth: wp("3.8072289156626504%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.16867469879519%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_254: {
    width: wp("98.4578313253012%"),
    minWidth: wp("98.4578313253012%"),
    height: hp("119.67213114754098%"),
    minHeight: hp("119.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_5_255: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3855421686746988%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_256: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_122_4127: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.289156626506024%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_122_4128: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_122_4125: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.192771084337348%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_122_4126: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_257: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.096385542168674%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_258: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_259: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_260: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_261: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.903614457831328%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_262: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_263: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.807228915662648%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_264: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_265: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.71084337349397%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_266: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_267: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.614457831325296%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_268: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_269: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.51807228915662%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_270: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_271: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.42168674698795%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_272: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_273: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.32530120481928%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_274: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_275: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.2289156626506%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_276: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_277: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.13253012048193%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_278: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_279: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.03614457831327%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_280: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_281: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.93975903614458%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_282: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_283: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.8433734939759%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_284: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_285: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.74698795180724%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_286: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_287: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.65060240963855%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_288: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_289: {
    width: wp("4.518072289156627%"),
    minWidth: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.55421686746989%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_290: {
    flexGrow: 1,
    width: wp("4.518072289156627%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
