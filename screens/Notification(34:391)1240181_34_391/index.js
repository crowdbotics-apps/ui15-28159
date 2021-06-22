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
      <View style={styles.View_140_5516}>
        <View style={styles.View_34_392}>
          <View style={styles.View_I34_392_5_19}>
            <View style={styles.View_I34_392_5_20}>
              <View style={styles.View_I34_392_5_21} />
              <View style={styles.View_I34_392_5_22}>
                <Text style={styles.Text_I34_392_5_22}>Notification</Text>
              </View>
            </View>
            <View style={styles.View_I34_392_5_23}>
              <Text style={styles.Text_I34_392_5_23}>
                Human Interface Guidelines: Notifications
              </Text>
            </View>
          </View>
          <View style={styles.View_I34_392_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3cf/0510/848724b01414406ebb891c4076a1752d"
          }}
          style={styles.ImageBackground_140_5548}
        />
      </View>
      <View style={styles.View_34_393}>
        <View style={styles.View_I34_393_10_2304}>
          <Text style={styles.Text_I34_393_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I34_393_10_2303} />
      </View>
      <View style={styles.View_34_394}>
        <View style={styles.View_34_395}>
          <Text style={styles.Text_34_395}>Notification Icon Type</Text>
        </View>
        <View style={styles.View_126_5026}>
          <View style={styles.View_126_5066}>
            <View style={styles.View_126_5067}>
              <View style={styles.View_126_5068}>
                <Text style={styles.Text_126_5068}>App Icon</Text>
              </View>
              <View style={styles.View_126_5069}>
                <Text style={styles.Text_126_5069}>Avatar + App Icon</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_126_5065}>
            <View style={styles.View_34_36}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                }}
                style={styles.ImageBackground_34_38}
              />
            </View>
            <View style={styles.View_126_5064}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/656d/cb89/8e0438a769a8a22567dd422dd9acd798"
                }}
                style={styles.ImageBackground_126_5063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8c/808b/cf8962c09b61b19f1ed7d63aea0d1825"
                }}
                style={styles.ImageBackground_126_5072}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_3899}>
        <View style={styles.View_36_3900}>
          <Text style={styles.Text_36_3900}>Incoming Call</Text>
        </View>
        <View style={styles.View_34_147}>
          <View style={styles.View_41_2492}>
            <View style={styles.View_34_148}>
              <View style={styles.View_34_376}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ce0/b2da/06189878d84a9eb91a0425727d218432"
                  }}
                  style={styles.ImageBackground_34_377}
                />
              </View>
              <View style={styles.View_34_150}>
                <View style={styles.View_34_151}>
                  <Text style={styles.Text_34_151}>Peter Herbert Bar...</Text>
                </View>
                <View style={styles.View_34_152}>
                  <Text style={styles.Text_34_152}>mobile</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_34_153}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb91/f0db/6b41604612f7be6adb7d4512c4d94f84"
                }}
                style={styles.ImageBackground_36_3965}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcd9/85f6/aa91c7ea406483c6d9676b81a46882ff"
                }}
                style={styles.ImageBackground_36_3961}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_34_432}>
        <View style={styles.View_I34_432_10_2311}>
          <Text style={styles.Text_I34_432_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I34_432_10_2312} />
      </View>
      <View style={styles.View_35_5309}>
        <View style={styles.View_35_5310}>
          <Text style={styles.Text_35_5310}>Notification Action</Text>
        </View>
        <View style={styles.View_35_5311}>
          <View style={styles.View_35_5312}>
            <View style={styles.View_35_5313}>
              <View style={styles.View_35_5314}>
                <Text style={styles.Text_35_5314}>Light / Single</Text>
              </View>
              <View style={styles.View_35_5315}>
                <Text style={styles.Text_35_5315}>Light / Mutiple</Text>
              </View>
              <View style={styles.View_36_3866}>
                <Text style={styles.Text_36_3866}>Dark / Single</Text>
              </View>
              <View style={styles.View_36_3867}>
                <Text style={styles.Text_36_3867}>Dark / Mutiple</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_35_5320}>
            <View style={styles.View_35_5354}>
              <View style={styles.View_35_5356}>
                <Text style={styles.Text_35_5356}>Action</Text>
              </View>
            </View>
            <View style={styles.View_36_2790}>
              <View style={styles.View_36_2754}>
                <View style={styles.View_I36_2754_35_5356}>
                  <Text style={styles.Text_I36_2754_35_5356}>Action</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec5/8eff/7d5462e9644b214de71f76e14d5f9b51"
                }}
                style={styles.ImageBackground_36_2786}
              />
              <View style={styles.View_36_2778}>
                <View style={styles.View_I36_2778_35_5356}>
                  <Text style={styles.Text_I36_2778_35_5356}>Action</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec5/8eff/7d5462e9644b214de71f76e14d5f9b51"
                }}
                style={styles.ImageBackground_36_2787}
              />
              <View style={styles.View_36_2780}>
                <View style={styles.View_I36_2780_35_5356}>
                  <Text style={styles.Text_I36_2780_35_5356}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_35_6285}>
              <View style={styles.View_35_6287}>
                <Text style={styles.Text_35_6287}>Action</Text>
              </View>
            </View>
            <View style={styles.View_36_2806}>
              <View style={styles.View_36_2807}>
                <View style={styles.View_I36_2807_35_6287}>
                  <Text style={styles.Text_I36_2807_35_6287}>Action</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6007/2904/567cf3c16353b25fd541956edb87c13a"
                }}
                style={styles.ImageBackground_36_2808}
              />
              <View style={styles.View_36_2809}>
                <View style={styles.View_I36_2809_35_6287}>
                  <Text style={styles.Text_I36_2809_35_6287}>Action</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6007/2904/567cf3c16353b25fd541956edb87c13a"
                }}
                style={styles.ImageBackground_36_2810}
              />
              <View style={styles.View_36_2811}>
                <View style={styles.View_I36_2811_35_6287}>
                  <Text style={styles.Text_I36_2811_35_6287}>Action</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_34_433}>
        <View style={styles.View_34_434}>
          <Text style={styles.Text_34_434}>Notification</Text>
        </View>
        <View style={styles.View_34_435}>
          <View style={styles.View_34_436}>
            <View style={styles.View_34_437}>
              <View style={styles.View_34_438}>
                <Text style={styles.Text_34_438}>Light / Default</Text>
              </View>
              <View style={styles.View_122_3917}>
                <Text style={styles.Text_122_3917}>Light / Stacked</Text>
              </View>
              <View style={styles.View_34_439}>
                <Text style={styles.Text_34_439}>Light / Pressed</Text>
              </View>
              <View style={styles.View_36_3897}>
                <Text style={styles.Text_36_3897}>Dark / Default</Text>
              </View>
              <View style={styles.View_122_6035}>
                <Text style={styles.Text_122_6035}>Dark / Stacked</Text>
              </View>
              <View style={styles.View_36_3898}>
                <Text style={styles.Text_36_3898}>Dark / Pressed</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_34_470}>
            <View style={styles.View_35_6301}>
              <View style={styles.View_121_0}>
                <View style={styles.View_121_31}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                    }}
                    style={styles.ImageBackground_I121_31_34_38}
                  />
                </View>
                <View style={styles.View_35_6307}>
                  <View style={styles.View_121_79}>
                    <View style={styles.View_35_6308}>
                      <Text style={styles.Text_35_6308}>
                        Notification Title
                      </Text>
                    </View>
                    <View style={styles.View_121_89}>
                      <Text style={styles.Text_121_89}>now</Text>
                    </View>
                  </View>
                  <View style={styles.View_35_6309}>
                    <Text style={styles.Text_35_6309}>
                      Here’s notification text.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_122_5996}>
              <View style={styles.View_122_5997} />
              <View style={styles.View_122_5998} />
              <View style={styles.View_122_5999}>
                <View style={styles.View_I122_5999_121_0}>
                  <View style={styles.View_I122_5999_121_31}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                      }}
                      style={styles.ImageBackground_I122_5999_121_31_34_38}
                    />
                  </View>
                  <View style={styles.View_I122_5999_35_6307}>
                    <View style={styles.View_I122_5999_121_79}>
                      <View style={styles.View_I122_5999_35_6308}>
                        <Text style={styles.Text_I122_5999_35_6308}>
                          Notification Title
                        </Text>
                      </View>
                      <View style={styles.View_I122_5999_121_89}>
                        <Text style={styles.Text_I122_5999_121_89}>now</Text>
                      </View>
                    </View>
                    <View style={styles.View_I122_5999_35_6309}>
                      <Text style={styles.Text_I122_5999_35_6309}>
                        Here’s notification text.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_35_6310}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca2b/4e38/45481b63702175d4cc2a8887a60a03d7"
                }}
                style={styles.ImageBackground_35_6311}
              />
              <View style={styles.View_121_193}>
                <View style={styles.View_I121_193_121_0}>
                  <View style={styles.View_I121_193_121_31}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                      }}
                      style={styles.ImageBackground_I121_193_121_31_34_38}
                    />
                  </View>
                  <View style={styles.View_I121_193_35_6307}>
                    <View style={styles.View_I121_193_121_79}>
                      <View style={styles.View_I121_193_35_6308}>
                        <Text style={styles.Text_I121_193_35_6308}>
                          Notification Title
                        </Text>
                      </View>
                      <View style={styles.View_I121_193_121_89}>
                        <Text style={styles.Text_I121_193_121_89}>now</Text>
                      </View>
                    </View>
                    <View style={styles.View_I121_193_35_6309}>
                      <Text style={styles.Text_I121_193_35_6309}>
                        Here’s notification text.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_6323}>
                <View style={styles.View_I35_6323_35_5356}>
                  <Text style={styles.Text_I35_6323_35_5356}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_121_346}>
              <View style={styles.View_121_347}>
                <View style={styles.View_121_348}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                    }}
                    style={styles.ImageBackground_I121_348_34_38}
                  />
                </View>
                <View style={styles.View_121_349}>
                  <View style={styles.View_121_350}>
                    <View style={styles.View_121_351}>
                      <Text style={styles.Text_121_351}>
                        Notification Title
                      </Text>
                    </View>
                    <View style={styles.View_121_352}>
                      <Text style={styles.Text_121_352}>now</Text>
                    </View>
                  </View>
                  <View style={styles.View_121_353}>
                    <Text style={styles.Text_121_353}>
                      Here’s a spot for notification text.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_122_3954}>
              <View style={styles.View_122_3955} />
              <View style={styles.View_122_3956} />
              <View style={styles.View_122_3957}>
                <View style={styles.View_I122_3957_121_347}>
                  <View style={styles.View_I122_3957_121_348}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                      }}
                      style={styles.ImageBackground_I122_3957_121_348_34_38}
                    />
                  </View>
                  <View style={styles.View_I122_3957_121_349}>
                    <View style={styles.View_I122_3957_121_350}>
                      <View style={styles.View_I122_3957_121_351}>
                        <Text style={styles.Text_I122_3957_121_351}>
                          Notification Title
                        </Text>
                      </View>
                      <View style={styles.View_I122_3957_121_352}>
                        <Text style={styles.Text_I122_3957_121_352}>now</Text>
                      </View>
                    </View>
                    <View style={styles.View_I122_3957_121_353}>
                      <Text style={styles.Text_I122_3957_121_353}>
                        Here’s a spot for notification text.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_35_4575}>
              <View style={styles.View_35_4913}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe7d/00fb/0f0ae81d5042c6a4979acbe84b553d8a"
                  }}
                  style={styles.ImageBackground_35_4914}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0f2/7b15/1dc09c3fb019b28043f2219595bdef35"
                  }}
                  style={styles.ImageBackground_140_11784}
                />
              </View>
              <View style={styles.View_121_355}>
                <View style={styles.View_I121_355_121_347}>
                  <View style={styles.View_I121_355_121_348}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                      }}
                      style={styles.ImageBackground_I121_355_121_348_34_38}
                    />
                  </View>
                  <View style={styles.View_I121_355_121_349}>
                    <View style={styles.View_I121_355_121_350}>
                      <View style={styles.View_I121_355_121_351}>
                        <Text style={styles.Text_I121_355_121_351}>
                          Notification Title
                        </Text>
                      </View>
                      <View style={styles.View_I121_355_121_352}>
                        <Text style={styles.Text_I121_355_121_352}>now</Text>
                      </View>
                    </View>
                    <View style={styles.View_I121_355_121_353}>
                      <Text style={styles.Text_I121_355_121_353}>
                        Here’s a spot for notification text.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_6144}>
                <View style={styles.View_I35_6144_35_6287}>
                  <Text style={styles.Text_I35_6144_35_6287}>Action</Text>
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
  View_2: { height: hp("371.9945355191257%") },
  View_140_5516: {
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
  View_34_392: {
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
  View_I34_392_5_19: {
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
  View_I34_392_5_20: {
    width: wp("47.94117647058824%"),
    minWidth: wp("47.94117647058824%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I34_392_5_21: {
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
  View_I34_392_5_22: {
    width: wp("39.31372549019608%"),
    minWidth: wp("39.31372549019608%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.627450980392158%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I34_392_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I34_392_5_23: {
    width: wp("36.37254901960784%"),
    minWidth: wp("36.37254901960784%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.07843137254902%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I34_392_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I34_392_5_24: {
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
  ImageBackground_140_5548: {
    width: wp("5.490196078431373%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_34_393: {
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
  View_I34_393_10_2304: {
    flexGrow: 1,
    width: wp("6.96078431372549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I34_393_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I34_393_10_2303: {
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
  View_34_394: {
    width: wp("30.392156862745097%"),
    minWidth: wp("30.392156862745097%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_395: {
    width: wp("24.80392156862745%"),
    minWidth: wp("24.80392156862745%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_34_395: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_5026: {
    width: wp("30.392156862745097%"),
    minWidth: wp("30.392156862745097%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_126_5066: {
    width: wp("15.098039215686274%"),
    minWidth: wp("15.098039215686274%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.294117647058826%"),
    top: hp("6.830601092896167%")
  },
  View_126_5067: {
    width: wp("15.098039215686274%"),
    minWidth: wp("15.098039215686274%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_5068: {
    width: wp("7.0588235294117645%"),
    minWidth: wp("7.0588235294117645%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_5068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_5069: {
    width: wp("15.098039215686274%"),
    minWidth: wp("15.098039215686274%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.568306010928971%"),
    justifyContent: "center"
  },
  Text_126_5069: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_5065: {
    width: wp("12.156862745098039%"),
    minWidth: wp("12.156862745098039%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_34_36: {
    width: wp("5.88235294117647%"),
    minWidth: wp("5.88235294117647%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_34_38: {
    flexGrow: 1,
    width: wp("5.88235294117647%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_126_5064: {
    width: wp("5.88235294117647%"),
    minWidth: wp("5.88235294117647%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_126_5063: {
    flexGrow: 1,
    width: wp("5.88235294117647%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_126_5072: {
    flexGrow: 1,
    width: wp("2.3529411764705883%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.313725490196079%"),
    top: hp("5.191256830601091%"),
    resizeMode: "cover"
  },
  View_36_3899: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("92.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3900: {
    width: wp("14.705882352941178%"),
    minWidth: wp("14.705882352941178%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_3900: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_34_147: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_41_2492: {
    flexGrow: 1,
    width: wp("32.450980392156865%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3725490196078436%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_148: {
    width: wp("22.058823529411764%"),
    minWidth: wp("22.058823529411764%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_34_376: {
    width: wp("4.411764705882353%"),
    minWidth: wp("4.411764705882353%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.34153005464480657%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_34_377: {
    width: wp("4.411764705882353%"),
    height: hp("6.147540983606557%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_34_150: {
    width: wp("16.07843137254902%"),
    minWidth: wp("16.07843137254902%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.980392156862744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_34_151: {
    width: wp("16.07843137254902%"),
    minWidth: wp("16.07843137254902%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_34_152: {
    width: wp("16.07843137254902%"),
    minWidth: wp("16.07843137254902%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_34_152: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_34_153: {
    width: wp("8.431372549019608%"),
    minWidth: wp("8.431372549019608%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.01960784313725%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_3965: {
    width: wp("3.5294117647058822%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_36_3961: {
    width: wp("3.5294117647058822%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.901960784313722%"),
    top: hp("0%")
  },
  View_34_432: {
    width: wp("87.45098039215686%"),
    minWidth: wp("87.45098039215686%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("121.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I34_432_10_2311: {
    flexGrow: 1,
    width: wp("10.980392156862745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I34_432_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I34_432_10_2312: {
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
  View_35_5309: {
    width: wp("57.94117647058824%"),
    minWidth: wp("57.94117647058824%"),
    height: hp("95.08196721311475%"),
    minHeight: hp("95.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("138.66120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_35_5310: {
    width: wp("21.470588235294116%"),
    minWidth: wp("21.470588235294116%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_35_5310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_35_5311: {
    width: wp("57.94117647058824%"),
    minWidth: wp("57.94117647058824%"),
    height: hp("87.43169398907104%"),
    minHeight: hp("87.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_35_5312: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.607843137254896%"),
    top: hp("6.83060109289616%")
  },
  View_35_5313: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5314: {
    width: wp("12.450980392156863%"),
    minWidth: wp("12.450980392156863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_35_5314: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_35_5315: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.765027322404364%"),
    justifyContent: "center"
  },
  Text_35_5315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_3866: {
    width: wp("11.568627450980392%"),
    minWidth: wp("11.568627450980392%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480876%"),
    justifyContent: "center"
  },
  Text_36_3866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_3867: {
    width: wp("12.450980392156863%"),
    minWidth: wp("12.450980392156863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.29508196721312%"),
    justifyContent: "center"
  },
  Text_36_3867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_35_5320: {
    width: wp("41.47058823529412%"),
    minWidth: wp("41.47058823529412%"),
    height: hp("87.43169398907104%"),
    minHeight: hp("87.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5354: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_35_5356: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_35_5356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_2790: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("16.939890710382485%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_2754: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I36_2754_35_5356: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_I36_2754_35_5356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_36_2786: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475443%")
  },
  View_36_2778: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475443%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I36_2778_35_5356: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.459016393442596%"),
    justifyContent: "flex-start"
  },
  Text_I36_2778_35_5356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_36_2787: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295083%")
  },
  View_36_2780: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295083%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I36_2780_35_5356: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_I36_2780_35_5356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_35_6285: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_35_6287: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_35_6287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_2806: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("58.46994535519124%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_2807: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I36_2807_35_6287: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_I36_2807_35_6287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_36_2808: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475386%")
  },
  View_36_2809: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475386%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I36_2809_35_6287: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "flex-start"
  },
  Text_I36_2809_35_6287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_36_2810: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295083%")
  },
  View_36_2811: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295083%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I36_2811_35_6287: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.459016393442596%"),
    justifyContent: "flex-start"
  },
  Text_I36_2811_35_6287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_34_433: {
    width: wp("57.94117647058824%"),
    minWidth: wp("57.94117647058824%"),
    height: hp("120.76502732240438%"),
    minHeight: hp("120.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2745098039215685%"),
    top: hp("242.48633879781423%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_434: {
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
  Text_34_434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_34_435: {
    width: wp("57.94117647058824%"),
    minWidth: wp("57.94117647058824%"),
    height: hp("113.11475409836065%"),
    minHeight: hp("113.11475409836065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043673%")
  },
  View_34_436: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("92.34972677595628%"),
    minHeight: hp("92.34972677595628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.607843137254896%"),
    top: hp("6.967213114754088%")
  },
  View_34_437: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("92.34972677595628%"),
    minHeight: hp("92.34972677595628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_34_438: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_34_438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_122_3917: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508233%"),
    justifyContent: "center"
  },
  Text_122_3917: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_34_439: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.6994535519126%"),
    justifyContent: "center"
  },
  Text_34_439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_3897: {
    width: wp("12.450980392156863%"),
    minWidth: wp("12.450980392156863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.37158469945359%"),
    justifyContent: "center"
  },
  Text_36_3897: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_122_6035: {
    width: wp("12.450980392156863%"),
    minWidth: wp("12.450980392156863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.30601092896177%"),
    justifyContent: "center"
  },
  Text_122_6035: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_3898: {
    width: wp("12.450980392156863%"),
    minWidth: wp("12.450980392156863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89.07103825136619%"),
    justifyContent: "center"
  },
  Text_36_3898: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_34_470: {
    width: wp("41.47058823529412%"),
    minWidth: wp("41.47058823529412%"),
    height: hp("113.11475409836065%"),
    minHeight: hp("113.11475409836065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_6301: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_121_0: {
    flexGrow: 1,
    width: wp("33.23529411764706%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9803921568627452%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_121_31: {
    width: wp("3.1372549019607843%"),
    minWidth: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I121_31_34_38: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_35_6307: {
    width: wp("29.117647058823533%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.117647058823531%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_121_79: {
    width: wp("29.117647058823533%"),
    minWidth: wp("29.117647058823533%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_35_6308: {
    width: wp("25.68627450980392%"),
    minWidth: wp("25.68627450980392%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_6308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_121_89: {
    width: wp("2.450980392156863%"),
    minWidth: wp("2.450980392156863%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.66666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_121_89: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_35_6309: {
    width: wp("29.117647058823533%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_35_6309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_122_5996: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("17.2131147540984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_5997: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    height: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(245, 245, 245, 0.25)",
    overflow: "hidden"
  },
  View_122_5998: {
    flexGrow: 1,
    width: wp("33.62745098039216%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7843137254901951%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 0.3499999940395355)",
    overflow: "hidden"
  },
  View_122_5999: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I122_5999_121_0: {
    flexGrow: 1,
    width: wp("33.23529411764706%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9803921568627452%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_5999_121_31: {
    width: wp("3.1372549019607843%"),
    minWidth: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I122_5999_121_31_34_38: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I122_5999_35_6307: {
    width: wp("29.117647058823533%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.117647058823531%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I122_5999_121_79: {
    width: wp("29.117647058823533%"),
    minWidth: wp("29.117647058823533%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_5999_35_6308: {
    width: wp("25.68627450980392%"),
    minWidth: wp("25.68627450980392%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_5999_35_6308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I122_5999_121_89: {
    width: wp("2.450980392156863%"),
    minWidth: wp("2.450980392156863%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.66666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_5999_121_89: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I122_5999_35_6309: {
    width: wp("29.117647058823533%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_I122_5999_35_6309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_35_6310: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("32.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_35_6311: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.05882352941177%"),
    top: hp("0%")
  },
  View_121_193: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885249%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I121_193_121_0: {
    flexGrow: 1,
    width: wp("33.23529411764706%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9803921568627452%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_193_121_31: {
    width: wp("3.1372549019607843%"),
    minWidth: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.68306010928967%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I121_193_121_31_34_38: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I121_193_35_6307: {
    width: wp("29.117647058823533%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.117647058823531%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I121_193_121_79: {
    width: wp("29.117647058823533%"),
    minWidth: wp("29.117647058823533%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_193_35_6308: {
    width: wp("25.68627450980392%"),
    minWidth: wp("25.68627450980392%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I121_193_35_6308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I121_193_121_89: {
    width: wp("2.450980392156863%"),
    minWidth: wp("2.450980392156863%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.66666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I121_193_121_89: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I121_193_35_6309: {
    width: wp("29.117647058823533%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_I121_193_35_6309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_35_6323: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508233%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I35_6323_35_5356: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "flex-start"
  },
  Text_I35_6323_35_5356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_121_346: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("58.74316939890713%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_121_347: {
    flexGrow: 1,
    width: wp("33.23529411764706%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9803921568627452%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_121_348: {
    width: wp("3.1372549019607843%"),
    minWidth: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I121_348_34_38: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_121_349: {
    width: wp("29.117647058823533%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.117647058823531%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_121_350: {
    width: wp("29.117647058823533%"),
    minWidth: wp("29.117647058823533%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_121_351: {
    width: wp("25.68627450980392%"),
    minWidth: wp("25.68627450980392%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_121_351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_121_352: {
    width: wp("2.450980392156863%"),
    minWidth: wp("2.450980392156863%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.66666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_121_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_121_353: {
    width: wp("29.117647058823533%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_121_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_122_3954: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("71.58469945355193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_3955: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    height: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(37, 37, 37, 0.25)",
    overflow: "hidden"
  },
  View_122_3956: {
    flexGrow: 1,
    width: wp("33.62745098039216%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7843137254901951%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.3499999940395355)",
    overflow: "hidden"
  },
  View_122_3957: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I122_3957_121_347: {
    flexGrow: 1,
    width: wp("33.23529411764706%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9803921568627452%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_3957_121_348: {
    width: wp("3.1372549019607843%"),
    minWidth: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.68306010928967%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I122_3957_121_348_34_38: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I122_3957_121_349: {
    width: wp("29.117647058823533%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.117647058823531%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I122_3957_121_350: {
    width: wp("29.117647058823533%"),
    minWidth: wp("29.117647058823533%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_3957_121_351: {
    width: wp("25.68627450980392%"),
    minWidth: wp("25.68627450980392%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_3957_121_351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I122_3957_121_352: {
    width: wp("2.450980392156863%"),
    minWidth: wp("2.450980392156863%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.66666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_3957_121_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I122_3957_121_353: {
    width: wp("29.117647058823533%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_I122_3957_121_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_35_4575: {
    width: wp("35.19607843137255%"),
    minWidth: wp("35.19607843137255%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1372549019607847%"),
    top: hp("86.61202185792354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_35_4913: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.05882352941177%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_35_4914: {
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_140_11784: {
    width: wp("1.0167140586703431%"),
    height: hp("1.4167342681050952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0602405024509736%"),
    top: hp("1.5356845543032591%")
  },
  View_121_355: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885192%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I121_355_121_347: {
    flexGrow: 1,
    width: wp("33.23529411764706%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9803921568627452%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_355_121_348: {
    width: wp("3.1372549019607843%"),
    minWidth: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I121_355_121_348_34_38: {
    flexGrow: 1,
    width: wp("3.1372549019607843%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I121_355_121_349: {
    width: wp("29.117647058823533%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.117647058823531%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I121_355_121_350: {
    width: wp("29.117647058823533%"),
    minWidth: wp("29.117647058823533%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_355_121_351: {
    width: wp("25.68627450980392%"),
    minWidth: wp("25.68627450980392%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I121_355_121_351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I121_355_121_352: {
    width: wp("2.450980392156863%"),
    minWidth: wp("2.450980392156863%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.66666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I121_355_121_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I121_355_121_353: {
    width: wp("29.117647058823533%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_I121_355_121_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_35_6144: {
    flexGrow: 1,
    width: wp("35.19607843137255%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508176%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I35_6144_35_6287: {
    flexGrow: 1,
    width: wp("32.05882352941177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.568627450980392%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "flex-start"
  },
  Text_I35_6144_35_6287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
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
