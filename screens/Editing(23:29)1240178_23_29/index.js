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
      <View style={styles.View_140_5513}>
        <View style={styles.View_23_30}>
          <View style={styles.View_I23_30_36_10245}>
            <View style={styles.View_I23_30_36_10246}>
              <View style={styles.View_I23_30_36_10247} />
              <View style={styles.View_I23_30_36_10248}>
                <Text style={styles.Text_I23_30_36_10248}>Editing</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I23_30_36_10250} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f456/6bd5/16cf723aee7fe829d0b3c1b71a7f5456"
          }}
          style={styles.ImageBackground_140_5542}
        />
      </View>
      <View style={styles.View_23_31}>
        <View style={styles.View_I23_31_10_2304}>
          <Text style={styles.Text_I23_31_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I23_31_10_2303} />
      </View>
      <View style={styles.View_23_32}>
        <View style={styles.View_23_33}>
          <Text style={styles.Text_23_33}>Edit Action</Text>
        </View>
        <View style={styles.View_23_34}>
          <View style={styles.View_23_35}>
            <View style={styles.View_23_36}>
              <View style={styles.View_23_37}>
                <Text style={styles.Text_23_37}>Light</Text>
              </View>
              <View style={styles.View_23_38}>
                <Text style={styles.Text_23_38}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_41}>
            <View style={styles.View_23_129}>
              <View style={styles.View_23_130}>
                <Text style={styles.Text_23_130}>Item Here</Text>
              </View>
            </View>
            <View style={styles.View_23_131}>
              <View style={styles.View_23_189}>
                <Text style={styles.Text_23_189}>Item Here</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_234}>
        <View style={styles.View_I23_234_10_2311}>
          <Text style={styles.Text_I23_234_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I23_234_10_2312} />
      </View>
      <View style={styles.View_23_54}>
        <View style={styles.View_23_55}>
          <Text style={styles.Text_23_55}>Edit Menu</Text>
        </View>
        <View style={styles.View_23_56}>
          <View style={styles.View_23_57}>
            <View style={styles.View_23_58}>
              <View style={styles.View_23_59}>
                <Text style={styles.Text_23_59}>Light</Text>
              </View>
              <View style={styles.View_23_60}>
                <Text style={styles.Text_23_60}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_63}>
            <View style={styles.View_23_251}>
              <View style={styles.View_23_258}>
                <View style={styles.View_23_634}>
                  <View style={styles.View_I23_634_23_130}>
                    <Text style={styles.Text_I23_634_23_130}>Cut</Text>
                  </View>
                </View>
                <View style={styles.View_23_252}>
                  <View style={styles.View_I23_252_23_130}>
                    <Text style={styles.Text_I23_252_23_130}>Copy</Text>
                  </View>
                </View>
                <View style={styles.View_23_254}>
                  <View style={styles.View_I23_254_23_130}>
                    <Text style={styles.Text_I23_254_23_130}>Paste</Text>
                  </View>
                </View>
                <View style={styles.View_23_256}>
                  <View style={styles.View_I23_256_23_130}>
                    <Text style={styles.Text_I23_256_23_130}>Replace...</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0286/b4e0/143a916c3efe1ae5375058d036d0a0ce"
                  }}
                  style={styles.ImageBackground_140_9875}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb7/5ee6/736c3afb20155aca266ac0bdf2730de0"
                }}
                style={styles.ImageBackground_23_269}
              />
            </View>
            <View style={styles.View_23_642}>
              <View style={styles.View_23_643}>
                <View style={styles.View_23_644}>
                  <View style={styles.View_I23_644_23_189}>
                    <Text style={styles.Text_I23_644_23_189}>Cut</Text>
                  </View>
                </View>
                <View style={styles.View_23_645}>
                  <View style={styles.View_I23_645_23_189}>
                    <Text style={styles.Text_I23_645_23_189}>Copy</Text>
                  </View>
                </View>
                <View style={styles.View_23_646}>
                  <View style={styles.View_I23_646_23_189}>
                    <Text style={styles.Text_I23_646_23_189}>Paste</Text>
                  </View>
                </View>
                <View style={styles.View_23_647}>
                  <View style={styles.View_I23_647_23_189}>
                    <Text style={styles.Text_I23_647_23_189}>Replace...</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07d8/7bed/b7723a5bc0167531415be536ade9a225"
                  }}
                  style={styles.ImageBackground_140_9889}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be0d/b211/cb2f1354b8f89ce008d83537a2039416"
                }}
                style={styles.ImageBackground_23_649}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_662}>
        <View style={styles.View_23_663}>
          <Text style={styles.Text_23_663}>Text Selection</Text>
        </View>
        <View style={styles.View_23_664}>
          <View style={styles.View_23_665}>
            <View style={styles.View_23_666}>
              <View style={styles.View_23_667}>
                <Text style={styles.Text_23_667}>
                  Light / Without Edit Menu
                </Text>
              </View>
              <View style={styles.View_23_668}>
                <Text style={styles.Text_23_668}>Light / With Edit Menu</Text>
              </View>
              <View style={styles.View_38_4881}>
                <Text style={styles.Text_38_4881}>
                  Dark / Without Edit Menu
                </Text>
              </View>
              <View style={styles.View_38_4887}>
                <Text style={styles.Text_38_4887}>Dark / With Edit Menu</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_669}>
            <View style={styles.View_38_3130}>
              <View style={styles.View_38_3426}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9006/c6e4/b39ffc1a05bfed2c24cdf188fa6a9c27"
                  }}
                  style={styles.ImageBackground_38_3124}
                />
                <View style={styles.View_38_3126}>
                  <View style={styles.View_38_3127}>
                    <Text style={styles.Text_38_3127}>Hello.</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b220/0f8b/b8ea668bed1af4a125e9e1a95d19e552"
                  }}
                  style={styles.ImageBackground_38_3128}
                />
              </View>
            </View>
            <View style={styles.View_38_3449}>
              <View style={styles.View_38_3457}>
                <View style={styles.View_I38_3457_23_643}>
                  <View style={styles.View_I38_3457_23_644}>
                    <View style={styles.View_I38_3457_23_644_23_189}>
                      <Text style={styles.Text_I38_3457_23_644_23_189}>
                        Cut
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I38_3457_23_645}>
                    <View style={styles.View_I38_3457_23_645_23_189}>
                      <Text style={styles.Text_I38_3457_23_645_23_189}>
                        Copy
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I38_3457_23_646}>
                    <View style={styles.View_I38_3457_23_646_23_189}>
                      <Text style={styles.Text_I38_3457_23_646_23_189}>
                        Paste
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I38_3457_23_647}>
                    <View style={styles.View_I38_3457_23_647_23_189}>
                      <Text style={styles.Text_I38_3457_23_647_23_189}>
                        Replace...
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07d8/7bed/b7723a5bc0167531415be536ade9a225"
                    }}
                    style={styles.ImageBackground_I38_3457_140_9889}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be0d/b211/cb2f1354b8f89ce008d83537a2039416"
                  }}
                  style={styles.ImageBackground_I38_3457_23_649}
                />
              </View>
              <View style={styles.View_40_2523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9006/c6e4/b39ffc1a05bfed2c24cdf188fa6a9c27"
                  }}
                  style={styles.ImageBackground_40_2524}
                />
                <View style={styles.View_40_2526}>
                  <View style={styles.View_40_2527}>
                    <Text style={styles.Text_40_2527}>Hello.</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b220/0f8b/b8ea668bed1af4a125e9e1a95d19e552"
                  }}
                  style={styles.ImageBackground_40_2528}
                />
              </View>
            </View>
            <View style={styles.View_38_3131}>
              <View style={styles.View_38_3425}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d81c/7128/94887eff83c1eaade6035e9cf49d68e6"
                  }}
                  style={styles.ImageBackground_38_3132}
                />
                <View style={styles.View_38_3134}>
                  <View style={styles.View_38_3135}>
                    <Text style={styles.Text_38_3135}>Hello.</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a82/a95c/1fdde5d524763675252f92f29d2187f2"
                  }}
                  style={styles.ImageBackground_38_3136}
                />
              </View>
            </View>
            <View style={styles.View_38_3944}>
              <View style={styles.View_38_3945}>
                <View style={styles.View_I38_3945_23_258}>
                  <View style={styles.View_I38_3945_23_634}>
                    <View style={styles.View_I38_3945_23_634_23_130}>
                      <Text style={styles.Text_I38_3945_23_634_23_130}>
                        Cut
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I38_3945_23_252}>
                    <View style={styles.View_I38_3945_23_252_23_130}>
                      <Text style={styles.Text_I38_3945_23_252_23_130}>
                        Copy
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I38_3945_23_254}>
                    <View style={styles.View_I38_3945_23_254_23_130}>
                      <Text style={styles.Text_I38_3945_23_254_23_130}>
                        Paste
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I38_3945_23_256}>
                    <View style={styles.View_I38_3945_23_256_23_130}>
                      <Text style={styles.Text_I38_3945_23_256_23_130}>
                        Replace...
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0286/b4e0/143a916c3efe1ae5375058d036d0a0ce"
                    }}
                    style={styles.ImageBackground_I38_3945_140_9875}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb7/5ee6/736c3afb20155aca266ac0bdf2730de0"
                  }}
                  style={styles.ImageBackground_I38_3945_23_269}
                />
              </View>
              <View style={styles.View_40_2538}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d81c/7128/94887eff83c1eaade6035e9cf49d68e6"
                  }}
                  style={styles.ImageBackground_40_2539}
                />
                <View style={styles.View_40_2541}>
                  <View style={styles.View_40_2542}>
                    <Text style={styles.Text_40_2542}>Hello.</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a82/a95c/1fdde5d524763675252f92f29d2187f2"
                  }}
                  style={styles.ImageBackground_40_2543}
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
  View_2: { height: hp("209.15300546448088%") },
  View_140_5513: {
    width: wp("83.7150127226463%"),
    minWidth: wp("83.7150127226463%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.142493638676845%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_30: {
    flexGrow: 1,
    width: wp("83.7150127226463%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_30_36_10245: {
    flexGrow: 1,
    width: wp("83.7150127226463%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_30_36_10246: {
    width: wp("83.7150127226463%"),
    minWidth: wp("83.7150127226463%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_30_36_10247: {
    width: wp("7.124681933842239%"),
    minWidth: wp("7.124681933842239%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I23_30_36_10248: {
    width: wp("72.51908396946564%"),
    minWidth: wp("72.51908396946564%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.195928753180661%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_30_36_10248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_30_36_10250: {
    flexGrow: 1,
    width: wp("83.7150127226463%"),
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
  ImageBackground_140_5542: {
    width: wp("7.124681933842239%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_31: {
    width: wp("83.7150127226463%"),
    minWidth: wp("83.7150127226463%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.142493638676845%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_31_10_2304: {
    flexGrow: 1,
    width: wp("9.033078880407125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_31_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_31_10_2303: {
    flexGrow: 1,
    width: wp("83.7150127226463%"),
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
  View_23_32: {
    width: wp("30.916030534351147%"),
    minWidth: wp("30.916030534351147%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.142493638676845%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_33: {
    width: wp("16.157760814249365%"),
    minWidth: wp("16.157760814249365%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_34: {
    width: wp("30.916030534351147%"),
    minWidth: wp("30.916030534351147%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_23_35: {
    width: wp("5.7251908396946565%"),
    minWidth: wp("5.7251908396946565%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.190839694656482%"),
    top: hp("5.191256830601098%")
  },
  View_23_36: {
    width: wp("5.7251908396946565%"),
    minWidth: wp("5.7251908396946565%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_37: {
    width: wp("5.7251908396946565%"),
    minWidth: wp("5.7251908396946565%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_38: {
    width: wp("4.580152671755725%"),
    minWidth: wp("4.580152671755725%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.426229508196705%"),
    justifyContent: "center"
  },
  Text_23_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_41: {
    width: wp("21.119592875318066%"),
    minWidth: wp("21.119592875318066%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_129: {
    width: wp("12.977099236641221%"),
    minWidth: wp("12.977099236641221%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0712468193384215%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_23_130: {
    flexGrow: 1,
    width: wp("8.651399491094146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.229508196721305%"),
    justifyContent: "flex-start"
  },
  Text_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_131: {
    width: wp("12.977099236641221%"),
    minWidth: wp("12.977099236641221%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0712468193384215%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_23_189: {
    flexGrow: 1,
    width: wp("8.651399491094146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.229508196721298%"),
    justifyContent: "flex-start"
  },
  Text_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_234: {
    width: wp("83.7150127226463%"),
    minWidth: wp("83.7150127226463%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.142493638676845%"),
    top: hp("86.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_234_10_2311: {
    flexGrow: 1,
    width: wp("14.249363867684478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_234_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_234_10_2312: {
    flexGrow: 1,
    width: wp("83.7150127226463%"),
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
  View_23_54: {
    width: wp("60.68702290076335%"),
    minWidth: wp("60.68702290076335%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.142493638676845%"),
    top: hp("103.9617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_55: {
    width: wp("13.231552162849871%"),
    minWidth: wp("13.231552162849871%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_56: {
    width: wp("60.68702290076335%"),
    minWidth: wp("60.68702290076335%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_23_57: {
    width: wp("5.7251908396946565%"),
    minWidth: wp("5.7251908396946565%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.9618320610687%"),
    top: hp("5.874316939890704%")
  },
  View_23_58: {
    width: wp("5.7251908396946565%"),
    minWidth: wp("5.7251908396946565%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_59: {
    width: wp("5.7251908396946565%"),
    minWidth: wp("5.7251908396946565%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_60: {
    width: wp("4.580152671755725%"),
    minWidth: wp("4.580152671755725%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.51912568306011%"),
    justifyContent: "center"
  },
  Text_23_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_63: {
    width: wp("50.51834844147582%"),
    minWidth: wp("50.51834844147582%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_251: {
    width: wp("42.37585480279898%"),
    minWidth: wp("42.37585480279898%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0712468193384215%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_258: {
    flexGrow: 1,
    width: wp("42.37585480279898%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 99, 102, 1)",
    overflow: "hidden"
  },
  View_23_634: {
    width: wp("7.506361323155216%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I23_634_23_130: {
    flexGrow: 1,
    width: wp("3.1806615776081424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I23_634_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_252: {
    width: wp("8.9058524173028%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569974554707379%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I23_252_23_130: {
    flexGrow: 1,
    width: wp("4.580152671755725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I23_252_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_254: {
    width: wp("9.287531806615776%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.539440203562343%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I23_254_23_130: {
    flexGrow: 1,
    width: wp("4.961832061068702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I23_254_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_256: {
    width: wp("12.977099236641221%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.890585241730278%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I23_256_23_130: {
    flexGrow: 1,
    width: wp("8.651399491094146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.162849872773535%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I23_256_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_9875: {
    flexGrow: 1,
    width: wp("3.444557092875318%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93129770992366%")
  },
  ImageBackground_23_269: {
    flexGrow: 1,
    width: wp("1.7811704834605597%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.297342159669213%"),
    top: hp("5.191256830601091%")
  },
  View_23_642: {
    width: wp("42.37585480279898%"),
    minWidth: wp("42.37585480279898%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0712468193384215%"),
    top: hp("14.89071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_643: {
    flexGrow: 1,
    width: wp("42.37585480279898%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(128, 128, 128, 1)",
    overflow: "hidden"
  },
  View_23_644: {
    width: wp("7.506361323155216%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I23_644_23_189: {
    flexGrow: 1,
    width: wp("3.1806615776081424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_I23_644_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_645: {
    width: wp("8.9058524173028%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569974554707379%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I23_645_23_189: {
    flexGrow: 1,
    width: wp("4.580152671755725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_I23_645_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_646: {
    width: wp("9.287531806615776%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.539440203562343%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I23_646_23_189: {
    flexGrow: 1,
    width: wp("4.961832061068702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_I23_646_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_23_647: {
    width: wp("12.977099236641221%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.890585241730278%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I23_647_23_189: {
    flexGrow: 1,
    width: wp("8.651399491094146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.162849872773535%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_I23_647_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_9889: {
    flexGrow: 1,
    width: wp("3.444557092875318%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93129770992366%")
  },
  ImageBackground_23_649: {
    flexGrow: 1,
    width: wp("1.7811704834605597%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.297342159669213%"),
    top: hp("5.191256830601077%")
  },
  View_23_662: {
    width: wp("83.7150127226463%"),
    minWidth: wp("83.7150127226463%"),
    height: hp("54.644808743169406%"),
    minHeight: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.142493638676845%"),
    top: hp("145.76502732240436%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_663: {
    width: wp("20.483460559796438%"),
    minWidth: wp("20.483460559796438%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_663: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_664: {
    width: wp("83.7150127226463%"),
    minWidth: wp("83.7150127226463%"),
    height: hp("46.994535519125684%"),
    minHeight: hp("46.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_23_665: {
    width: wp("28.75318066157761%"),
    minWidth: wp("28.75318066157761%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.9618320610687%"),
    top: hp("4.508196721311464%")
  },
  View_23_666: {
    width: wp("28.75318066157761%"),
    minWidth: wp("28.75318066157761%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_667: {
    width: wp("28.75318066157761%"),
    minWidth: wp("28.75318066157761%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_667: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_668: {
    width: wp("25.318066157760814%"),
    minWidth: wp("25.318066157760814%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%"),
    justifyContent: "center"
  },
  Text_23_668: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_38_4881: {
    width: wp("27.608142493638677%"),
    minWidth: wp("27.608142493638677%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.08743169398909%"),
    justifyContent: "center"
  },
  Text_38_4881: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_38_4887: {
    width: wp("24.173027989821882%"),
    minWidth: wp("24.173027989821882%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.191256830601077%"),
    justifyContent: "center"
  },
  Text_38_4887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_669: {
    width: wp("50.51834844147582%"),
    minWidth: wp("50.51834844147582%"),
    height: hp("46.994535519125684%"),
    minHeight: hp("46.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_38_3130: {
    width: wp("6.106870229007633%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.3715846994535354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.2057391062341%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_38_3426: {
    flexGrow: 1,
    width: wp("6.106870229007633%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_38_3124: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_38_3126: {
    flexGrow: 1,
    width: wp("5.852417302798982%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12722646310432495%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 0.20000000298023224)"
  },
  View_38_3127: {
    width: wp("5.597964376590331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25445292620865345%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_38_3127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_38_3128: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.979643765903308%"),
    top: hp("0%")
  },
  View_38_3449: {
    width: wp("42.37585480279898%"),
    height: hp("3.0054644808743167%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0712468193384215%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_38_3457: {
    flexGrow: 1,
    width: wp("42.37585480279898%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6.420765027322432%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I38_3457_23_643: {
    flexGrow: 1,
    width: wp("42.37585480279898%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(128, 128, 128, 1)",
    overflow: "hidden"
  },
  View_I38_3457_23_644: {
    width: wp("7.506361323155216%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I38_3457_23_644_23_189: {
    flexGrow: 1,
    width: wp("3.1806615776081424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3457_23_644_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I38_3457_23_645: {
    width: wp("8.9058524173028%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569974554707379%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I38_3457_23_645_23_189: {
    flexGrow: 1,
    width: wp("4.580152671755725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3457_23_645_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I38_3457_23_646: {
    width: wp("9.287531806615776%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.539440203562343%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I38_3457_23_646_23_189: {
    flexGrow: 1,
    width: wp("4.961832061068702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3457_23_646_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I38_3457_23_647: {
    width: wp("12.977099236641221%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.890585241730278%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 58, 60, 1)"
  },
  View_I38_3457_23_647_23_189: {
    flexGrow: 1,
    width: wp("8.651399491094146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.162849872773535%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3457_23_647_23_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I38_3457_140_9889: {
    flexGrow: 1,
    width: wp("3.444557092875318%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93129770992366%")
  },
  ImageBackground_I38_3457_23_649: {
    flexGrow: 1,
    width: wp("1.7811704834605597%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.297342159669213%"),
    top: hp("5.191256830601134%")
  },
  View_40_2523: {
    flexGrow: 1,
    width: wp("6.106870229007633%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.134492286895675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_40_2524: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_40_2526: {
    flexGrow: 1,
    width: wp("5.852417302798982%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12722646310432495%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 0.20000000298023224)"
  },
  View_40_2527: {
    width: wp("5.597964376590331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25445292620865345%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_40_2527: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_40_2528: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.979643765903308%"),
    top: hp("0%")
  },
  View_38_3131: {
    width: wp("6.106870229007633%"),
    height: hp("3.0054644808743167%"),
    top: hp("27.86885245901638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.2057391062341%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_38_3425: {
    flexGrow: 1,
    width: wp("6.106870229007633%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_38_3132: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_38_3134: {
    flexGrow: 1,
    width: wp("5.852417302798982%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12722646310432495%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 0.20000000298023224)"
  },
  View_38_3135: {
    width: wp("5.597964376590331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25445292620865345%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_38_3135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_38_3136: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.979643765903308%"),
    top: hp("0%")
  },
  View_38_3944: {
    width: wp("42.37585480279898%"),
    height: hp("3.0054644808743167%"),
    top: hp("39.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0712468193384215%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_38_3945: {
    flexGrow: 1,
    width: wp("42.37585480279898%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6.420765027322432%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I38_3945_23_258: {
    flexGrow: 1,
    width: wp("42.37585480279898%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 99, 102, 1)",
    overflow: "hidden"
  },
  View_I38_3945_23_634: {
    width: wp("7.506361323155216%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I38_3945_23_634_23_130: {
    flexGrow: 1,
    width: wp("3.1806615776081424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3945_23_634_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I38_3945_23_252: {
    width: wp("8.9058524173028%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569974554707379%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I38_3945_23_252_23_130: {
    flexGrow: 1,
    width: wp("4.580152671755725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3945_23_252_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I38_3945_23_254: {
    width: wp("9.287531806615776%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.539440203562343%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I38_3945_23_254_23_130: {
    flexGrow: 1,
    width: wp("4.961832061068702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1628498727735384%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3945_23_254_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I38_3945_23_256: {
    width: wp("12.977099236641221%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.890585241730278%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I38_3945_23_256_23_130: {
    flexGrow: 1,
    width: wp("8.651399491094146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.162849872773535%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I38_3945_23_256_23_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I38_3945_140_9875: {
    flexGrow: 1,
    width: wp("3.444557092875318%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93129770992366%")
  },
  ImageBackground_I38_3945_23_269: {
    flexGrow: 1,
    width: wp("1.7811704834605597%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.297342159669213%"),
    top: hp("5.191256830601105%")
  },
  View_40_2538: {
    flexGrow: 1,
    width: wp("6.106870229007633%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.134492286895675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_40_2539: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_40_2541: {
    flexGrow: 1,
    width: wp("5.852417302798982%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12722646310432495%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 0.20000000298023224)"
  },
  View_40_2542: {
    width: wp("5.597964376590331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25445292620865345%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_40_2542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_40_2543: {
    width: wp("0.1272264631043257%"),
    minWidth: wp("0.1272264631043257%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.979643765903308%"),
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
