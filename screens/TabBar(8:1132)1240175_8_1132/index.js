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
      <View style={styles.View_140_5510}>
        <View style={styles.View_8_1133}>
          <View style={styles.View_I8_1133_5_19}>
            <View style={styles.View_I8_1133_5_20}>
              <View style={styles.View_I8_1133_5_21} />
              <View style={styles.View_I8_1133_5_22}>
                <Text style={styles.Text_I8_1133_5_22}>Tab Bar</Text>
              </View>
            </View>
            <View style={styles.View_I8_1133_5_23}>
              <Text style={styles.Text_I8_1133_5_23}>
                Human Interface Guidelines: Tab Bars
              </Text>
            </View>
          </View>
          <View style={styles.View_I8_1133_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/960b/ffdc/72443e0dee9acad8852e056e40fda1ec"
          }}
          style={styles.ImageBackground_140_5536}
        />
      </View>
      <View style={styles.View_10_2342}>
        <View style={styles.View_I10_2342_10_2304}>
          <Text style={styles.Text_I10_2342_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I10_2342_10_2303} />
      </View>
      <View style={styles.View_8_1134}>
        <View style={styles.View_8_1135}>
          <Text style={styles.Text_8_1135}>Tab Bar Item</Text>
        </View>
        <View style={styles.View_8_1136}>
          <View style={styles.View_8_1137}>
            <View style={styles.View_8_1138}>
              <View style={styles.View_8_1139}>
                <Text style={styles.Text_8_1139}>Light</Text>
              </View>
              <View style={styles.View_8_1140}>
                <Text style={styles.Text_8_1140}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_8_879}>
            <View style={styles.View_8_880}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                }}
                style={styles.ImageBackground_140_9735}
              />
              <View style={styles.View_8_882}>
                <Text style={styles.Text_8_882}>Label</Text>
              </View>
            </View>
            <View style={styles.View_8_883}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc2/394f/027c2dd6c0632f9272e6cdfb0b2990d4"
                }}
                style={styles.ImageBackground_140_9856}
              />
              <View style={styles.View_8_885}>
                <Text style={styles.Text_8_885}>Label</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_2345}>
        <View style={styles.View_I10_2345_10_2311}>
          <Text style={styles.Text_I10_2345_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I10_2345_10_2312} />
      </View>
      <View style={styles.View_8_1602}>
        <View style={styles.View_8_1603}>
          <Text style={styles.Text_8_1603}>Tab Bar</Text>
        </View>
        <View style={styles.View_8_1604}>
          <View style={styles.View_8_1605}>
            <View style={styles.View_8_1606}>
              <View style={styles.View_8_1607}>
                <Text style={styles.Text_8_1607}>
                  Light / 5 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1608}>
                <Text style={styles.Text_8_1608}>
                  Light / 4 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1616}>
                <Text style={styles.Text_8_1616}>
                  Light / 3 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1617}>
                <Text style={styles.Text_8_1617}>
                  Light / 2 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1618}>
                <Text style={styles.Text_8_1618}>
                  Light / 5 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
              <View style={styles.View_8_1619}>
                <Text style={styles.Text_8_1619}>
                  Light / 4 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
              <View style={styles.View_8_1620}>
                <Text style={styles.Text_8_1620}>
                  Light / 3 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
              <View style={styles.View_8_1630}>
                <Text style={styles.Text_8_1630}>
                  Light / 2 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
              <View style={styles.View_8_1621}>
                <Text style={styles.Text_8_1621}>
                  Dark / 5 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1622}>
                <Text style={styles.Text_8_1622}>
                  Dark / 4 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1623}>
                <Text style={styles.Text_8_1623}>
                  Dark / 3 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1629}>
                <Text style={styles.Text_8_1629}>
                  Dark / 2 Tabs / iPhone X (or newer)
                </Text>
              </View>
              <View style={styles.View_8_1624}>
                <Text style={styles.Text_8_1624}>
                  Dark / 5 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
              <View style={styles.View_8_1625}>
                <Text style={styles.Text_8_1625}>
                  Dark / 4 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
              <View style={styles.View_8_1626}>
                <Text style={styles.Text_8_1626}>
                  Dark / 3 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
              <View style={styles.View_8_1627}>
                <Text style={styles.Text_8_1627}>
                  Dark / 2 Tabs / iPhone 6/7/8/SE
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_8_888}>
            <View style={styles.View_8_889}>
              <View style={styles.View_8_890}>
                <View style={styles.View_8_891}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_891_140_9735}
                  />
                  <View style={styles.View_I8_891_8_882}>
                    <Text style={styles.Text_I8_891_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_892}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_892_140_9735}
                  />
                  <View style={styles.View_I8_892_8_882}>
                    <Text style={styles.Text_I8_892_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_893}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_893_140_9735}
                  />
                  <View style={styles.View_I8_893_8_882}>
                    <Text style={styles.Text_I8_893_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_894}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_894_140_9735}
                  />
                  <View style={styles.View_I8_894_8_882}>
                    <Text style={styles.Text_I8_894_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_895}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_895_140_9735}
                  />
                  <View style={styles.View_I8_895_8_882}>
                    <Text style={styles.Text_I8_895_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_1631}>
                <View style={styles.View_I8_1631_5_3093} />
              </View>
            </View>
            <View style={styles.View_8_1941}>
              <View style={styles.View_8_1942}>
                <View style={styles.View_8_1943}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1943_140_9735}
                  />
                  <View style={styles.View_I8_1943_8_882}>
                    <Text style={styles.Text_I8_1943_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_1944}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1944_140_9735}
                  />
                  <View style={styles.View_I8_1944_8_882}>
                    <Text style={styles.Text_I8_1944_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_1945}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1945_140_9735}
                  />
                  <View style={styles.View_I8_1945_8_882}>
                    <Text style={styles.Text_I8_1945_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_1946}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1946_140_9735}
                  />
                  <View style={styles.View_I8_1946_8_882}>
                    <Text style={styles.Text_I8_1946_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_1948}>
                <View style={styles.View_I8_1948_5_3093} />
              </View>
            </View>
            <View style={styles.View_8_1960}>
              <View style={styles.View_8_1961}>
                <View style={styles.View_8_1962}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1962_140_9735}
                  />
                  <View style={styles.View_I8_1962_8_882}>
                    <Text style={styles.Text_I8_1962_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_1963}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1963_140_9735}
                  />
                  <View style={styles.View_I8_1963_8_882}>
                    <Text style={styles.Text_I8_1963_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_1964}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1964_140_9735}
                  />
                  <View style={styles.View_I8_1964_8_882}>
                    <Text style={styles.Text_I8_1964_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_1967}>
                <View style={styles.View_I8_1967_5_3093} />
              </View>
            </View>
            <View style={styles.View_8_1979}>
              <View style={styles.View_8_1980}>
                <View style={styles.View_8_1981}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1981_140_9735}
                  />
                  <View style={styles.View_I8_1981_8_882}>
                    <Text style={styles.Text_I8_1981_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_1982}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_1982_140_9735}
                  />
                  <View style={styles.View_I8_1982_8_882}>
                    <Text style={styles.Text_I8_1982_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_1986}>
                <View style={styles.View_I8_1986_5_3093} />
              </View>
            </View>
            <View style={styles.View_8_919}>
              <View style={styles.View_8_920}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_920_140_9735}
                />
                <View style={styles.View_I8_920_8_882}>
                  <Text style={styles.Text_I8_920_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_921}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_921_140_9735}
                />
                <View style={styles.View_I8_921_8_882}>
                  <Text style={styles.Text_I8_921_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_922}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_922_140_9735}
                />
                <View style={styles.View_I8_922_8_882}>
                  <Text style={styles.Text_I8_922_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_923}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_923_140_9735}
                />
                <View style={styles.View_I8_923_8_882}>
                  <Text style={styles.Text_I8_923_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_924}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_924_140_9735}
                />
                <View style={styles.View_I8_924_8_882}>
                  <Text style={styles.Text_I8_924_8_882}>Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_925}>
              <View style={styles.View_8_926}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_926_140_9735}
                />
                <View style={styles.View_I8_926_8_882}>
                  <Text style={styles.Text_I8_926_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_927}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_927_140_9735}
                />
                <View style={styles.View_I8_927_8_882}>
                  <Text style={styles.Text_I8_927_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_928}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_928_140_9735}
                />
                <View style={styles.View_I8_928_8_882}>
                  <Text style={styles.Text_I8_928_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_929}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_929_140_9735}
                />
                <View style={styles.View_I8_929_8_882}>
                  <Text style={styles.Text_I8_929_8_882}>Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_930}>
              <View style={styles.View_8_931}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_931_140_9735}
                />
                <View style={styles.View_I8_931_8_882}>
                  <Text style={styles.Text_I8_931_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_932}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_932_140_9735}
                />
                <View style={styles.View_I8_932_8_882}>
                  <Text style={styles.Text_I8_932_8_882}>Label 2</Text>
                </View>
              </View>
              <View style={styles.View_8_933}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_933_140_9735}
                />
                <View style={styles.View_I8_933_8_882}>
                  <Text style={styles.Text_I8_933_8_882}>Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_934}>
              <View style={styles.View_8_935}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_935_140_9735}
                />
                <View style={styles.View_I8_935_8_882}>
                  <Text style={styles.Text_I8_935_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_936}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_936_140_9735}
                />
                <View style={styles.View_I8_936_8_882}>
                  <Text style={styles.Text_I8_936_8_882}>Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_3127}>
              <View style={styles.View_8_3128}>
                <View style={styles.View_8_3129}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3129_140_9735}
                  />
                  <View style={styles.View_I8_3129_8_882}>
                    <Text style={styles.Text_I8_3129_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3130}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3130_140_9735}
                  />
                  <View style={styles.View_I8_3130_8_882}>
                    <Text style={styles.Text_I8_3130_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3131}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3131_140_9735}
                  />
                  <View style={styles.View_I8_3131_8_882}>
                    <Text style={styles.Text_I8_3131_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3132}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3132_140_9735}
                  />
                  <View style={styles.View_I8_3132_8_882}>
                    <Text style={styles.Text_I8_3132_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3133}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3133_140_9735}
                  />
                  <View style={styles.View_I8_3133_8_882}>
                    <Text style={styles.Text_I8_3133_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_3134}>
                <View style={styles.View_I8_3134_36_10050} />
              </View>
            </View>
            <View style={styles.View_8_3135}>
              <View style={styles.View_8_3136}>
                <View style={styles.View_8_3137}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3137_140_9735}
                  />
                  <View style={styles.View_I8_3137_8_882}>
                    <Text style={styles.Text_I8_3137_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3138}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3138_140_9735}
                  />
                  <View style={styles.View_I8_3138_8_882}>
                    <Text style={styles.Text_I8_3138_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3139}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3139_140_9735}
                  />
                  <View style={styles.View_I8_3139_8_882}>
                    <Text style={styles.Text_I8_3139_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3140}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3140_140_9735}
                  />
                  <View style={styles.View_I8_3140_8_882}>
                    <Text style={styles.Text_I8_3140_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_3141}>
                <View style={styles.View_I8_3141_36_10050} />
              </View>
            </View>
            <View style={styles.View_8_3142}>
              <View style={styles.View_8_3143}>
                <View style={styles.View_8_3144}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3144_140_9735}
                  />
                  <View style={styles.View_I8_3144_8_882}>
                    <Text style={styles.Text_I8_3144_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3145}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3145_140_9735}
                  />
                  <View style={styles.View_I8_3145_8_882}>
                    <Text style={styles.Text_I8_3145_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3146}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3146_140_9735}
                  />
                  <View style={styles.View_I8_3146_8_882}>
                    <Text style={styles.Text_I8_3146_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_3147}>
                <View style={styles.View_I8_3147_36_10050} />
              </View>
            </View>
            <View style={styles.View_8_3591}>
              <View style={styles.View_8_3592}>
                <View style={styles.View_8_3593}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3593_140_9735}
                  />
                  <View style={styles.View_I8_3593_8_882}>
                    <Text style={styles.Text_I8_3593_8_882}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_8_3594}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                    }}
                    style={styles.ImageBackground_I8_3594_140_9735}
                  />
                  <View style={styles.View_I8_3594_8_882}>
                    <Text style={styles.Text_I8_3594_8_882}>Label</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_8_3595}>
                <View style={styles.View_I8_3595_36_10050} />
              </View>
            </View>
            <View style={styles.View_8_3875}>
              <View style={styles.View_8_3876}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3876_140_9735}
                />
                <View style={styles.View_I8_3876_8_882}>
                  <Text style={styles.Text_I8_3876_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3877}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3877_140_9735}
                />
                <View style={styles.View_I8_3877_8_882}>
                  <Text style={styles.Text_I8_3877_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3878}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3878_140_9735}
                />
                <View style={styles.View_I8_3878_8_882}>
                  <Text style={styles.Text_I8_3878_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3879}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3879_140_9735}
                />
                <View style={styles.View_I8_3879_8_882}>
                  <Text style={styles.Text_I8_3879_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3880}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3880_140_9735}
                />
                <View style={styles.View_I8_3880_8_882}>
                  <Text style={styles.Text_I8_3880_8_882}>Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_3800}>
              <View style={styles.View_8_3801}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3801_140_9735}
                />
                <View style={styles.View_I8_3801_8_882}>
                  <Text style={styles.Text_I8_3801_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3802}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3802_140_9735}
                />
                <View style={styles.View_I8_3802_8_882}>
                  <Text style={styles.Text_I8_3802_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3803}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3803_140_9735}
                />
                <View style={styles.View_I8_3803_8_882}>
                  <Text style={styles.Text_I8_3803_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3804}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3804_140_9735}
                />
                <View style={styles.View_I8_3804_8_882}>
                  <Text style={styles.Text_I8_3804_8_882}>Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_3805}>
              <View style={styles.View_8_3806}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3806_140_9735}
                />
                <View style={styles.View_I8_3806_8_882}>
                  <Text style={styles.Text_I8_3806_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3807}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3807_140_9735}
                />
                <View style={styles.View_I8_3807_8_882}>
                  <Text style={styles.Text_I8_3807_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3808}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3808_140_9735}
                />
                <View style={styles.View_I8_3808_8_882}>
                  <Text style={styles.Text_I8_3808_8_882}>Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_3809}>
              <View style={styles.View_8_3810}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3810_140_9735}
                />
                <View style={styles.View_I8_3810_8_882}>
                  <Text style={styles.Text_I8_3810_8_882}>Label</Text>
                </View>
              </View>
              <View style={styles.View_8_3811}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2884/2a1b/7f84f32529e6a108af3d28561579077d"
                  }}
                  style={styles.ImageBackground_I8_3811_140_9735}
                />
                <View style={styles.View_I8_3811_8_882}>
                  <Text style={styles.Text_I8_3811_8_882}>Label</Text>
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
  View_2: { height: hp("341.9398907103825%") },
  View_140_5510: {
    width: wp("86.14718614718615%"),
    minWidth: wp("86.14718614718615%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.926406926406926%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_1133: {
    flexGrow: 1,
    width: wp("86.14718614718615%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_1133_5_19: {
    flexGrow: 1,
    width: wp("86.14718614718615%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_1133_5_20: {
    width: wp("47.51082251082251%"),
    minWidth: wp("47.51082251082251%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_1133_5_21: {
    width: wp("6.0606060606060606%"),
    minWidth: wp("6.0606060606060606%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I8_1133_5_22: {
    width: wp("37.98701298701299%"),
    minWidth: wp("37.98701298701299%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.523809523809526%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I8_1133_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_1133_5_23: {
    width: wp("35.17316017316017%"),
    minWidth: wp("35.17316017316017%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.97402597402597%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I8_1133_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I8_1133_5_24: {
    flexGrow: 1,
    width: wp("86.14718614718615%"),
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
  ImageBackground_140_5536: {
    width: wp("6.0606060606060606%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_2342: {
    width: wp("86.14718614718615%"),
    minWidth: wp("86.14718614718615%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.926406926406926%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2342_10_2304: {
    flexGrow: 1,
    width: wp("7.683982683982683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2342_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2342_10_2303: {
    flexGrow: 1,
    width: wp("86.14718614718615%"),
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
  View_8_1134: {
    width: wp("23.376623376623375%"),
    minWidth: wp("23.376623376623375%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.926406926406926%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_1135: {
    width: wp("14.935064935064934%"),
    minWidth: wp("14.935064935064934%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_1135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1136: {
    width: wp("23.376623376623375%"),
    minWidth: wp("23.376623376623375%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_8_1137: {
    width: wp("4.870129870129871%"),
    minWidth: wp("4.870129870129871%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.50649350649351%"),
    top: hp("6.147540983606554%")
  },
  View_8_1138: {
    width: wp("4.870129870129871%"),
    minWidth: wp("4.870129870129871%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_1139: {
    width: wp("4.870129870129871%"),
    minWidth: wp("4.870129870129871%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_1139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1140: {
    width: wp("3.896103896103896%"),
    minWidth: wp("3.896103896103896%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.065573770491802%"),
    justifyContent: "center"
  },
  Text_8_1140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_879: {
    width: wp("15.043290043290044%"),
    minWidth: wp("15.043290043290044%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_880: {
    width: wp("8.116883116883116%"),
    minWidth: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031352%")
  },
  View_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.705627705627707%"),
    top: hp("4.763176923241119%"),
    justifyContent: "flex-start"
  },
  Text_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_883: {
    width: wp("8.116883116883116%"),
    minWidth: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("15.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_9856: {
    flexGrow: 1,
    width: wp("2.7178225579199853%"),
    height: hp("3.121773401896159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6988636363636367%"),
    top: hp("1.0119328733350414%")
  },
  View_8_885: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.705627705627707%"),
    top: hp("4.763176923241119%"),
    justifyContent: "flex-start"
  },
  Text_8_885: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_10_2345: {
    width: wp("86.14718614718615%"),
    minWidth: wp("86.14718614718615%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.926406926406926%"),
    top: hp("89.75409836065575%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2345_10_2311: {
    flexGrow: 1,
    width: wp("12.121212121212121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2345_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2345_10_2312: {
    flexGrow: 1,
    width: wp("86.14718614718615%"),
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
  View_8_1602: {
    width: wp("86.14718614718615%"),
    minWidth: wp("86.14718614718615%"),
    height: hp("226.2295081967213%"),
    minHeight: hp("226.2295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.926406926406926%"),
    top: hp("106.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_1603: {
    width: wp("8.766233766233766%"),
    minWidth: wp("8.766233766233766%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_1603: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1604: {
    width: wp("86.14718614718615%"),
    minWidth: wp("86.14718614718615%"),
    height: hp("218.57923497267763%"),
    minHeight: hp("218.57923497267763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_8_1605: {
    width: wp("35.17316017316017%"),
    minWidth: wp("35.17316017316017%"),
    height: hp("203.82513661202185%"),
    minHeight: hp("203.82513661202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.97402597402597%"),
    top: hp("8.469945355191257%")
  },
  View_8_1606: {
    width: wp("35.17316017316017%"),
    minWidth: wp("35.17316017316017%"),
    height: hp("203.82513661202185%"),
    minHeight: hp("203.82513661202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_1607: {
    width: wp("35.17316017316017%"),
    minWidth: wp("35.17316017316017%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_1607: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1608: {
    width: wp("35.17316017316017%"),
    minWidth: wp("35.17316017316017%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.710382513661202%"),
    justifyContent: "center"
  },
  Text_8_1608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1616: {
    width: wp("35.17316017316017%"),
    minWidth: wp("35.17316017316017%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.420765027322417%"),
    justifyContent: "center"
  },
  Text_8_1616: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1617: {
    width: wp("35.17316017316017%"),
    minWidth: wp("35.17316017316017%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.131147540983605%"),
    justifyContent: "center"
  },
  Text_8_1617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1618: {
    width: wp("31.277056277056275%"),
    minWidth: wp("31.277056277056275%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.519125683060096%"),
    justifyContent: "center"
  },
  Text_8_1618: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1619: {
    width: wp("31.277056277056275%"),
    minWidth: wp("31.277056277056275%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.58469945355192%"),
    justifyContent: "center"
  },
  Text_8_1619: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1620: {
    width: wp("31.277056277056275%"),
    minWidth: wp("31.277056277056275%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.74316939890711%"),
    justifyContent: "center"
  },
  Text_8_1620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1630: {
    width: wp("31.277056277056275%"),
    minWidth: wp("31.277056277056275%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.71584699453554%"),
    justifyContent: "center"
  },
  Text_8_1630: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1621: {
    width: wp("34.1991341991342%"),
    minWidth: wp("34.1991341991342%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107.103825136612%"),
    justifyContent: "center"
  },
  Text_8_1621: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1622: {
    width: wp("34.1991341991342%"),
    minWidth: wp("34.1991341991342%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122.81420765027322%"),
    justifyContent: "center"
  },
  Text_8_1622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1623: {
    width: wp("34.1991341991342%"),
    minWidth: wp("34.1991341991342%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138.52459016393448%"),
    justifyContent: "center"
  },
  Text_8_1623: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1629: {
    width: wp("34.1991341991342%"),
    minWidth: wp("34.1991341991342%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("154.23497267759564%"),
    justifyContent: "center"
  },
  Text_8_1629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1624: {
    width: wp("30.303030303030305%"),
    minWidth: wp("30.303030303030305%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("167.3497267759563%"),
    justifyContent: "center"
  },
  Text_8_1624: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1625: {
    width: wp("30.303030303030305%"),
    minWidth: wp("30.303030303030305%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("178.41530054644807%"),
    justifyContent: "center"
  },
  Text_8_1625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1626: {
    width: wp("30.303030303030305%"),
    minWidth: wp("30.303030303030305%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("189.4808743169399%"),
    justifyContent: "center"
  },
  Text_8_1626: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_1627: {
    width: wp("30.303030303030305%"),
    minWidth: wp("30.303030303030305%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("200.5464480874317%"),
    justifyContent: "center"
  },
  Text_8_1627: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_888: {
    width: wp("47.51082251082251%"),
    minWidth: wp("47.51082251082251%"),
    height: hp("218.57923497267763%"),
    minHeight: hp("218.57923497267763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_889: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_890: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_891: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_891_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_891_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.705627705627707%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_891_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_892: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.116883116883116%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_892_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_892_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_892_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_893: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.233766233766232%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_893_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_893_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_893_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_894: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.35064935064935%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_894_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_894_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_894_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_895: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.467532467532465%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_895_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_895_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_895_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1631: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038274%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_1631_5_3093: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.8688524590163667%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_8_1941: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("20.08196721311475%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_1942: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_1943: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8658008658008658%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1943_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151505%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1943_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_1943_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1944: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.147186147186147%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1944_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1944_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_1944_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1945: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.32034632034632%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1945_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1945_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.705627705627709%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_1945_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1946: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.6017316017316%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1946_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1946_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_1946_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1948: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_1948_5_3093: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_8_1960: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("35.79234972677594%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_1961: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_1962: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5974025974025956%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1962_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1962_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_1962_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1963: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.233766233766232%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1963_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1963_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_1963_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1964: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.870129870129873%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1964_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151487%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1964_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_1964_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1967: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_1967_5_3093: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_8_1979: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("51.502732240437155%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_1980: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_1981: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.060606060606062%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1981_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1981_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_1981_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1982: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.406926406926402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1982_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_1982_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_1982_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_1986: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_1986_5_3093: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_8_919: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("67.21311475409834%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_920: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_920_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_920_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5974025974025956%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_920_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_921: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.116883116883116%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_921_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_921_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5974025974025956%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_921_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_922: {
    flexGrow: 1,
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.233766233766232%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_922_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_922_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_922_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_923: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.45887445887446%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_923_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_923_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.597402597402592%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_923_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_924: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.57575757575758%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_924_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_924_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.597402597402592%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_924_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_925: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("78.27868852459017%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_926: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_926_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6743692505411243%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_926_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.679653679653681%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_926_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_927: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173160173160174%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_927_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.674369250541126%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_927_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.679653679653679%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_927_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_928: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.346320346320343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_928_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6743692505411296%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_928_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6796536796536863%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_928_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_929: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.519480519480524%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_929_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.674369250541119%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_929_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6796536796536756%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_929_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_930: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("89.34426229508196%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_931: {
    flexGrow: 1,
    width: wp("13.41991341991342%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_931_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.297745873917748%"),
    top: hp("1.014951278603121%")
  },
  View_I8_931_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.303030303030301%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_931_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_932: {
    flexGrow: 1,
    width: wp("13.528138528138529%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.52813852813853%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_932_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.405970982142858%"),
    top: hp("1.014951278603121%")
  },
  View_I8_932_8_882: {
    flexGrow: 1,
    width: wp("3.67965367965368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.978354978354979%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_932_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_933: {
    flexGrow: 1,
    width: wp("13.41991341991342%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.164502164502167%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_933_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.297745873917748%"),
    top: hp("1.014951278603121%")
  },
  View_I8_933_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.303030303030297%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_933_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_934: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("100.40983606557378%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_8_935: {
    flexGrow: 1,
    width: wp("20.238095238095237%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_935_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.760949337121215%"),
    top: hp("1.0149512786030925%")
  },
  View_I8_935_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.766233766233768%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_935_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_936: {
    flexGrow: 1,
    width: wp("20.238095238095237%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.346320346320343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_936_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.760949337121215%"),
    top: hp("1.0149512786030925%")
  },
  View_I8_936_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.766233766233764%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_936_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3127: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("111.47540983606558%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3128: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_3129: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3129_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_3129_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.705627705627707%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3129_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3130: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.116883116883116%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3130_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_3130_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3130_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3131: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.233766233766232%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3131_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_3131_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3131_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3132: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.35064935064935%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3132_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_3132_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3132_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3133: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.467532467532465%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3133_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031494%")
  },
  View_I8_3133_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3133_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3134: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.6939890710382315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_3134_36_10050: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_3135: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("127.1857923497268%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3136: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_3137: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8658008658008658%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3137_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151505%"),
    top: hp("1.0149512786030925%")
  },
  View_I8_3137_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3137_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3138: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.147186147186147%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3138_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786030925%")
  },
  View_I8_3138_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3138_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3139: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.32034632034632%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3139_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786030925%")
  },
  View_I8_3139_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.705627705627709%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3139_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3140: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.6017316017316%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3140_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786030925%")
  },
  View_I8_3140_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.7631769232411045%"),
    justifyContent: "flex-start"
  },
  Text_I8_3140_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3141: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.6939890710382315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_3141_36_10050: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_3142: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("142.89617486338793%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3143: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_3144: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5974025974025956%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3144_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3144_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.76317692324119%"),
    justifyContent: "flex-start"
  },
  Text_I8_3144_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3145: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.233766233766232%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3145_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3145_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.76317692324119%"),
    justifyContent: "flex-start"
  },
  Text_I8_3145_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3146: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.870129870129873%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3146_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151487%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3146_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.76317692324119%"),
    justifyContent: "flex-start"
  },
  Text_I8_3146_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3147: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038288%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_3147_36_10050: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_3591: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("158.60655737704914%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3592: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_3593: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.060606060606062%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3593_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7003432765151523%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3593_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3593_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3594: {
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.406926406926402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3594_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3594_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3594_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3595: {
    flexGrow: 1,
    width: wp("40.58441558441558%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038288%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_3595_36_10050: {
    flexGrow: 1,
    width: wp("14.502164502164502%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.095238095238095%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_3875: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("174.31693989071036%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3876: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3876_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3876_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5974025974025956%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3876_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3877: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.116883116883116%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3877_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3877_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5974025974025956%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3877_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3878: {
    flexGrow: 1,
    width: wp("8.116883116883116%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.233766233766232%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3878_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.700343276515156%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3878_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7056277056277054%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3878_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3879: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.45887445887446%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3879_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3879_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.597402597402592%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3879_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3880: {
    flexGrow: 1,
    width: wp("8.008658008658008%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.57575757575758%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3880_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5921181682900425%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3880_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.597402597402592%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3880_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3800: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("185.38251366120218%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3801: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3801_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6743692505411243%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3801_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.679653679653681%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3801_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3802: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173160173160174%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3802_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.674369250541126%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3802_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.679653679653679%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3802_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3803: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.346320346320343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3803_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6743692505411296%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3803_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6796536796536863%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3803_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3804: {
    flexGrow: 1,
    width: wp("10.064935064935066%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.519480519480524%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3804_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.674369250541119%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3804_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6796536796536756%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3804_8_882: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3805: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("196.448087431694%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3806: {
    flexGrow: 1,
    width: wp("13.41991341991342%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3806_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.297745873917748%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3806_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.303030303030301%"),
    top: hp("4.763176923241076%"),
    justifyContent: "flex-start"
  },
  Text_I8_3806_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3807: {
    flexGrow: 1,
    width: wp("13.528138528138529%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.52813852813853%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3807_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.405970982142858%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3807_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.411255411255407%"),
    top: hp("4.763176923241076%"),
    justifyContent: "flex-start"
  },
  Text_I8_3807_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3808: {
    flexGrow: 1,
    width: wp("13.41991341991342%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.164502164502167%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3808_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.297745873917748%"),
    top: hp("1.014951278603121%")
  },
  View_I8_3808_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.303030303030297%"),
    top: hp("4.763176923241076%"),
    justifyContent: "flex-start"
  },
  Text_I8_3808_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3809: {
    width: wp("40.58441558441558%"),
    minWidth: wp("40.58441558441558%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.463203463203463%"),
    top: hp("207.51366120218577%"),
    backgroundColor: "rgba(22, 22, 22, 0.9399999976158142)"
  },
  View_8_3810: {
    flexGrow: 1,
    width: wp("20.238095238095237%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3810_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.760949337121215%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3810_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.766233766233768%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3810_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_8_3811: {
    flexGrow: 1,
    width: wp("20.238095238095237%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.346320346320343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_3811_140_9735: {
    flexGrow: 1,
    width: wp("2.7151107788085938%"),
    height: hp("3.1164403821601243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.760949337121215%"),
    top: hp("1.0149512786031778%")
  },
  View_I8_3811_8_882: {
    flexGrow: 1,
    width: wp("2.813852813852814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.766233766233764%"),
    top: hp("4.763176923241133%"),
    justifyContent: "flex-start"
  },
  Text_I8_3811_8_882: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
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
