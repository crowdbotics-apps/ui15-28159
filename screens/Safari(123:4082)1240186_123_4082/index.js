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
      <View style={styles.View_140_5520}>
        <View style={styles.View_123_4083}>
          <View style={styles.View_I123_4083_36_10245}>
            <View style={styles.View_I123_4083_36_10246}>
              <View style={styles.View_I123_4083_36_10247} />
              <View style={styles.View_I123_4083_36_10248}>
                <Text style={styles.Text_I123_4083_36_10248}>Safari</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I123_4083_36_10250} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ee2/8f5d/782e39dbcf8ae0654c19592bdc54714f"
          }}
          style={styles.ImageBackground_140_5556}
        />
      </View>
      <View style={styles.View_124_37}>
        <View style={styles.View_I124_37_10_2304}>
          <Text style={styles.Text_I124_37_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I124_37_10_2303} />
      </View>
      <View style={styles.View_124_21}>
        <View style={styles.View_124_22}>
          <Text style={styles.Text_124_22}>Tab</Text>
        </View>
        <View style={styles.View_124_23}>
          <View style={styles.View_124_24}>
            <View style={styles.View_124_25}>
              <View style={styles.View_124_26}>
                <Text style={styles.Text_124_26}>Light</Text>
              </View>
              <View style={styles.View_124_27}>
                <Text style={styles.Text_124_27}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_124_28}>
            <View style={styles.View_123_4302}>
              <View style={styles.View_123_4301}>
                <View style={styles.View_123_4295}>
                  <Text style={styles.Text_123_4295}>apple.com</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75ed/9c7e/bf1c850b3feb74c26f61770ce484496a"
                  }}
                  style={styles.ImageBackground_140_11729}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a86/62d8/961c5dc3aea8d73c771ab44b1656363a"
                }}
                style={styles.ImageBackground_124_14}
              />
            </View>
            <View style={styles.View_124_40}>
              <View style={styles.View_124_41}>
                <View style={styles.View_124_42}>
                  <Text style={styles.Text_124_42}>apple.com</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5aa/4f6d/9cc69e3b61653091cb95835c9095f997"
                  }}
                  style={styles.ImageBackground_140_11722}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42fe/8556/1e5a4e28bb692693bd3bb831efc75df7"
                }}
                style={styles.ImageBackground_124_44}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_123_4084}>
        <View style={styles.View_I123_4084_10_2318}>
          <Text style={styles.Text_I123_4084_10_2318}>Templates</Text>
        </View>
        <View style={styles.View_I123_4084_10_2319} />
      </View>
      <View style={styles.View_123_4085}>
        <View style={styles.View_123_4086}>
          <Text style={styles.Text_123_4086}>Safari</Text>
        </View>
        <View style={styles.View_123_4087}>
          <View style={styles.View_123_4088}>
            <View style={styles.View_123_4089}>
              <View style={styles.View_123_4090}>
                <Text style={styles.Text_123_4090}>Light / Tabs Shown</Text>
              </View>
              <View style={styles.View_123_4091}>
                <Text style={styles.Text_123_4091}>Light / Scroll</Text>
              </View>
              <View style={styles.View_136_565}>
                <Text style={styles.Text_136_565}>Dark / Tabs Shown</Text>
              </View>
              <View style={styles.View_136_566}>
                <Text style={styles.Text_136_566}>Dark / Scroll</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_123_4094}>
            <View style={styles.View_124_360}>
              <View style={styles.View_136_345}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2680/684a/260d8ddbe6f81b0ba1b787b03e26bc08"
                  }}
                  style={styles.ImageBackground_136_346}
                />
              </View>
              <View style={styles.View_124_325}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I124_325_5_3003}
                />
                <View style={styles.View_I124_325_5_3008}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                    }}
                    style={styles.ImageBackground_I124_325_5_3009}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                    }}
                    style={styles.ImageBackground_I124_325_140_7963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                    }}
                    style={styles.ImageBackground_I124_325_140_8168}
                  />
                </View>
                <View style={styles.View_I124_325_5_3024}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                    }}
                    style={styles.ImageBackground_I124_325_5_3025}
                  />
                </View>
              </View>
              <View style={styles.View_124_333}>
                <View style={styles.View_I124_333_36_10050} />
              </View>
              <View style={styles.View_124_363}>
                <View style={styles.View_124_50}>
                  <View style={styles.View_I124_50_123_4301}>
                    <View style={styles.View_I124_50_123_4295}>
                      <Text style={styles.Text_I124_50_123_4295}>
                        apple.com
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75ed/9c7e/bf1c850b3feb74c26f61770ce484496a"
                      }}
                      style={styles.ImageBackground_I124_50_140_11729}
                    />
                  </View>
                </View>
                <View style={styles.View_124_371}>
                  <View style={styles.View_I124_371_123_4301}>
                    <View style={styles.View_I124_371_123_4295}>
                      <Text style={styles.Text_I124_371_123_4295}>
                        apple.com
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75ed/9c7e/bf1c850b3feb74c26f61770ce484496a"
                      }}
                      style={styles.ImageBackground_I124_371_140_11729}
                    />
                  </View>
                </View>
                <View style={styles.View_124_364}>
                  <View style={styles.View_I124_364_123_4301}>
                    <View style={styles.View_I124_364_123_4295}>
                      <Text style={styles.Text_I124_364_123_4295}>
                        apple.com
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75ed/9c7e/bf1c850b3feb74c26f61770ce484496a"
                      }}
                      style={styles.ImageBackground_I124_364_140_11729}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a86/62d8/961c5dc3aea8d73c771ab44b1656363a"
                    }}
                    style={styles.ImageBackground_I124_364_124_14}
                  />
                </View>
              </View>
              <View style={styles.View_124_361}>
                <View style={styles.View_I124_361_5_3093} />
              </View>
            </View>
            <View style={styles.View_136_197}>
              <View style={styles.View_136_487}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2680/684a/260d8ddbe6f81b0ba1b787b03e26bc08"
                  }}
                  style={styles.ImageBackground_136_488}
                />
              </View>
              <View style={styles.View_136_199}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I136_199_5_3003}
                />
                <View style={styles.View_I136_199_5_3008}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                    }}
                    style={styles.ImageBackground_I136_199_5_3009}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                    }}
                    style={styles.ImageBackground_I136_199_140_7963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                    }}
                    style={styles.ImageBackground_I136_199_140_8168}
                  />
                </View>
                <View style={styles.View_I136_199_5_3024}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                    }}
                    style={styles.ImageBackground_I136_199_5_3025}
                  />
                </View>
              </View>
              <View style={styles.View_136_200}>
                <View style={styles.View_I136_200_36_10050} />
              </View>
              <View style={styles.View_136_306}>
                <View style={styles.View_136_307}>
                  <Text style={styles.Text_136_307}>apple.com</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_136_342}
                />
              </View>
              <View style={styles.View_139_5389}>
                <View style={styles.View_I139_5389_5_3093} />
              </View>
            </View>
            <View style={styles.View_124_1159}>
              <View style={styles.View_136_530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c61/43f4/230a62f08b93c9a3c38284f3124f6841"
                  }}
                  style={styles.ImageBackground_136_531}
                />
              </View>
              <View style={styles.View_124_1161}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I124_1161_71_8856}
                />
                <View style={styles.View_I124_1161_71_8861}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I124_1161_71_8862}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I124_1161_140_8460}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I124_1161_140_8569}
                  />
                </View>
                <View style={styles.View_I124_1161_71_8877}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I124_1161_71_8878}
                  />
                </View>
              </View>
              <View style={styles.View_124_1169}>
                <View style={styles.View_I124_1169_36_10050} />
              </View>
              <View style={styles.View_124_1170}>
                <View style={styles.View_124_1171}>
                  <View style={styles.View_I124_1171_124_41}>
                    <View style={styles.View_I124_1171_124_42}>
                      <Text style={styles.Text_I124_1171_124_42}>
                        apple.com
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5aa/4f6d/9cc69e3b61653091cb95835c9095f997"
                      }}
                      style={styles.ImageBackground_I124_1171_140_11722}
                    />
                  </View>
                </View>
                <View style={styles.View_124_1172}>
                  <View style={styles.View_I124_1172_124_41}>
                    <View style={styles.View_I124_1172_124_42}>
                      <Text style={styles.Text_I124_1172_124_42}>
                        apple.com
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5aa/4f6d/9cc69e3b61653091cb95835c9095f997"
                      }}
                      style={styles.ImageBackground_I124_1172_140_11722}
                    />
                  </View>
                </View>
                <View style={styles.View_124_1173}>
                  <View style={styles.View_I124_1173_124_41}>
                    <View style={styles.View_I124_1173_124_42}>
                      <Text style={styles.Text_I124_1173_124_42}>
                        apple.com
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5aa/4f6d/9cc69e3b61653091cb95835c9095f997"
                      }}
                      style={styles.ImageBackground_I124_1173_140_11722}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42fe/8556/1e5a4e28bb692693bd3bb831efc75df7"
                    }}
                    style={styles.ImageBackground_I124_1173_124_44}
                  />
                </View>
              </View>
              <View style={styles.View_124_1174}>
                <View style={styles.View_I124_1174_36_10050} />
              </View>
            </View>
            <View style={styles.View_136_206}>
              <View style={styles.View_136_528}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c61/43f4/230a62f08b93c9a3c38284f3124f6841"
                  }}
                  style={styles.ImageBackground_136_529}
                />
              </View>
              <View style={styles.View_136_208}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I136_208_71_8856}
                />
                <View style={styles.View_I136_208_71_8861}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I136_208_71_8862}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I136_208_140_8460}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I136_208_140_8569}
                  />
                </View>
                <View style={styles.View_I136_208_71_8877}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I136_208_71_8878}
                  />
                </View>
              </View>
              <View style={styles.View_136_525}>
                <View style={styles.View_136_526}>
                  <Text style={styles.Text_136_526}>apple.com</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_136_527}
                />
              </View>
              <View style={styles.View_139_5391}>
                <View style={styles.View_I139_5391_36_10050} />
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
  View_2: { height: hp("252.59562841530055%") },
  View_140_5520: {
    width: wp("92.84116331096197%"),
    minWidth: wp("92.84116331096197%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5794183445190155%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_123_4083: {
    flexGrow: 1,
    width: wp("92.84116331096197%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_4083_36_10245: {
    flexGrow: 1,
    width: wp("92.84116331096197%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_4083_36_10246: {
    width: wp("92.84116331096197%"),
    minWidth: wp("92.84116331096197%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_4083_36_10247: {
    width: wp("3.131991051454139%"),
    minWidth: wp("3.131991051454139%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I123_4083_36_10248: {
    width: wp("87.91946308724832%"),
    minWidth: wp("87.91946308724832%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.921700223713647%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I123_4083_36_10248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I123_4083_36_10250: {
    flexGrow: 1,
    width: wp("92.84116331096197%"),
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
  ImageBackground_140_5556: {
    width: wp("3.131991051454139%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_124_37: {
    width: wp("92.84116331096197%"),
    minWidth: wp("92.84116331096197%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5794183445190155%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_37_10_2304: {
    flexGrow: 1,
    width: wp("3.9709172259507834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I124_37_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I124_37_10_2303: {
    flexGrow: 1,
    width: wp("92.84116331096197%"),
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
  View_124_21: {
    width: wp("26.62192393736018%"),
    minWidth: wp("26.62192393736018%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5794183445190155%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_124_22: {
    width: wp("1.9574944071588367%"),
    minWidth: wp("1.9574944071588367%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_124_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_124_23: {
    width: wp("26.62192393736018%"),
    minWidth: wp("26.62192393736018%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_124_24: {
    width: wp("2.5167785234899327%"),
    minWidth: wp("2.5167785234899327%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.105145413870247%"),
    top: hp("6.693989071038253%")
  },
  View_124_25: {
    width: wp("2.5167785234899327%"),
    minWidth: wp("2.5167785234899327%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_124_26: {
    width: wp("2.5167785234899327%"),
    minWidth: wp("2.5167785234899327%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_124_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_124_27: {
    width: wp("2.013422818791946%"),
    minWidth: wp("2.013422818791946%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213115%"),
    justifyContent: "center"
  },
  Text_124_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_124_28: {
    width: wp("22.31543624161074%"),
    minWidth: wp("22.31543624161074%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_123_4302: {
    width: wp("18.736017897091724%"),
    minWidth: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7897091722595082%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_123_4301: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0067114093959733%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_123_4295: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_123_4295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11729: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.809843400447427%"),
    top: hp("0.7218824709699447%")
  },
  ImageBackground_124_14: {
    flexGrow: 1,
    width: wp("4.292915224762305%"),
    height: hp("3.4936790257855193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.20948248741611%"),
    top: hp("2.106279883879779%")
  },
  View_124_40: {
    width: wp("18.736017897091724%"),
    minWidth: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7897091722595082%"),
    top: hp("16.393442622950815%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_124_41: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0067114093959733%"),
    top: hp("2.3224043715847102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_124_42: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_124_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11722: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.809843400447427%"),
    top: hp("0.7218824709699305%")
  },
  ImageBackground_124_44: {
    flexGrow: 1,
    width: wp("4.292915224762305%"),
    height: hp("3.4936790257855193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.20948248741611%"),
    top: hp("2.106279883879793%")
  },
  View_123_4084: {
    width: wp("92.84116331096197%"),
    minWidth: wp("92.84116331096197%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5794183445190155%"),
    top: hp("91.66666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_4084_10_2318: {
    flexGrow: 1,
    width: wp("6.3199105145413865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I123_4084_10_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I123_4084_10_2319: {
    flexGrow: 1,
    width: wp("92.84116331096197%"),
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
  View_123_4085: {
    width: wp("92.84116331096197%"),
    minWidth: wp("92.84116331096197%"),
    height: hp("134.9726775956284%"),
    minHeight: hp("134.9726775956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5794183445190155%"),
    top: hp("108.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_123_4086: {
    width: wp("3.859060402684564%"),
    minWidth: wp("3.859060402684564%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_123_4086: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_123_4087: {
    width: wp("92.84116331096197%"),
    minWidth: wp("92.84116331096197%"),
    height: hp("127.32240437158471%"),
    minHeight: hp("127.32240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_123_4088: {
    width: wp("74.88814317673378%"),
    minWidth: wp("74.88814317673378%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7897091722595082%"),
    top: hp("0%")
  },
  View_123_4089: {
    width: wp("74.88814317673378%"),
    minWidth: wp("74.88814317673378%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_123_4090: {
    width: wp("9.116331096196868%"),
    minWidth: wp("9.116331096196868%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_123_4090: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_123_4091: {
    width: wp("7.102908277404922%"),
    minWidth: wp("7.102908277404922%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.762863534675613%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_123_4091: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_136_565: {
    width: wp("8.612975391498882%"),
    minWidth: wp("8.612975391498882%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.52572706935123%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_136_565: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_136_566: {
    width: wp("6.599552572706935%"),
    minWidth: wp("6.599552572706935%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.28859060402685%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_136_566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_123_4094: {
    width: wp("92.84116331096197%"),
    minWidth: wp("92.84116331096197%"),
    height: hp("119.67213114754098%"),
    minHeight: hp("119.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_124_360: {
    width: wp("20.973154362416107%"),
    minWidth: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7897091722595082%"),
    top: hp("4.371584699453521%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_136_345: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_136_346: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_124_325: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)",
    overflow: "hidden"
  },
  ImageBackground_I124_325_5_3003: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158282%")
  },
  View_I124_325_5_3008: {
    flexGrow: 1,
    width: wp("3.7282563962659045%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.424273804530202%"),
    top: hp("2.367580392973025%")
  },
  ImageBackground_I124_325_5_3009: {
    width: wp("1.3606284822126895%"),
    minWidth: wp("1.3606284822126895%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3676725041946334%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_I124_325_140_7963: {
    width: wp("0.8541597349265011%"),
    minWidth: wp("0.8541597349265011%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2319543484340016%"),
    top: hp("0%")
  },
  ImageBackground_I124_325_140_8168: {
    width: wp("0.9507829977628635%"),
    minWidth: wp("0.9507829977628635%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0458931010929291%")
  },
  View_I124_325_5_3024: {
    flexGrow: 1,
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.174496644295302%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I124_325_5_3025: {
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_124_333: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.2841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_333_36_10050: {
    flexGrow: 1,
    width: wp("7.4944071588366885%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.767337807606263%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_124_363: {
    flexGrow: 1,
    width: wp("57.10290827740492%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.06487695749441%"),
    top: hp("95.35519125683061%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_124_50: {
    width: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_I124_50_123_4301: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0067114093959741%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_50_123_4295: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I124_50_123_4295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I124_50_140_11729: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.809843400447427%"),
    top: hp("0.7218824709699447%")
  },
  View_124_371: {
    width: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.3668903803132%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_I124_371_123_4301: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0067114093959724%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_371_123_4295: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I124_371_123_4295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I124_371_140_11729: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.809843400447427%"),
    top: hp("0.7218824709699447%")
  },
  View_124_364: {
    width: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.1834451901566%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_I124_364_123_4301: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0067114093959733%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_364_123_4295: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I124_364_123_4295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I124_364_140_11729: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.809843400447427%"),
    top: hp("0.7218824709699447%")
  },
  ImageBackground_I124_364_124_14: {
    flexGrow: 1,
    width: wp("4.292915224762305%"),
    height: hp("3.4936790257855193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.20948248741611%"),
    top: hp("2.1062798838798074%")
  },
  View_124_361: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.2841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_361_5_3093: {
    flexGrow: 1,
    width: wp("7.4944071588366885%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.767337807606263%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_136_197: {
    width: wp("20.973154362416107%"),
    minWidth: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.55257270693512%"),
    top: hp("4.371584699453521%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_136_487: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_136_488: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_136_199: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)",
    overflow: "hidden"
  },
  ImageBackground_I136_199_5_3003: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158282%")
  },
  View_I136_199_5_3008: {
    flexGrow: 1,
    width: wp("3.7282563962659045%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.424273804530202%"),
    top: hp("2.367580392973025%")
  },
  ImageBackground_I136_199_5_3009: {
    width: wp("1.3606284822126895%"),
    minWidth: wp("1.3606284822126895%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.36767250419463%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_I136_199_140_7963: {
    width: wp("0.8541597349265011%"),
    minWidth: wp("0.8541597349265011%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2319543484340088%"),
    top: hp("0%")
  },
  ImageBackground_I136_199_140_8168: {
    width: wp("0.9507829977628635%"),
    minWidth: wp("0.9507829977628635%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0458931010929291%")
  },
  View_I136_199_5_3024: {
    flexGrow: 1,
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1744966442953029%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I136_199_5_3025: {
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_136_200: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.2841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I136_200_36_10050: {
    flexGrow: 1,
    width: wp("7.4944071588366885%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.767337807606268%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_136_306: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.2786885245902%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)",
    overflow: "hidden"
  },
  View_136_307: {
    width: wp("3.5794183445190155%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.724832214765101%"),
    top: hp("1.6393442622950545%"),
    justifyContent: "center"
  },
  Text_136_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_136_342: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092894995%")
  },
  View_139_5389: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.2841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I139_5389_5_3093: {
    flexGrow: 1,
    width: wp("7.4944071588366885%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.767337807606268%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_124_1159: {
    width: wp("20.973154362416107%"),
    minWidth: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.31543624161074%"),
    top: hp("4.371584699453521%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_136_530: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_136_531: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_124_1161: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0.20000000298023224)",
    overflow: "hidden"
  },
  ImageBackground_I124_1161_71_8856: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158282%")
  },
  View_I124_1161_71_8861: {
    flexGrow: 1,
    width: wp("3.7282563962659045%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.424273804530202%"),
    top: hp("2.3675970692452495%")
  },
  ImageBackground_I124_1161_71_8862: {
    width: wp("1.3606284822126895%"),
    minWidth: wp("1.3606284822126895%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.36767250419463%"),
    top: hp("0.00035020171617361484%")
  },
  ImageBackground_I124_1161_140_8460: {
    width: wp("0.8541597349265011%"),
    minWidth: wp("0.8541597349265011%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2319543484340016%"),
    top: hp("0%")
  },
  ImageBackground_I124_1161_140_8569: {
    width: wp("0.9507829977628635%"),
    minWidth: wp("0.9507829977628635%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109287226%")
  },
  View_I124_1161_71_8877: {
    flexGrow: 1,
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1744966442953029%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I124_1161_71_8878: {
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_124_1169: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.2841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1169_36_10050: {
    flexGrow: 1,
    width: wp("7.4944071588366885%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.767337807606268%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_124_1170: {
    flexGrow: 1,
    width: wp("57.10290827740492%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.064876957494405%"),
    top: hp("95.35519125683061%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_124_1171: {
    width: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_I124_1171_124_41: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.006711409395976%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1171_124_42: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I124_1171_124_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I124_1171_140_11722: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.809843400447427%"),
    top: hp("0.7218824709699447%")
  },
  View_124_1172: {
    width: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.366890380313194%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_I124_1172_124_41: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.006711409395976%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1172_124_42: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I124_1172_124_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I124_1172_140_11722: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.80984340044742%"),
    top: hp("0.7218824709699447%")
  },
  View_124_1173: {
    width: wp("18.736017897091724%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.183445190156597%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_I124_1173_124_41: {
    flexGrow: 1,
    width: wp("5.247657997762864%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.006711409395976%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1173_124_42: {
    width: wp("4.47427293064877%"),
    minWidth: wp("4.47427293064877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I124_1173_124_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I124_1173_140_11722: {
    width: wp("0.43781459731543626%"),
    minWidth: wp("0.43781459731543626%"),
    height: hp("1.5616995389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.80984340044742%"),
    top: hp("0.7218824709699447%")
  },
  ImageBackground_I124_1173_124_44: {
    flexGrow: 1,
    width: wp("4.292915224762305%"),
    height: hp("3.4936790257855193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.209482487416118%"),
    top: hp("2.1062798838798074%")
  },
  View_124_1174: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.2841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1174_36_10050: {
    flexGrow: 1,
    width: wp("7.4944071588366885%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.767337807606268%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(235, 235, 245, 1)",
    opacity: 0.30000001192092896
  },
  View_136_206: {
    width: wp("20.973154362416107%"),
    minWidth: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.07829977628636%"),
    top: hp("4.371584699453521%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_136_528: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_136_529: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_136_208: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0.20000000298023224)",
    overflow: "hidden"
  },
  ImageBackground_I136_208_71_8856: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158282%")
  },
  View_I136_208_71_8861: {
    flexGrow: 1,
    width: wp("3.7282563962659045%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.424273804530202%"),
    top: hp("2.3675970692452495%")
  },
  ImageBackground_I136_208_71_8862: {
    width: wp("1.3606284822126895%"),
    minWidth: wp("1.3606284822126895%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.36767250419463%"),
    top: hp("0.00035020171617361484%")
  },
  ImageBackground_I136_208_140_8460: {
    width: wp("0.8541597349265011%"),
    minWidth: wp("0.8541597349265011%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2319543484340016%"),
    top: hp("0%")
  },
  ImageBackground_I136_208_140_8569: {
    width: wp("0.9507829977628635%"),
    minWidth: wp("0.9507829977628635%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109287226%")
  },
  View_I136_208_71_8877: {
    flexGrow: 1,
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1744966442953029%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I136_208_71_8878: {
    width: wp("3.0201342281879198%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_136_525: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.2786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0.20000000298023224)",
    overflow: "hidden"
  },
  View_136_526: {
    width: wp("3.5794183445190155%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.724832214765101%"),
    top: hp("1.6393442622950545%"),
    justifyContent: "center"
  },
  Text_136_526: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_136_527: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092894995%")
  },
  View_139_5391: {
    flexGrow: 1,
    width: wp("20.973154362416107%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.2841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I139_5391_36_10050: {
    flexGrow: 1,
    width: wp("7.4944071588366885%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.767337807606268%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
