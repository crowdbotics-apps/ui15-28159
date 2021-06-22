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
      <View style={styles.View_140_5511}>
        <View style={styles.View_9_1315}>
          <View style={styles.View_I9_1315_5_19}>
            <View style={styles.View_I9_1315_5_20}>
              <View style={styles.View_I9_1315_5_21} />
              <View style={styles.View_I9_1315_5_22}>
                <Text style={styles.Text_I9_1315_5_22}>Alerts</Text>
              </View>
            </View>
            <View style={styles.View_I9_1315_5_23}>
              <Text style={styles.Text_I9_1315_5_23}>
                Human Interface Guidelines: Alerts
              </Text>
            </View>
          </View>
          <View style={styles.View_I9_1315_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f3/a187/55f879056da4dd7c78ec05145d9f2b2d"
          }}
          style={styles.ImageBackground_140_5538}
        />
      </View>
      <View style={styles.View_10_2350}>
        <View style={styles.View_I10_2350_10_2304}>
          <Text style={styles.Text_I10_2350_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I10_2350_10_2303} />
      </View>
      <View style={styles.View_9_1316}>
        <View style={styles.View_9_1317}>
          <Text style={styles.Text_9_1317}>Action</Text>
        </View>
        <View style={styles.View_9_1318}>
          <View style={styles.View_9_1319}>
            <View style={styles.View_9_1320}>
              <View style={styles.View_9_1321}>
                <Text style={styles.Text_9_1321}>Light / Default</Text>
              </View>
              <View style={styles.View_9_1322}>
                <Text style={styles.Text_9_1322}>Light / Bold</Text>
              </View>
              <View style={styles.View_9_1817}>
                <Text style={styles.Text_9_1817}>Dark / Default</Text>
              </View>
              <View style={styles.View_9_1818}>
                <Text style={styles.Text_9_1818}>Dark / Bold</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_9_1323}>
            <View style={styles.View_9_1809}>
              <View style={styles.View_9_1810}>
                <Text style={styles.Text_9_1810}>Action</Text>
              </View>
            </View>
            <View style={styles.View_9_1811}>
              <View style={styles.View_9_1812}>
                <Text style={styles.Text_9_1812}>Action</Text>
              </View>
            </View>
            <View style={styles.View_9_1813}>
              <View style={styles.View_9_1814}>
                <Text style={styles.Text_9_1814}>Action</Text>
              </View>
            </View>
            <View style={styles.View_9_1815}>
              <View style={styles.View_9_1816}>
                <Text style={styles.Text_9_1816}>Action</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_2353}>
        <View style={styles.View_I10_2353_10_2311}>
          <Text style={styles.Text_I10_2353_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I10_2353_10_2312} />
      </View>
      <View style={styles.View_9_1330}>
        <View style={styles.View_9_1331}>
          <Text style={styles.Text_9_1331}>Alert</Text>
        </View>
        <View style={styles.View_9_1332}>
          <View style={styles.View_9_1333}>
            <View style={styles.View_9_1334}>
              <View style={styles.View_9_1335}>
                <Text style={styles.Text_9_1335}>Light / 1 Actions</Text>
              </View>
              <View style={styles.View_10_2123}>
                <Text style={styles.Text_10_2123}>
                  Light / 2 Actions (Horizontal)
                </Text>
              </View>
              <View style={styles.View_10_2124}>
                <Text style={styles.Text_10_2124}>
                  Light / 2 Actions (Vertical)
                </Text>
              </View>
              <View style={styles.View_10_2125}>
                <Text style={styles.Text_10_2125}>Light / 3 Actions</Text>
              </View>
              <View style={styles.View_10_2126}>
                <Text style={styles.Text_10_2126}>Dark / 1 Action</Text>
              </View>
              <View style={styles.View_10_2127}>
                <Text style={styles.Text_10_2127}>
                  Dark / 2 Actions (Horizontal)
                </Text>
              </View>
              <View style={styles.View_10_2128}>
                <Text style={styles.Text_10_2128}>
                  Dark / 2 Actions (Vertical)
                </Text>
              </View>
              <View style={styles.View_10_2129}>
                <Text style={styles.Text_10_2129}>Dark / 3 Actions</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_9_1351}>
            <View style={styles.View_9_1605}>
              <View style={styles.View_9_1606}>
                <View style={styles.View_9_1607}>
                  <Text style={styles.Text_9_1607}>Title Here</Text>
                </View>
                <View style={styles.View_9_1608}>
                  <Text style={styles.Text_9_1608}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_10_1752} />
              <View style={styles.View_10_1690}>
                <View style={styles.View_I10_1690_9_1812}>
                  <Text style={styles.Text_I10_1690_9_1812}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_125_48080}>
              <View style={styles.View_125_48081}>
                <View style={styles.View_125_48082}>
                  <Text style={styles.Text_125_48082}>Title Here</Text>
                </View>
                <View style={styles.View_125_48083}>
                  <Text style={styles.Text_125_48083}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_125_48084} />
              <View style={styles.View_125_48085}>
                <View style={styles.View_125_48086}>
                  <View style={styles.View_I125_48086_9_1810}>
                    <Text style={styles.Text_I125_48086_9_1810}>Action</Text>
                  </View>
                </View>
                <View style={styles.View_125_48087} />
                <View style={styles.View_125_48088}>
                  <View style={styles.View_I125_48088_9_1812}>
                    <Text style={styles.Text_I125_48088_9_1812}>Action</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_10_1953}>
              <View style={styles.View_10_1954}>
                <View style={styles.View_10_1955}>
                  <Text style={styles.Text_10_1955}>Title Here</Text>
                </View>
                <View style={styles.View_10_1956}>
                  <Text style={styles.Text_10_1956}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_10_1957} />
              <View style={styles.View_10_1958}>
                <View style={styles.View_I10_1958_9_1812}>
                  <Text style={styles.Text_I10_1958_9_1812}>Action</Text>
                </View>
              </View>
              <View style={styles.View_10_1963} />
              <View style={styles.View_10_1960}>
                <View style={styles.View_I10_1960_9_1810}>
                  <Text style={styles.Text_I10_1960_9_1810}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_1964}>
              <View style={styles.View_10_1965}>
                <View style={styles.View_10_1966}>
                  <Text style={styles.Text_10_1966}>Title Here</Text>
                </View>
                <View style={styles.View_10_1967}>
                  <Text style={styles.Text_10_1967}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_10_1968} />
              <View style={styles.View_10_1969}>
                <View style={styles.View_I10_1969_9_1812}>
                  <Text style={styles.Text_I10_1969_9_1812}>Action</Text>
                </View>
              </View>
              <View style={styles.View_10_1970} />
              <View style={styles.View_10_1971}>
                <View style={styles.View_I10_1971_9_1810}>
                  <Text style={styles.Text_I10_1971_9_1810}>Action</Text>
                </View>
              </View>
              <View style={styles.View_10_1976} />
              <View style={styles.View_10_1974}>
                <View style={styles.View_I10_1974_9_1810}>
                  <Text style={styles.Text_I10_1974_9_1810}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_2043}>
              <View style={styles.View_10_2044}>
                <View style={styles.View_10_2045}>
                  <Text style={styles.Text_10_2045}>Title Here</Text>
                </View>
                <View style={styles.View_10_2046}>
                  <Text style={styles.Text_10_2046}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_10_2047} />
              <View style={styles.View_10_2048}>
                <View style={styles.View_I10_2048_9_1812}>
                  <Text style={styles.Text_I10_2048_9_1812}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_2049}>
              <View style={styles.View_10_2050}>
                <View style={styles.View_10_2051}>
                  <Text style={styles.Text_10_2051}>Title Here</Text>
                </View>
                <View style={styles.View_10_2052}>
                  <Text style={styles.Text_10_2052}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_10_2053} />
              <View style={styles.View_10_2054}>
                <View style={styles.View_10_2055}>
                  <View style={styles.View_I10_2055_9_1810}>
                    <Text style={styles.Text_I10_2055_9_1810}>Action</Text>
                  </View>
                </View>
                <View style={styles.View_10_2056} />
                <View style={styles.View_10_2057}>
                  <View style={styles.View_I10_2057_9_1812}>
                    <Text style={styles.Text_I10_2057_9_1812}>Action</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_10_2058}>
              <View style={styles.View_10_2059}>
                <View style={styles.View_10_2060}>
                  <Text style={styles.Text_10_2060}>Title Here</Text>
                </View>
                <View style={styles.View_10_2061}>
                  <Text style={styles.Text_10_2061}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_10_2062} />
              <View style={styles.View_10_2063}>
                <View style={styles.View_I10_2063_9_1812}>
                  <Text style={styles.Text_I10_2063_9_1812}>Action</Text>
                </View>
              </View>
              <View style={styles.View_10_2064} />
              <View style={styles.View_10_2065}>
                <View style={styles.View_I10_2065_9_1810}>
                  <Text style={styles.Text_I10_2065_9_1810}>Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_2066}>
              <View style={styles.View_10_2067}>
                <View style={styles.View_10_2068}>
                  <Text style={styles.Text_10_2068}>Title Here</Text>
                </View>
                <View style={styles.View_10_2069}>
                  <Text style={styles.Text_10_2069}>
                    Here’s an alert description that uses Auto Layout!
                  </Text>
                </View>
              </View>
              <View style={styles.View_10_2070} />
              <View style={styles.View_10_2071}>
                <View style={styles.View_I10_2071_9_1812}>
                  <Text style={styles.Text_I10_2071_9_1812}>Action</Text>
                </View>
              </View>
              <View style={styles.View_10_2072} />
              <View style={styles.View_10_2073}>
                <View style={styles.View_I10_2073_9_1810}>
                  <Text style={styles.Text_I10_2073_9_1810}>Action</Text>
                </View>
              </View>
              <View style={styles.View_10_2074} />
              <View style={styles.View_10_2075}>
                <View style={styles.View_I10_2075_9_1810}>
                  <Text style={styles.Text_I10_2075_9_1810}>Action</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_2358}>
        <View style={styles.View_I10_2358_10_2318}>
          <Text style={styles.Text_I10_2358_10_2318}>Templates</Text>
        </View>
        <View style={styles.View_I10_2358_10_2319} />
      </View>
      <View style={styles.View_10_2243}>
        <View style={styles.View_10_2244}>
          <Text style={styles.Text_10_2244}>Alert Template</Text>
        </View>
        <View style={styles.View_10_2245}>
          <View style={styles.View_10_2246}>
            <View style={styles.View_10_2247}>
              <View style={styles.View_10_2248}>
                <Text style={styles.Text_10_2248}>Light</Text>
              </View>
            </View>
            <View style={styles.View_10_2301}>
              <View style={styles.View_10_2302}>
                <Text style={styles.Text_10_2302}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_10_2292}>
            <View style={styles.View_10_2291}>
              <View style={styles.View_10_2268}>
                <View style={styles.View_I10_2268_9_1606}>
                  <View style={styles.View_I10_2268_9_1607}>
                    <Text style={styles.Text_I10_2268_9_1607}>Title Here</Text>
                  </View>
                  <View style={styles.View_I10_2268_9_1608}>
                    <Text style={styles.Text_I10_2268_9_1608}>
                      Here’s an alert description that uses Auto Layout!
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I10_2268_10_1752} />
                <View style={styles.View_I10_2268_10_1690}>
                  <View style={styles.View_I10_2268_10_1690_9_1812}>
                    <Text style={styles.Text_I10_2268_10_1690_9_1812}>
                      Action
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_10_2290}>
              <View style={styles.View_10_2277}>
                <View style={styles.View_I10_2277_10_2044}>
                  <View style={styles.View_I10_2277_10_2045}>
                    <Text style={styles.Text_I10_2277_10_2045}>Title Here</Text>
                  </View>
                  <View style={styles.View_I10_2277_10_2046}>
                    <Text style={styles.Text_I10_2277_10_2046}>
                      Here’s an alert description that uses Auto Layout!
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I10_2277_10_2047} />
                <View style={styles.View_I10_2277_10_2048}>
                  <View style={styles.View_I10_2277_10_2048_9_1812}>
                    <Text style={styles.Text_I10_2277_10_2048_9_1812}>
                      Action
                    </Text>
                  </View>
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
  View_2: { height: hp("469.2622950819672%") },
  View_140_5511: {
    width: wp("83.26797385620915%"),
    minWidth: wp("83.26797385620915%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.366013071895424%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1315: {
    flexGrow: 1,
    width: wp("83.26797385620915%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1315_5_19: {
    flexGrow: 1,
    width: wp("83.26797385620915%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1315_5_20: {
    width: wp("38.954248366013076%"),
    minWidth: wp("38.954248366013076%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1315_5_21: {
    width: wp("7.320261437908497%"),
    minWidth: wp("7.320261437908497%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1315_5_22: {
    width: wp("27.450980392156865%"),
    minWidth: wp("27.450980392156865%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.503267973856211%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1315_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I9_1315_5_23: {
    width: wp("40.130718954248366%"),
    minWidth: wp("40.130718954248366%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.13725490196078%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I9_1315_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I9_1315_5_24: {
    flexGrow: 1,
    width: wp("83.26797385620915%"),
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
  ImageBackground_140_5538: {
    width: wp("7.320261437908497%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_2350: {
    width: wp("83.26797385620915%"),
    minWidth: wp("83.26797385620915%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.366013071895424%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2350_10_2304: {
    flexGrow: 1,
    width: wp("9.281045751633988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2350_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2350_10_2303: {
    flexGrow: 1,
    width: wp("83.26797385620915%"),
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
  View_9_1316: {
    width: wp("47.97385620915033%"),
    minWidth: wp("47.97385620915033%"),
    height: hp("53.551912568306015%"),
    minHeight: hp("53.551912568306015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.366013071895424%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1317: {
    width: wp("9.019607843137255%"),
    minWidth: wp("9.019607843137255%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_9_1317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_9_1318: {
    width: wp("47.97385620915033%"),
    minWidth: wp("47.97385620915033%"),
    height: hp("45.90163934426229%"),
    minHeight: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_9_1319: {
    width: wp("17.77777777777778%"),
    minWidth: wp("17.77777777777778%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.196078431372555%"),
    top: hp("5.737704918032776%")
  },
  View_9_1320: {
    width: wp("17.77777777777778%"),
    minWidth: wp("17.77777777777778%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_9_1321: {
    width: wp("17.77777777777778%"),
    minWidth: wp("17.77777777777778%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_9_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_9_1322: {
    width: wp("14.248366013071895%"),
    minWidth: wp("14.248366013071895%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202182%"),
    justifyContent: "center"
  },
  Text_9_1322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_9_1817: {
    width: wp("16.60130718954248%"),
    minWidth: wp("16.60130718954248%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240438%"),
    justifyContent: "center"
  },
  Text_9_1817: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_9_1818: {
    width: wp("12.941176470588237%"),
    minWidth: wp("12.941176470588237%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%"),
    justifyContent: "center"
  },
  Text_9_1818: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_9_1323: {
    width: wp("26.01307189542484%"),
    minWidth: wp("26.01307189542484%"),
    height: hp("45.90163934426229%"),
    minHeight: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_9_1809: {
    width: wp("17.647058823529413%"),
    minWidth: wp("17.647058823529413%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.620915032679738%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_9_1810: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_9_1811: {
    width: wp("17.516339869281044%"),
    minWidth: wp("17.516339869281044%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.248366013071896%"),
    top: hp("14.754098360655746%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.359477124183007%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_9_1812: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_9_1813: {
    width: wp("17.647058823529413%"),
    minWidth: wp("17.647058823529413%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("25.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1814: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.620915032679738%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_9_1814: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_9_1815: {
    width: wp("17.516339869281044%"),
    minWidth: wp("17.516339869281044%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.248366013071896%"),
    top: hp("35.519125683060096%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1816: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.359477124183007%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "center"
  },
  Text_9_1816: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2353: {
    width: wp("83.26797385620915%"),
    minWidth: wp("83.26797385620915%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.366013071895424%"),
    top: hp("109.15300546448088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2353_10_2311: {
    flexGrow: 1,
    width: wp("14.640522875816995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2353_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2353_10_2312: {
    flexGrow: 1,
    width: wp("83.26797385620915%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333314%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_9_1330: {
    width: wp("83.26797385620915%"),
    minWidth: wp("83.26797385620915%"),
    height: hp("232.65027322404373%"),
    minHeight: hp("232.65027322404373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.366013071895424%"),
    top: hp("126.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1331: {
    width: wp("7.5816993464052285%"),
    minWidth: wp("7.5816993464052285%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_9_1331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_9_1332: {
    width: wp("83.26797385620915%"),
    minWidth: wp("83.26797385620915%"),
    height: hp("225%"),
    minHeight: hp("225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_9_1333: {
    width: wp("35.42483660130719%"),
    minWidth: wp("35.42483660130719%"),
    height: hp("194.80874316939892%"),
    minHeight: hp("194.80874316939892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.84313725490196%"),
    top: hp("12.021857923497265%")
  },
  View_9_1334: {
    width: wp("35.42483660130719%"),
    minWidth: wp("35.42483660130719%"),
    height: hp("194.80874316939892%"),
    minHeight: hp("194.80874316939892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_9_1335: {
    width: wp("20.130718954248366%"),
    minWidth: wp("20.130718954248366%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_9_1335: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2123: {
    width: wp("35.42483660130719%"),
    minWidth: wp("35.42483660130719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.08743169398906%"),
    justifyContent: "center"
  },
  Text_10_2123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2124: {
    width: wp("33.0718954248366%"),
    minWidth: wp("33.0718954248366%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.18032786885246%"),
    justifyContent: "center"
  },
  Text_10_2124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2125: {
    width: wp("20.130718954248366%"),
    minWidth: wp("20.130718954248366%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.28415300546447%"),
    justifyContent: "center"
  },
  Text_10_2125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2126: {
    width: wp("17.77777777777778%"),
    minWidth: wp("17.77777777777778%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110.38251366120215%"),
    justifyContent: "center"
  },
  Text_10_2126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2127: {
    width: wp("34.248366013071895%"),
    minWidth: wp("34.248366013071895%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133.33333333333331%"),
    justifyContent: "center"
  },
  Text_10_2127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2128: {
    width: wp("31.895424836601304%"),
    minWidth: wp("31.895424836601304%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("159.42622950819674%"),
    justifyContent: "center"
  },
  Text_10_2128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2129: {
    width: wp("18.954248366013072%"),
    minWidth: wp("18.954248366013072%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("191.53005464480873%"),
    justifyContent: "center"
  },
  Text_10_2129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_9_1351: {
    width: wp("43.66013071895425%"),
    minWidth: wp("43.66013071895425%"),
    height: hp("225%"),
    minHeight: hp("225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_9_1605: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("18.647540983606557%"),
    minHeight: hp("18.647540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(242, 242, 242, 0.800000011920929)"
  },
  View_9_1606: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_9_1607: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_9_1607: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_9_1608: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.4644808743169335%"),
    justifyContent: "flex-start"
  },
  Text_9_1608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_10_1752: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_10_1690: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.636612021857928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_1690_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071896%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I10_1690_9_1812: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_48080: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("18.647540983606557%"),
    minHeight: hp("18.647540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("27.390710382513646%"),
    backgroundColor: "rgba(242, 242, 242, 0.800000011920929)"
  },
  View_125_48081: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_125_48082: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.185792349726796%"),
    justifyContent: "flex-start"
  },
  Text_125_48082: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_48083: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.464480874316962%"),
    justifyContent: "flex-start"
  },
  Text_125_48083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_125_48084: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_125_48085: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.636612021857928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_48086: {
    width: wp("17.549019607843135%"),
    minWidth: wp("17.549019607843135%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I125_48086_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.571895424836599%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I125_48086_9_1810: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_48087: {
    width: wp("0.065359477124183%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.614379084967318%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_125_48088: {
    width: wp("17.549019607843135%"),
    minWidth: wp("17.549019607843135%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.745098039215684%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I125_48088_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.375816993464053%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I125_48088_9_1812: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_1953: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("50.40983606557376%"),
    backgroundColor: "rgba(242, 242, 242, 0.800000011920929)"
  },
  View_10_1954: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_1955: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_10_1955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_1956: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.464480874316962%"),
    justifyContent: "flex-start"
  },
  Text_10_1956: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_10_1957: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.568306010928978%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_10_1958: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.636612021857928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_1958_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071896%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I10_1958_9_1812: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_1963: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.647540983606547%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_10_1960: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.715846994535553%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_1960_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444445%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I10_1960_9_1810: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_1964: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("30.806010928961747%"),
    minHeight: hp("30.806010928961747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("79.50819672131149%"),
    backgroundColor: "rgba(242, 242, 242, 0.800000011920929)"
  },
  View_10_1965: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_1966: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_10_1966: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_1967: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.4644808743169335%"),
    justifyContent: "flex-start"
  },
  Text_10_1967: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_10_1968: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_10_1969: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.6366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_1969_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071896%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I10_1969_9_1812: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_1970: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.647540983606547%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_10_1971: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.715846994535497%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_1971_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444445%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I10_1971_9_1810: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_1976: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.726775956284115%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_10_1974: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.795081967213093%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_1974_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444445%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I10_1974_9_1810: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2043: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("18.647540983606557%"),
    minHeight: hp("18.647540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("114.68579234972674%"),
    backgroundColor: "rgba(30, 30, 30, 0.75)"
  },
  View_10_2044: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_2045: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.185792349726796%"),
    justifyContent: "flex-start"
  },
  Text_10_2045: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2046: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.464480874316962%"),
    justifyContent: "flex-start"
  },
  Text_10_2046: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_10_2047: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.568306010929035%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2048: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.636612021857985%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2048_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071896%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "center"
  },
  Text_I10_2048_9_1812: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2049: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("18.647540983606557%"),
    minHeight: hp("18.647540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("137.70491803278688%"),
    backgroundColor: "rgba(30, 30, 30, 0.75)"
  },
  View_10_2050: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_2051: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.185792349726796%"),
    justifyContent: "flex-start"
  },
  Text_10_2051: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2052: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.464480874316962%"),
    justifyContent: "flex-start"
  },
  Text_10_2052: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_10_2053: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2054: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.6366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_2055: {
    width: wp("17.549019607843135%"),
    minWidth: wp("17.549019607843135%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2055_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.571895424836599%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I10_2055_9_1810: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2056: {
    width: wp("0.065359477124183%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.614379084967318%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2057: {
    width: wp("17.549019607843135%"),
    minWidth: wp("17.549019607843135%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.745098039215684%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2057_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.375816993464053%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I10_2057_9_1812: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2058: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("160.724043715847%"),
    backgroundColor: "rgba(30, 30, 30, 0.75)"
  },
  View_10_2059: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_2060: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.185792349726796%"),
    justifyContent: "flex-start"
  },
  Text_10_2060: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2061: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.464480874316962%"),
    justifyContent: "flex-start"
  },
  Text_10_2061: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_10_2062: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2063: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.6366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2063_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071896%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I10_2063_9_1812: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2064: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.64754098360652%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2065: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.715846994535525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2065_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444445%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I10_2065_9_1810: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2066: {
    width: wp("35.294117647058826%"),
    minWidth: wp("35.294117647058826%"),
    height: hp("30.806010928961747%"),
    minHeight: hp("30.806010928961747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("189.82240437158472%"),
    backgroundColor: "rgba(30, 30, 30, 0.75)"
  },
  View_10_2067: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_2068: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("2.1857923497267393%"),
    justifyContent: "flex-start"
  },
  Text_10_2068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2069: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738577%"),
    top: hp("5.464480874316905%"),
    justifyContent: "flex-start"
  },
  Text_10_2069: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_10_2070: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2071: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.6366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2071_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071896%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "center"
  },
  Text_I10_2071_9_1812: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2072: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.647540983606575%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2073: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.715846994535525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2073_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444445%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "center"
  },
  Text_I10_2073_9_1810: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2074: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.726775956284143%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_10_2075: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.795081967213093%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2075_9_1810: {
    flexGrow: 1,
    width: wp("6.405228758169934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444445%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "center"
  },
  Text_I10_2075_9_1810: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2358: {
    width: wp("83.26797385620915%"),
    minWidth: wp("83.26797385620915%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.366013071895424%"),
    top: hp("367.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2358_10_2318: {
    flexGrow: 1,
    width: wp("14.77124183006536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2358_10_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2358_10_2319: {
    flexGrow: 1,
    width: wp("83.26797385620915%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333314%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_10_2243: {
    width: wp("62.091503267973856%"),
    minWidth: wp("62.091503267973856%"),
    height: hp("75.5464480874317%"),
    minHeight: hp("75.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.366013071895424%"),
    top: hp("384.9726775956284%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_2244: {
    width: wp("21.045751633986928%"),
    minWidth: wp("21.045751633986928%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10_2244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2245: {
    width: wp("62.091503267973856%"),
    minWidth: wp("62.091503267973856%"),
    height: hp("67.89617486338798%"),
    minHeight: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%")
  },
  View_10_2246: {
    width: wp("5.88235294117647%"),
    minWidth: wp("5.88235294117647%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.209150326797385%"),
    top: hp("16.393442622950772%")
  },
  View_10_2247: {
    width: wp("5.88235294117647%"),
    minWidth: wp("5.88235294117647%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_2248: {
    width: wp("5.88235294117647%"),
    minWidth: wp("5.88235294117647%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10_2248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2301: {
    width: wp("4.705882352941177%"),
    minWidth: wp("4.705882352941177%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.060109289617515%")
  },
  View_10_2302: {
    width: wp("4.705882352941177%"),
    minWidth: wp("4.705882352941177%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10_2302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_10_2292: {
    width: wp("52.02614379084968%"),
    minWidth: wp("52.02614379084968%"),
    height: hp("67.89617486338798%"),
    minHeight: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_2291: {
    width: wp("43.66013071895425%"),
    minWidth: wp("43.66013071895425%"),
    height: hp("27.39071038251366%"),
    minHeight: hp("27.39071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0.4000000059604645)"
  },
  View_10_2268: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("18.647540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.18300653594771%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(242, 242, 242, 0.800000011920929)"
  },
  View_I10_2268_9_1606: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I10_2268_9_1607: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738594%"),
    top: hp("2.185792349726796%"),
    justifyContent: "flex-start"
  },
  Text_I10_2268_9_1607: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I10_2268_9_1608: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738594%"),
    top: hp("5.464480874316905%"),
    justifyContent: "flex-start"
  },
  Text_I10_2268_9_1608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I10_2268_10_1752: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I10_2268_10_1690: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.6366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2268_10_1690_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071898%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I10_2268_10_1690_9_1812: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_10_2290: {
    width: wp("43.66013071895425%"),
    minWidth: wp("43.66013071895425%"),
    height: hp("27.39071038251366%"),
    minHeight: hp("27.39071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1830065359477135%"),
    top: hp("36.13387978142072%"),
    backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)"
  },
  View_10_2277: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("18.647540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.18300653594771%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(30, 30, 30, 0.75)"
  },
  View_I10_2277_10_2044: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I10_2277_10_2045: {
    width: wp("31.11111111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738594%"),
    top: hp("2.1857923497267393%"),
    justifyContent: "flex-start"
  },
  Text_I10_2277_10_2045: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I10_2277_10_2046: {
    width: wp("31.11111111111111%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0915032679738594%"),
    top: hp("5.464480874316905%"),
    justifyContent: "flex-start"
  },
  Text_I10_2277_10_2046: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I10_2277_10_2047: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.56830601092895%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I10_2277_10_2048: {
    flexGrow: 1,
    width: wp("35.294117647058826%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.6366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2277_10_2048_9_1812: {
    flexGrow: 1,
    width: wp("6.7973856209150325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.248366013071898%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "center"
  },
  Text_I10_2277_10_2048_9_1812: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
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
