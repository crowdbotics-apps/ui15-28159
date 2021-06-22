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
      <View style={styles.View_140_5512}>
        <View style={styles.View_10_2365}>
          <View style={styles.View_I10_2365_5_19}>
            <View style={styles.View_I10_2365_5_20}>
              <View style={styles.View_I10_2365_5_21} />
              <View style={styles.View_I10_2365_5_22}>
                <Text style={styles.Text_I10_2365_5_22}>
                  Switches &amp; Sliders
                </Text>
              </View>
            </View>
            <View style={styles.View_I10_2365_5_23}>
              <Text style={styles.Text_I10_2365_5_23}>
                Human Interface Guidelines: Sliders, Switches
              </Text>
            </View>
          </View>
          <View style={styles.View_I10_2365_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b09b/807f/beebf375920beaf3fb3b6a9e509d8d63"
          }}
          style={styles.ImageBackground_140_5540}
        />
      </View>
      <View style={styles.View_10_2366}>
        <View style={styles.View_I10_2366_10_2304}>
          <Text style={styles.Text_I10_2366_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I10_2366_10_2303} />
      </View>
      <View style={styles.View_10_2367}>
        <View style={styles.View_10_2368}>
          <Text style={styles.Text_10_2368}>Switch</Text>
        </View>
        <View style={styles.View_10_2369}>
          <View style={styles.View_10_2370}>
            <View style={styles.View_10_2371}>
              <View style={styles.View_10_2372}>
                <Text style={styles.Text_10_2372}>Light / Active</Text>
              </View>
              <View style={styles.View_10_2373}>
                <Text style={styles.Text_10_2373}>Light / Not Active</Text>
              </View>
              <View style={styles.View_10_2374}>
                <Text style={styles.Text_10_2374}>Dark / Active</Text>
              </View>
              <View style={styles.View_10_2375}>
                <Text style={styles.Text_10_2375}>Dark / Not Active</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_10_2376}>
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cc/28a5/3a8b44fbfc53c0fe51682fad6c4d3699"
              }}
              style={styles.TouchableOpacity_10_2583}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("10_2586"))
              }
            />
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfef/706a/e2e83a4f15045ef02eb28885929be037"
              }}
              style={styles.TouchableOpacity_10_2586}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("10_2583"))
              }
            />
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0338/1ef5/bf24dc48546f3e8e6e1d655c5d3e1f46"
              }}
              style={styles.TouchableOpacity_10_2589}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("10_2591"))
              }
            />
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d3/1da1/e5c2c04e6b4b0a31414f9b1de54389d3"
              }}
              style={styles.TouchableOpacity_10_2591}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("10_2589"))
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10_5488}>
        <View style={styles.View_10_5489}>
          <Text style={styles.Text_10_5489}>Slider</Text>
        </View>
        <View style={styles.View_10_5490}>
          <View style={styles.View_10_5491}>
            <View style={styles.View_10_5492}>
              <View style={styles.View_10_5493}>
                <Text style={styles.Text_10_5493}>Light / Without Icons</Text>
              </View>
              <View style={styles.View_10_5494}>
                <Text style={styles.Text_10_5494}>Light / With Icons</Text>
              </View>
              <View style={styles.View_11_3902}>
                <Text style={styles.Text_11_3902}>Dark / Without Icons</Text>
              </View>
              <View style={styles.View_11_3903}>
                <Text style={styles.Text_11_3903}>Dark / With Icons</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_10_5497}>
            <View style={styles.View_10_2596}>
              <View style={styles.View_11_3904}>
                <View style={styles.View_10_2597} />
                <View style={styles.View_10_2598}>
                  <View style={styles.View_10_2599} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7506/c2ee/0d80923b988e6642d6a1198ccf87bb3a"
                    }}
                    style={styles.ImageBackground_10_2600}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_11_3880}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/313e/8888/a6e8f199974b1cf674a81b9b9dc36e24"
                }}
                style={styles.ImageBackground_140_9865}
              />
              <View style={styles.View_11_3882}>
                <View style={styles.View_11_3883} />
                <View style={styles.View_11_3884}>
                  <View style={styles.View_11_3885} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7506/c2ee/0d80923b988e6642d6a1198ccf87bb3a"
                    }}
                    style={styles.ImageBackground_11_3886}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23a8/0492/0a6e9527fb8ff65cf628c7c12a2622d3"
                }}
                style={styles.ImageBackground_140_9857}
              />
            </View>
            <View style={styles.View_11_3953}>
              <View style={styles.View_11_3954}>
                <View style={styles.View_11_3955} />
                <View style={styles.View_11_3956}>
                  <View style={styles.View_11_3957} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7506/c2ee/0d80923b988e6642d6a1198ccf87bb3a"
                    }}
                    style={styles.ImageBackground_11_3958}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_11_3959}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c11/1fc0/78c54f7132b8a86de8ce534c456705b3"
                }}
                style={styles.ImageBackground_140_9873}
              />
              <View style={styles.View_11_3961}>
                <View style={styles.View_11_3962} />
                <View style={styles.View_11_3963}>
                  <View style={styles.View_11_3964} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7506/c2ee/0d80923b988e6642d6a1198ccf87bb3a"
                    }}
                    style={styles.ImageBackground_11_3965}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d14f/e534/dee38af76ba084616f87633f9462f97d"
                }}
                style={styles.ImageBackground_140_9874}
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
  View_2: { height: hp("164.34426229508196%") },
  View_140_5512: {
    width: wp("87.7511961722488%"),
    minWidth: wp("87.7511961722488%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.124401913875598%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_2365: {
    flexGrow: 1,
    width: wp("87.7511961722488%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2365_5_19: {
    flexGrow: 1,
    width: wp("87.7511961722488%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2365_5_20: {
    width: wp("45.74162679425837%"),
    minWidth: wp("45.74162679425837%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2365_5_21: {
    width: wp("5.358851674641149%"),
    minWidth: wp("5.358851674641149%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I10_2365_5_22: {
    width: wp("37.32057416267943%"),
    minWidth: wp("37.32057416267943%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.421052631578947%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2365_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2365_5_23: {
    width: wp("38.94736842105263%"),
    minWidth: wp("38.94736842105263%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80382775119617%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I10_2365_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I10_2365_5_24: {
    flexGrow: 1,
    width: wp("87.7511961722488%"),
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
  ImageBackground_140_5540: {
    width: wp("5.358851674641149%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_2366: {
    width: wp("87.7511961722488%"),
    minWidth: wp("87.7511961722488%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.124401913875598%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2366_10_2304: {
    flexGrow: 1,
    width: wp("6.794258373205741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2366_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2366_10_2303: {
    flexGrow: 1,
    width: wp("87.7511961722488%"),
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
  View_10_2367: {
    width: wp("29.665071770334926%"),
    minWidth: wp("29.665071770334926%"),
    height: hp("46.44808743169399%"),
    minHeight: hp("46.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.124401913875598%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_2368: {
    width: wp("6.6028708133971294%"),
    minWidth: wp("6.6028708133971294%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2369: {
    width: wp("29.665071770334926%"),
    minWidth: wp("29.665071770334926%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_10_2370: {
    width: wp("15.598086124401913%"),
    minWidth: wp("15.598086124401913%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.066985645933016%"),
    top: hp("4.508196721311471%")
  },
  View_10_2371: {
    width: wp("15.598086124401913%"),
    minWidth: wp("15.598086124401913%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_2372: {
    width: wp("12.15311004784689%"),
    minWidth: wp("12.15311004784689%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10_2372: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2373: {
    width: wp("15.598086124401913%"),
    minWidth: wp("15.598086124401913%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622949%"),
    justifyContent: "center"
  },
  Text_10_2373: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2374: {
    width: wp("11.291866028708133%"),
    minWidth: wp("11.291866028708133%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.622950819672134%"),
    justifyContent: "center"
  },
  Text_10_2374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2375: {
    width: wp("14.736842105263156%"),
    minWidth: wp("14.736842105263156%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.229508196721305%"),
    justifyContent: "center"
  },
  Text_10_2375: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2376: {
    width: wp("11.004784688995215%"),
    minWidth: wp("11.004784688995215%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_10_2583: {
    width: wp("4.8803827751196165%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("4.371584699453557%")
  },
  TouchableOpacity_10_2586: {
    width: wp("4.8803827751196165%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("12.97814207650272%")
  },
  TouchableOpacity_10_2589: {
    width: wp("4.8803827751196165%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("21.584699453551906%")
  },
  TouchableOpacity_10_2591: {
    width: wp("4.8803827751196165%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("30.19125683060109%")
  },
  View_10_5488: {
    width: wp("63.253588516746404%"),
    minWidth: wp("63.253588516746404%"),
    height: hp("53.551912568306015%"),
    minHeight: hp("53.551912568306015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.124401913875598%"),
    top: hp("102.04918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_5489: {
    width: wp("6.6028708133971294%"),
    minWidth: wp("6.6028708133971294%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10_5489: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_5490: {
    width: wp("63.253588516746404%"),
    minWidth: wp("63.253588516746404%"),
    height: hp("45.90163934426229%"),
    minHeight: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_10_5491: {
    width: wp("18.181818181818183%"),
    minWidth: wp("18.181818181818183%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.07177033492823%"),
    top: hp("5.73770491803279%")
  },
  View_10_5492: {
    width: wp("18.181818181818183%"),
    minWidth: wp("18.181818181818183%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_5493: {
    width: wp("18.181818181818183%"),
    minWidth: wp("18.181818181818183%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10_5493: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_5494: {
    width: wp("15.598086124401913%"),
    minWidth: wp("15.598086124401913%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202168%"),
    justifyContent: "center"
  },
  Text_10_5494: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_11_3902: {
    width: wp("17.320574162679424%"),
    minWidth: wp("17.320574162679424%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.765027322404364%"),
    justifyContent: "center"
  },
  Text_11_3902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_11_3903: {
    width: wp("14.736842105263156%"),
    minWidth: wp("14.736842105263156%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606547%"),
    justifyContent: "center"
  },
  Text_11_3903: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_5497: {
    width: wp("42.00956937799043%"),
    minWidth: wp("42.00956937799043%"),
    height: hp("45.90163934426229%"),
    minHeight: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_2596: {
    width: wp("35.88516746411483%"),
    minWidth: wp("35.88516746411483%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3904: {
    flexGrow: 1,
    width: wp("32.82296650717703%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5311004784689004%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_2597: {
    flexGrow: 1,
    width: wp("32.82296650717703%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(120, 120, 128, 1)",
    opacity: 0.20000000298023224
  },
  View_10_2598: {
    flexGrow: 1,
    width: wp("23.732057416267942%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_2599: {
    flexGrow: 1,
    width: wp("22.392344497607656%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 122, 255, 1)"
  },
  ImageBackground_10_2600: {
    width: wp("2.6794258373205744%"),
    minWidth: wp("2.6794258373205744%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.05263157894737%"),
    top: hp("0%")
  },
  View_11_3880: {
    width: wp("35.88516746411483%"),
    minWidth: wp("35.88516746411483%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_9865: {
    flexGrow: 1,
    width: wp("2.0645185406698565%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5311004784689004%"),
    top: hp("1.571038251366133%")
  },
  View_11_3882: {
    flexGrow: 1,
    width: wp("24.548444976076556%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.126719497607656%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3883: {
    flexGrow: 1,
    width: wp("24.593301435406698%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(120, 120, 128, 1)",
    opacity: 0.20000000298023224
  },
  View_11_3884: {
    flexGrow: 1,
    width: wp("15.502392344497606%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3885: {
    flexGrow: 1,
    width: wp("14.162679425837322%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 122, 255, 1)"
  },
  ImageBackground_11_3886: {
    width: wp("2.6794258373205744%"),
    minWidth: wp("2.6794258373205744%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.822966507177034%"),
    top: hp("0%")
  },
  ImageBackground_140_9857: {
    flexGrow: 1,
    width: wp("3.1478020334928227%"),
    height: hp("3.2016600416006282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.206264952153113%"),
    top: hp("1.4046424073599866%")
  },
  View_11_3953: {
    width: wp("35.88516746411483%"),
    minWidth: wp("35.88516746411483%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("25.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3954: {
    flexGrow: 1,
    width: wp("32.82296650717703%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5311004784689004%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3955: {
    flexGrow: 1,
    width: wp("32.82296650717703%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(120, 120, 128, 1)",
    opacity: 0.36000001430511475
  },
  View_11_3956: {
    flexGrow: 1,
    width: wp("23.732057416267942%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3957: {
    flexGrow: 1,
    width: wp("22.392344497607656%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(10, 132, 255, 1)"
  },
  ImageBackground_11_3958: {
    width: wp("2.6794258373205744%"),
    minWidth: wp("2.6794258373205744%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.05263157894737%"),
    top: hp("0%")
  },
  View_11_3959: {
    width: wp("35.88516746411483%"),
    minWidth: wp("35.88516746411483%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.062200956937799%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_9873: {
    flexGrow: 1,
    width: wp("2.0645185406698565%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5311004784689004%"),
    top: hp("1.571038251366133%")
  },
  View_11_3961: {
    flexGrow: 1,
    width: wp("24.548444976076556%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.126719497607656%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3962: {
    flexGrow: 1,
    width: wp("24.593301435406698%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(120, 120, 128, 1)",
    opacity: 0.36000001430511475
  },
  View_11_3963: {
    flexGrow: 1,
    width: wp("15.502392344497606%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_3964: {
    flexGrow: 1,
    width: wp("14.162679425837322%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(10, 132, 255, 1)"
  },
  ImageBackground_11_3965: {
    width: wp("2.6794258373205744%"),
    minWidth: wp("2.6794258373205744%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.822966507177034%"),
    top: hp("0%")
  },
  ImageBackground_140_9874: {
    flexGrow: 1,
    width: wp("3.1478020334928227%"),
    height: hp("3.2016600416006282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.206264952153113%"),
    top: hp("1.4046424073599724%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
