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
      <View style={styles.View_140_5507}>
        <View style={styles.View_26_1}>
          <View style={styles.View_I26_1_5_19}>
            <View style={styles.View_I26_1_5_20}>
              <View style={styles.View_I26_1_5_21} />
              <View style={styles.View_I26_1_5_22}>
                <Text style={styles.Text_I26_1_5_22}>Navigation Bar</Text>
              </View>
            </View>
            <View style={styles.View_I26_1_5_23}>
              <Text style={styles.Text_I26_1_5_23}>
                Human Interface Guidelines: Navigation Bars
              </Text>
            </View>
          </View>
          <View style={styles.View_I26_1_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef6f/dd09/fd3bfa6feacb858511466026e9b64c32"
          }}
          style={styles.ImageBackground_140_5530}
        />
      </View>
      <View style={styles.View_26_2}>
        <View style={styles.View_I26_2_10_2304}>
          <Text style={styles.Text_I26_2_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I26_2_10_2303} />
      </View>
      <View style={styles.View_26_3}>
        <View style={styles.View_26_4}>
          <Text style={styles.Text_26_4}>Search Field</Text>
        </View>
        <View style={styles.View_26_5}>
          <View style={styles.View_26_6}>
            <View style={styles.View_26_7}>
              <View style={styles.View_26_8}>
                <Text style={styles.Text_26_8}>Light / Default</Text>
              </View>
              <View style={styles.View_26_7567}>
                <Text style={styles.Text_26_7567}>Light / Cancel</Text>
              </View>
              <View style={styles.View_26_7568}>
                <Text style={styles.Text_26_7568}>Light / Scribble</Text>
              </View>
              <View style={styles.View_26_7569}>
                <Text style={styles.Text_26_7569}>Dark / Default</Text>
              </View>
              <View style={styles.View_26_7570}>
                <Text style={styles.Text_26_7570}>Dark / Cancel</Text>
              </View>
              <View style={styles.View_26_7571}>
                <Text style={styles.Text_26_7571}>Dark / Scribble</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_26_18}>
            <View style={styles.View_26_523}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                }}
                style={styles.ImageBackground_140_9380}
              />
              <View style={styles.View_26_525}>
                <Text style={styles.Text_26_525}>Search</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0128/4d28/3905d322627ba009b900f2cbac1cf5c8"
                }}
                style={styles.ImageBackground_140_9337}
              />
            </View>
            <View style={styles.View_26_528}>
              <View style={styles.View_26_529}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                  }}
                  style={styles.ImageBackground_I26_529_140_9380}
                />
                <View style={styles.View_I26_529_26_525}>
                  <Text style={styles.Text_I26_529_26_525}>Search</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                  }}
                  style={styles.ImageBackground_I26_529_140_9337}
                />
              </View>
              <View style={styles.View_26_530}>
                <Text style={styles.Text_26_530}>Cancel</Text>
              </View>
            </View>
            <View style={styles.View_26_531}>
              <View style={styles.View_26_7498}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                  }}
                  style={styles.ImageBackground_140_9423}
                />
                <View style={styles.View_26_7503}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7527/82f1/b268280df21362928923a1de13eb7fb4"
                    }}
                    style={styles.ImageBackground_26_7502}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0128/4d28/3905d322627ba009b900f2cbac1cf5c8"
                  }}
                  style={styles.ImageBackground_140_9424}
                />
              </View>
            </View>
            <View style={styles.View_26_7537}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                }}
                style={styles.ImageBackground_140_9425}
              />
              <View style={styles.View_26_7539}>
                <Text style={styles.Text_26_7539}>Search</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03e3/8e57/238f31ff72ff71d6bc4823a585163571"
                }}
                style={styles.ImageBackground_140_9453}
              />
            </View>
            <View style={styles.View_26_7541}>
              <View style={styles.View_26_7542}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                  }}
                  style={styles.ImageBackground_I26_7542_140_9380}
                />
                <View style={styles.View_I26_7542_26_525}>
                  <Text style={styles.Text_I26_7542_26_525}>Search</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                  }}
                  style={styles.ImageBackground_I26_7542_140_9337}
                />
              </View>
              <View style={styles.View_26_7543}>
                <Text style={styles.Text_26_7543}>Cancel</Text>
              </View>
            </View>
            <View style={styles.View_26_7544}>
              <View style={styles.View_26_7545}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                  }}
                  style={styles.ImageBackground_140_9481}
                />
                <View style={styles.View_26_7547}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8c/9367/8f0d6209f6042c19fe5def7ffc3aa999"
                    }}
                    style={styles.ImageBackground_26_7548}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03e3/8e57/238f31ff72ff71d6bc4823a585163571"
                  }}
                  style={styles.ImageBackground_140_9482}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_26_101}>
        <View style={styles.View_I26_101_10_2311}>
          <Text style={styles.Text_I26_101_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I26_101_10_2312} />
      </View>
      <View style={styles.View_26_102}>
        <View style={styles.View_26_103}>
          <Text style={styles.Text_26_103}>Top Navigation</Text>
        </View>
        <View style={styles.View_26_104}>
          <View style={styles.View_26_105}>
            <View style={styles.View_26_106}>
              <View style={styles.View_26_108}>
                <Text style={styles.Text_26_108}>
                  Light / iPhone 6/7/8/SE / Default
                </Text>
              </View>
              <View style={styles.View_26_16317}>
                <Text style={styles.Text_26_16317}>
                  Light / iPhone 6/7/8/SE / Default / Modal Stack
                </Text>
              </View>
              <View style={styles.View_26_16318}>
                <Text style={styles.Text_26_16318}>
                  Light / iPhone 6/7/8/SE / Search Field
                </Text>
              </View>
              <View style={styles.View_26_16319}>
                <Text style={styles.Text_26_16319}>
                  Light / iPhone 6/7/8/SE / Search Field / Modal Stack
                </Text>
              </View>
              <View style={styles.View_26_16320}>
                <Text style={styles.Text_26_16320}>
                  Light / iPhone 6/7/8/SE / Large Title
                </Text>
              </View>
              <View style={styles.View_26_16321}>
                <Text style={styles.Text_26_16321}>
                  Light / iPhone 6/7/8/SE / Large Title + Search / Modal Stack
                </Text>
              </View>
              <View style={styles.View_26_16322}>
                <Text style={styles.Text_26_16322}>
                  Light / iPhone 6/7/8/SE / Large Title + Search
                </Text>
              </View>
              <View style={styles.View_26_16323}>
                <Text style={styles.Text_26_16323}>
                  Light / iPhone 6/7/8/SE / Large Title + Search / Modal Stack
                </Text>
              </View>
              <View style={styles.View_26_16324}>
                <Text style={styles.Text_26_16324}>
                  Light / iPhone X (or newer) / Default
                </Text>
              </View>
              <View style={styles.View_26_16325}>
                <Text style={styles.Text_26_16325}>
                  Light / iPhone X (or newer) / Default / Modal Stack
                </Text>
              </View>
              <View style={styles.View_26_16326}>
                <Text style={styles.Text_26_16326}>
                  Light / iPhone X (or newer) / Search Field
                </Text>
              </View>
              <View style={styles.View_26_16327}>
                <Text style={styles.Text_26_16327}>
                  Light / iPhone X (or newer) / Search Field / Modal Stack
                </Text>
              </View>
              <View style={styles.View_26_17480}>
                <Text style={styles.Text_26_17480}>
                  Light / iPhone X (or newer) / Large Title
                </Text>
              </View>
              <View style={styles.View_26_17481}>
                <Text style={styles.Text_26_17481}>
                  Light / iPhone X (or newer) / Large Title / Modal Stack
                </Text>
              </View>
              <View style={styles.View_26_17483}>
                <Text style={styles.Text_26_17483}>
                  Light / iPhone X (or newer) / Large Title + Search
                </Text>
              </View>
              <View style={styles.View_26_17484}>
                <Text style={styles.Text_26_17484}>
                  Light / iPhone X (or newer) / Large Title + Search / Modal
                  Stack
                </Text>
              </View>
              <View style={styles.View_27_3428}>
                <Text style={styles.Text_27_3428}>
                  Dark / iPhone 6/7/8/SE / Default
                </Text>
              </View>
              <View style={styles.View_27_3429}>
                <Text style={styles.Text_27_3429}>
                  Dark / iPhone 6/7/8/SE / Default / Modal Stack
                </Text>
              </View>
              <View style={styles.View_27_3430}>
                <Text style={styles.Text_27_3430}>
                  Dark / iPhone 6/7/8/SE / Search Field
                </Text>
              </View>
              <View style={styles.View_27_3431}>
                <Text style={styles.Text_27_3431}>
                  Dark / iPhone 6/7/8/SE / Search Field / Modal Stack
                </Text>
              </View>
              <View style={styles.View_27_3432}>
                <Text style={styles.Text_27_3432}>
                  Dark / iPhone 6/7/8/SE / Large Title
                </Text>
              </View>
              <View style={styles.View_27_3433}>
                <Text style={styles.Text_27_3433}>
                  Dark / iPhone 6/7/8/SE / Large Title + Search / Modal Stack
                </Text>
              </View>
              <View style={styles.View_27_3434}>
                <Text style={styles.Text_27_3434}>
                  Dark / iPhone 6/7/8/SE / Large Title + Search
                </Text>
              </View>
              <View style={styles.View_27_3435}>
                <Text style={styles.Text_27_3435}>
                  Dark / iPhone 6/7/8/SE / Large Title + Search / Modal Stack
                </Text>
              </View>
              <View style={styles.View_27_3436}>
                <Text style={styles.Text_27_3436}>
                  Dark / iPhone X (or newer) / Default
                </Text>
              </View>
              <View style={styles.View_27_3437}>
                <Text style={styles.Text_27_3437}>
                  Dark / iPhone X (or newer) / Default / Modal Stack
                </Text>
              </View>
              <View style={styles.View_27_3438}>
                <Text style={styles.Text_27_3438}>
                  Dark / iPhone X (or newer) / Search Field
                </Text>
              </View>
              <View style={styles.View_27_3439}>
                <Text style={styles.Text_27_3439}>
                  Dark / iPhone X (or newer) / Search Field / Modal Stack
                </Text>
              </View>
              <View style={styles.View_27_3440}>
                <Text style={styles.Text_27_3440}>
                  Dark / iPhone X (or newer) / Large Title
                </Text>
              </View>
              <View style={styles.View_27_3441}>
                <Text style={styles.Text_27_3441}>
                  Dark / iPhone X (or newer) / Large Title / Modal Stack
                </Text>
              </View>
              <View style={styles.View_27_3442}>
                <Text style={styles.Text_27_3442}>
                  Dark / iPhone X (or newer) / Large Title + Search
                </Text>
              </View>
              <View style={styles.View_27_3443}>
                <Text style={styles.Text_27_3443}>
                  Dark / iPhone X (or newer) / Large Title + Search / Modal
                  Stack
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_26_109}>
            <View style={styles.View_26_7856}>
              <View style={styles.View_26_7857}>
                <View style={styles.View_I26_7857_5_3053}>
                  <Text style={styles.Text_I26_7857_5_3053}>9:41 AM</Text>
                </View>
                <View style={styles.View_I26_7857_5_3054}>
                  <View style={styles.View_I26_7857_5_3055}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
                      }}
                      style={styles.ImageBackground_I26_7857_5_3056}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
                      }}
                      style={styles.ImageBackground_I26_7857_5_3059}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
                      }}
                      style={styles.ImageBackground_I26_7857_5_3060}
                    />
                  </View>
                  <View style={styles.View_I26_7857_5_3061}>
                    <Text style={styles.Text_I26_7857_5_3061}>100%</Text>
                  </View>
                  <View style={styles.View_I26_7857_5_3062}>
                    <View style={styles.View_I26_7857_5_3063}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I26_7857_5_3064}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I26_7857_5_3067}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I26_7857_5_3068}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I26_7857_5_3069}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
                      }}
                      style={styles.ImageBackground_I26_7857_5_3070}
                    />
                  </View>
                </View>
                <View style={styles.View_I26_7857_5_3074}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/186d/3095/62bf1f3b41ecb59529b6acb78931ae13"
                    }}
                    style={styles.ImageBackground_I26_7857_5_3075}
                  />
                  <View style={styles.View_I26_7857_5_3081}>
                    <Text style={styles.Text_I26_7857_5_3081}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21d/6aa1/93671107ace7e7340c5bb378b49ee691"
                    }}
                    style={styles.ImageBackground_I26_7857_5_3082}
                  />
                </View>
              </View>
              <View style={styles.View_26_7858}>
                <View style={styles.View_26_7859}>
                  <View style={styles.View_26_7860}>
                    <Text style={styles.Text_26_7860}>􀆉</Text>
                  </View>
                  <View style={styles.View_26_7861}>
                    <Text style={styles.Text_26_7861}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_7862}>
                  <View style={styles.View_26_7863}>
                    <Text style={styles.Text_26_7863}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_7864}>
                  <View style={styles.View_26_7865}>
                    <Text style={styles.Text_26_7865}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_12726}>
              <View style={styles.View_26_12874}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_26_12875}
                />
                <View style={styles.View_26_12876}>
                  <View style={styles.View_26_12877} />
                  <View style={styles.View_26_12878}>
                    <View style={styles.View_26_12879} />
                    <View style={styles.View_26_12880} />
                  </View>
                </View>
                <View style={styles.View_26_12881}>
                  <View style={styles.View_I26_12881_36_9152}>
                    <Text style={styles.Text_I26_12881_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I26_12881_36_9153}>
                    <View style={styles.View_I26_12881_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I26_12881_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I26_12881_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I26_12881_36_9159}
                      />
                    </View>
                    <View style={styles.View_I26_12881_36_9160}>
                      <Text style={styles.Text_I26_12881_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I26_12881_36_9161}>
                      <View style={styles.View_I26_12881_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I26_12881_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I26_12881_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I26_12881_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I26_12881_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I26_12881_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I26_12881_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I26_12881_36_9174}
                    />
                    <View style={styles.View_I26_12881_36_9180}>
                      <Text style={styles.Text_I26_12881_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I26_12881_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_26_12728}>
                <View style={styles.View_26_12729}>
                  <View style={styles.View_26_12730}>
                    <Text style={styles.Text_26_12730}>􀆉</Text>
                  </View>
                  <View style={styles.View_26_12731}>
                    <Text style={styles.Text_26_12731}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_12732}>
                  <View style={styles.View_26_12733}>
                    <Text style={styles.Text_26_12733}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_12734}>
                  <View style={styles.View_26_12735}>
                    <Text style={styles.Text_26_12735}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_7866}>
              <View style={styles.View_26_7867}>
                <View style={styles.View_I26_7867_5_3053}>
                  <Text style={styles.Text_I26_7867_5_3053}>9:41 AM</Text>
                </View>
                <View style={styles.View_I26_7867_5_3054}>
                  <View style={styles.View_I26_7867_5_3055}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
                      }}
                      style={styles.ImageBackground_I26_7867_5_3056}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
                      }}
                      style={styles.ImageBackground_I26_7867_5_3059}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
                      }}
                      style={styles.ImageBackground_I26_7867_5_3060}
                    />
                  </View>
                  <View style={styles.View_I26_7867_5_3061}>
                    <Text style={styles.Text_I26_7867_5_3061}>100%</Text>
                  </View>
                  <View style={styles.View_I26_7867_5_3062}>
                    <View style={styles.View_I26_7867_5_3063}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I26_7867_5_3064}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I26_7867_5_3067}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I26_7867_5_3068}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I26_7867_5_3069}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
                      }}
                      style={styles.ImageBackground_I26_7867_5_3070}
                    />
                  </View>
                </View>
                <View style={styles.View_I26_7867_5_3074}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/186d/3095/62bf1f3b41ecb59529b6acb78931ae13"
                    }}
                    style={styles.ImageBackground_I26_7867_5_3075}
                  />
                  <View style={styles.View_I26_7867_5_3081}>
                    <Text style={styles.Text_I26_7867_5_3081}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21d/6aa1/93671107ace7e7340c5bb378b49ee691"
                    }}
                    style={styles.ImageBackground_I26_7867_5_3082}
                  />
                </View>
              </View>
              <View style={styles.View_26_7868}>
                <View style={styles.View_26_7869}>
                  <View style={styles.View_26_7870}>
                    <View style={styles.View_26_7871}>
                      <Text style={styles.Text_26_7871}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_7872}>
                      <Text style={styles.Text_26_7872}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_7873}>
                    <View style={styles.View_26_7874}>
                      <Text style={styles.Text_26_7874}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_7875}>
                    <View style={styles.View_26_7876}>
                      <Text style={styles.Text_26_7876}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_7877}>
                  <View style={styles.View_26_7878}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I26_7878_140_9380}
                    />
                    <View style={styles.View_I26_7878_26_525}>
                      <Text style={styles.Text_I26_7878_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I26_7878_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_13069}>
              <View style={styles.View_26_13070}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_26_13071}
                />
                <View style={styles.View_26_13072}>
                  <View style={styles.View_26_13073} />
                  <View style={styles.View_26_13074}>
                    <View style={styles.View_26_13075} />
                    <View style={styles.View_26_13076} />
                  </View>
                </View>
                <View style={styles.View_26_13077}>
                  <View style={styles.View_I26_13077_36_9152}>
                    <Text style={styles.Text_I26_13077_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I26_13077_36_9153}>
                    <View style={styles.View_I26_13077_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I26_13077_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I26_13077_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I26_13077_36_9159}
                      />
                    </View>
                    <View style={styles.View_I26_13077_36_9160}>
                      <Text style={styles.Text_I26_13077_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I26_13077_36_9161}>
                      <View style={styles.View_I26_13077_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I26_13077_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I26_13077_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I26_13077_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I26_13077_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I26_13077_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I26_13077_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I26_13077_36_9174}
                    />
                    <View style={styles.View_I26_13077_36_9180}>
                      <Text style={styles.Text_I26_13077_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I26_13077_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_26_13121}>
                <View style={styles.View_26_13122}>
                  <View style={styles.View_26_13123}>
                    <View style={styles.View_26_13124}>
                      <Text style={styles.Text_26_13124}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_13125}>
                      <Text style={styles.Text_26_13125}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_13126}>
                    <View style={styles.View_26_13127}>
                      <Text style={styles.Text_26_13127}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_13128}>
                    <View style={styles.View_26_13129}>
                      <Text style={styles.Text_26_13129}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_13130}>
                  <View style={styles.View_26_13131}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I26_13131_140_9380}
                    />
                    <View style={styles.View_I26_13131_26_525}>
                      <Text style={styles.Text_I26_13131_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I26_13131_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_12749}>
              <View style={styles.View_26_12750}>
                <View style={styles.View_I26_12750_5_3053}>
                  <Text style={styles.Text_I26_12750_5_3053}>9:41 AM</Text>
                </View>
                <View style={styles.View_I26_12750_5_3054}>
                  <View style={styles.View_I26_12750_5_3055}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
                      }}
                      style={styles.ImageBackground_I26_12750_5_3056}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
                      }}
                      style={styles.ImageBackground_I26_12750_5_3059}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
                      }}
                      style={styles.ImageBackground_I26_12750_5_3060}
                    />
                  </View>
                  <View style={styles.View_I26_12750_5_3061}>
                    <Text style={styles.Text_I26_12750_5_3061}>100%</Text>
                  </View>
                  <View style={styles.View_I26_12750_5_3062}>
                    <View style={styles.View_I26_12750_5_3063}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I26_12750_5_3064}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I26_12750_5_3067}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I26_12750_5_3068}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I26_12750_5_3069}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
                      }}
                      style={styles.ImageBackground_I26_12750_5_3070}
                    />
                  </View>
                </View>
                <View style={styles.View_I26_12750_5_3074}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/186d/3095/62bf1f3b41ecb59529b6acb78931ae13"
                    }}
                    style={styles.ImageBackground_I26_12750_5_3075}
                  />
                  <View style={styles.View_I26_12750_5_3081}>
                    <Text style={styles.Text_I26_12750_5_3081}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21d/6aa1/93671107ace7e7340c5bb378b49ee691"
                    }}
                    style={styles.ImageBackground_I26_12750_5_3082}
                  />
                </View>
              </View>
              <View style={styles.View_26_12751}>
                <View style={styles.View_26_12752}>
                  <View style={styles.View_26_12753}>
                    <View style={styles.View_26_12754}>
                      <Text style={styles.Text_26_12754}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_12755}>
                      <Text style={styles.Text_26_12755}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_12756}>
                    <View style={styles.View_26_12757}>
                      <Text style={styles.Text_26_12757}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_12758}>
                    <View style={styles.View_26_12759}>
                      <Text style={styles.Text_26_12759}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_12760}>
                  <View style={styles.View_26_12761}>
                    <Text style={styles.Text_26_12761}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_13135}>
              <View style={styles.View_26_13136}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_26_13137}
                />
                <View style={styles.View_26_13138}>
                  <View style={styles.View_26_13139} />
                  <View style={styles.View_26_13140}>
                    <View style={styles.View_26_13141} />
                    <View style={styles.View_26_13142} />
                  </View>
                </View>
                <View style={styles.View_26_13143}>
                  <View style={styles.View_I26_13143_36_9152}>
                    <Text style={styles.Text_I26_13143_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I26_13143_36_9153}>
                    <View style={styles.View_I26_13143_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I26_13143_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I26_13143_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I26_13143_36_9159}
                      />
                    </View>
                    <View style={styles.View_I26_13143_36_9160}>
                      <Text style={styles.Text_I26_13143_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I26_13143_36_9161}>
                      <View style={styles.View_I26_13143_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I26_13143_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I26_13143_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I26_13143_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I26_13143_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I26_13143_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I26_13143_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I26_13143_36_9174}
                    />
                    <View style={styles.View_I26_13143_36_9180}>
                      <Text style={styles.Text_I26_13143_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I26_13143_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_26_13193}>
                <View style={styles.View_26_13194}>
                  <View style={styles.View_26_13195}>
                    <View style={styles.View_26_13196}>
                      <Text style={styles.Text_26_13196}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_13197}>
                      <Text style={styles.Text_26_13197}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_13198}>
                    <View style={styles.View_26_13199}>
                      <Text style={styles.Text_26_13199}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_13200}>
                    <View style={styles.View_26_13201}>
                      <Text style={styles.Text_26_13201}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_13202}>
                  <View style={styles.View_26_13203}>
                    <Text style={styles.Text_26_13203}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2077}>
              <View style={styles.View_27_2078}>
                <View style={styles.View_I27_2078_5_3053}>
                  <Text style={styles.Text_I27_2078_5_3053}>9:41 AM</Text>
                </View>
                <View style={styles.View_I27_2078_5_3054}>
                  <View style={styles.View_I27_2078_5_3055}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
                      }}
                      style={styles.ImageBackground_I27_2078_5_3056}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
                      }}
                      style={styles.ImageBackground_I27_2078_5_3059}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
                      }}
                      style={styles.ImageBackground_I27_2078_5_3060}
                    />
                  </View>
                  <View style={styles.View_I27_2078_5_3061}>
                    <Text style={styles.Text_I27_2078_5_3061}>100%</Text>
                  </View>
                  <View style={styles.View_I27_2078_5_3062}>
                    <View style={styles.View_I27_2078_5_3063}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I27_2078_5_3064}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I27_2078_5_3067}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I27_2078_5_3068}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2078_5_3069}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
                      }}
                      style={styles.ImageBackground_I27_2078_5_3070}
                    />
                  </View>
                </View>
                <View style={styles.View_I27_2078_5_3074}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/186d/3095/62bf1f3b41ecb59529b6acb78931ae13"
                    }}
                    style={styles.ImageBackground_I27_2078_5_3075}
                  />
                  <View style={styles.View_I27_2078_5_3081}>
                    <Text style={styles.Text_I27_2078_5_3081}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21d/6aa1/93671107ace7e7340c5bb378b49ee691"
                    }}
                    style={styles.ImageBackground_I27_2078_5_3082}
                  />
                </View>
              </View>
              <View style={styles.View_27_2079}>
                <View style={styles.View_27_2080}>
                  <View style={styles.View_27_2081}>
                    <View style={styles.View_27_2082}>
                      <Text style={styles.Text_27_2082}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2083}>
                      <Text style={styles.Text_27_2083}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2084}>
                    <View style={styles.View_27_2085}>
                      <Text style={styles.Text_27_2085}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2086}>
                    <View style={styles.View_27_2087}>
                      <Text style={styles.Text_27_2087}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2088}>
                  <View style={styles.View_27_2089}>
                    <Text style={styles.Text_27_2089}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2090}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I27_2090_140_9380}
                    />
                    <View style={styles.View_I27_2090_26_525}>
                      <Text style={styles.Text_I27_2090_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I27_2090_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2128}>
              <View style={styles.View_27_2129}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2130}
                />
                <View style={styles.View_27_2131}>
                  <View style={styles.View_27_2132} />
                  <View style={styles.View_27_2133}>
                    <View style={styles.View_27_2134} />
                    <View style={styles.View_27_2135} />
                  </View>
                </View>
                <View style={styles.View_27_2136}>
                  <View style={styles.View_I27_2136_36_9152}>
                    <Text style={styles.Text_I27_2136_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I27_2136_36_9153}>
                    <View style={styles.View_I27_2136_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I27_2136_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I27_2136_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I27_2136_36_9159}
                      />
                    </View>
                    <View style={styles.View_I27_2136_36_9160}>
                      <Text style={styles.Text_I27_2136_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I27_2136_36_9161}>
                      <View style={styles.View_I27_2136_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I27_2136_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I27_2136_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I27_2136_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I27_2136_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I27_2136_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2136_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I27_2136_36_9174}
                    />
                    <View style={styles.View_I27_2136_36_9180}>
                      <Text style={styles.Text_I27_2136_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I27_2136_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2137}>
                <View style={styles.View_27_2138}>
                  <View style={styles.View_27_2139}>
                    <View style={styles.View_27_2140}>
                      <Text style={styles.Text_27_2140}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2141}>
                      <Text style={styles.Text_27_2141}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2142}>
                    <View style={styles.View_27_2143}>
                      <Text style={styles.Text_27_2143}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2144}>
                    <View style={styles.View_27_2145}>
                      <Text style={styles.Text_27_2145}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2183}>
                  <View style={styles.View_27_2184}>
                    <Text style={styles.Text_27_2184}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2185}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I27_2185_140_9380}
                    />
                    <View style={styles.View_I27_2185_26_525}>
                      <Text style={styles.Text_I27_2185_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I27_2185_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_8061}>
              <View style={styles.View_26_8062}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I26_8062_5_3003}
                />
                <View style={styles.View_I26_8062_5_3008}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                    }}
                    style={styles.ImageBackground_I26_8062_5_3009}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                    }}
                    style={styles.ImageBackground_I26_8062_140_7963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                    }}
                    style={styles.ImageBackground_I26_8062_140_8168}
                  />
                </View>
                <View style={styles.View_I26_8062_5_3024}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                    }}
                    style={styles.ImageBackground_I26_8062_5_3025}
                  />
                </View>
              </View>
              <View style={styles.View_26_8063}>
                <View style={styles.View_26_8064}>
                  <View style={styles.View_26_8065}>
                    <Text style={styles.Text_26_8065}>􀆉</Text>
                  </View>
                  <View style={styles.View_26_8066}>
                    <Text style={styles.Text_26_8066}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_8067}>
                  <View style={styles.View_26_8068}>
                    <Text style={styles.Text_26_8068}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_8069}>
                  <View style={styles.View_26_8070}>
                    <Text style={styles.Text_26_8070}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_10150}>
              <View style={styles.View_26_10685}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_26_10686}
                />
                <View style={styles.View_26_10687}>
                  <View style={styles.View_26_10688} />
                  <View style={styles.View_26_10689}>
                    <View style={styles.View_26_10690} />
                    <View style={styles.View_26_10691} />
                  </View>
                </View>
                <View style={styles.View_26_10692}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I26_10692_36_7726}
                  />
                  <View style={styles.View_I26_10692_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I26_10692_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I26_10692_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I26_10692_36_7740}
                    />
                  </View>
                  <View style={styles.View_I26_10692_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I26_10692_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_26_10152}>
                <View style={styles.View_26_10153}>
                  <View style={styles.View_26_10154}>
                    <Text style={styles.Text_26_10154}>􀆉</Text>
                  </View>
                  <View style={styles.View_26_10155}>
                    <Text style={styles.Text_26_10155}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_10156}>
                  <View style={styles.View_26_10157}>
                    <Text style={styles.Text_26_10157}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_26_10158}>
                  <View style={styles.View_26_10159}>
                    <Text style={styles.Text_26_10159}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_8163}>
              <View style={styles.View_26_8164}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I26_8164_5_3003}
                />
                <View style={styles.View_I26_8164_5_3008}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                    }}
                    style={styles.ImageBackground_I26_8164_5_3009}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                    }}
                    style={styles.ImageBackground_I26_8164_140_7963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                    }}
                    style={styles.ImageBackground_I26_8164_140_8168}
                  />
                </View>
                <View style={styles.View_I26_8164_5_3024}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                    }}
                    style={styles.ImageBackground_I26_8164_5_3025}
                  />
                </View>
              </View>
              <View style={styles.View_26_8197}>
                <View style={styles.View_26_8990}>
                  <View style={styles.View_26_8991}>
                    <View style={styles.View_26_8992}>
                      <Text style={styles.Text_26_8992}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_8993}>
                      <Text style={styles.Text_26_8993}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_8994}>
                    <View style={styles.View_26_8995}>
                      <Text style={styles.Text_26_8995}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_8996}>
                    <View style={styles.View_26_8997}>
                      <Text style={styles.Text_26_8997}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_8198}>
                  <View style={styles.View_26_8199}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I26_8199_140_9380}
                    />
                    <View style={styles.View_I26_8199_26_525}>
                      <Text style={styles.Text_I26_8199_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I26_8199_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_10110}>
              <View style={styles.View_26_10275}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_26_10276}
                />
                <View style={styles.View_26_10277}>
                  <View style={styles.View_26_10278} />
                  <View style={styles.View_26_10279}>
                    <View style={styles.View_26_10280} />
                    <View style={styles.View_26_10281} />
                  </View>
                </View>
                <View style={styles.View_26_10282}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I26_10282_36_7726}
                  />
                  <View style={styles.View_I26_10282_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I26_10282_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I26_10282_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I26_10282_36_7740}
                    />
                  </View>
                  <View style={styles.View_I26_10282_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I26_10282_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_26_10112}>
                <View style={styles.View_26_10113}>
                  <View style={styles.View_26_10114}>
                    <View style={styles.View_26_10115}>
                      <Text style={styles.Text_26_10115}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_10116}>
                      <Text style={styles.Text_26_10116}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_10117}>
                    <View style={styles.View_26_10118}>
                      <Text style={styles.Text_26_10118}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_10119}>
                    <View style={styles.View_26_10120}>
                      <Text style={styles.Text_26_10120}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_10121}>
                  <View style={styles.View_26_10122}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I26_10122_140_9380}
                    />
                    <View style={styles.View_I26_10122_26_525}>
                      <Text style={styles.Text_I26_10122_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I26_10122_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_8297}>
              <View style={styles.View_26_8298}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I26_8298_5_3003}
                />
                <View style={styles.View_I26_8298_5_3008}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                    }}
                    style={styles.ImageBackground_I26_8298_5_3009}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                    }}
                    style={styles.ImageBackground_I26_8298_140_7963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                    }}
                    style={styles.ImageBackground_I26_8298_140_8168}
                  />
                </View>
                <View style={styles.View_I26_8298_5_3024}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                    }}
                    style={styles.ImageBackground_I26_8298_5_3025}
                  />
                </View>
              </View>
              <View style={styles.View_26_8299}>
                <View style={styles.View_26_8998}>
                  <View style={styles.View_26_8999}>
                    <View style={styles.View_26_9000}>
                      <Text style={styles.Text_26_9000}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_9001}>
                      <Text style={styles.Text_26_9001}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_9002}>
                    <View style={styles.View_26_9003}>
                      <Text style={styles.Text_26_9003}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_9004}>
                    <View style={styles.View_26_9005}>
                      <Text style={styles.Text_26_9005}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_8308}>
                  <View style={styles.View_26_8337}>
                    <Text style={styles.Text_26_8337}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_26_9583}>
              <View style={styles.View_26_9620}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_26_9621}
                />
                <View style={styles.View_26_9622}>
                  <View style={styles.View_26_9623} />
                  <View style={styles.View_26_9624}>
                    <View style={styles.View_26_9625} />
                    <View style={styles.View_26_9626} />
                  </View>
                </View>
                <View style={styles.View_26_9654}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I26_9654_36_7726}
                  />
                  <View style={styles.View_I26_9654_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I26_9654_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I26_9654_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I26_9654_36_7740}
                    />
                  </View>
                  <View style={styles.View_I26_9654_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I26_9654_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_26_9585}>
                <View style={styles.View_26_9586}>
                  <View style={styles.View_26_9587}>
                    <View style={styles.View_26_9588}>
                      <Text style={styles.Text_26_9588}>􀆉</Text>
                    </View>
                    <View style={styles.View_26_9589}>
                      <Text style={styles.Text_26_9589}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_9590}>
                    <View style={styles.View_26_9591}>
                      <Text style={styles.Text_26_9591}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_26_9592}>
                    <View style={styles.View_26_9593}>
                      <Text style={styles.Text_26_9593}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_26_9594}>
                  <View style={styles.View_26_9595}>
                    <Text style={styles.Text_26_9595}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2243}>
              <View style={styles.View_27_2244}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I27_2244_5_3003}
                />
                <View style={styles.View_I27_2244_5_3008}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                    }}
                    style={styles.ImageBackground_I27_2244_5_3009}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                    }}
                    style={styles.ImageBackground_I27_2244_140_7963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                    }}
                    style={styles.ImageBackground_I27_2244_140_8168}
                  />
                </View>
                <View style={styles.View_I27_2244_5_3024}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                    }}
                    style={styles.ImageBackground_I27_2244_5_3025}
                  />
                </View>
              </View>
              <View style={styles.View_27_2245}>
                <View style={styles.View_27_2246}>
                  <View style={styles.View_27_2247}>
                    <View style={styles.View_27_2248}>
                      <Text style={styles.Text_27_2248}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2249}>
                      <Text style={styles.Text_27_2249}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2250}>
                    <View style={styles.View_27_2251}>
                      <Text style={styles.Text_27_2251}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2252}>
                    <View style={styles.View_27_2253}>
                      <Text style={styles.Text_27_2253}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2350}>
                  <View style={styles.View_27_2351}>
                    <Text style={styles.Text_27_2351}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2352}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I27_2352_140_9380}
                    />
                    <View style={styles.View_I27_2352_26_525}>
                      <Text style={styles.Text_I27_2352_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I27_2352_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2280}>
              <View style={styles.View_27_2282}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2283}
                />
                <View style={styles.View_27_2284}>
                  <View style={styles.View_27_2285} />
                  <View style={styles.View_27_2286}>
                    <View style={styles.View_27_2287} />
                    <View style={styles.View_27_2288} />
                  </View>
                </View>
                <View style={styles.View_27_2289}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I27_2289_36_7726}
                  />
                  <View style={styles.View_I27_2289_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I27_2289_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I27_2289_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I27_2289_36_7740}
                    />
                  </View>
                  <View style={styles.View_I27_2289_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I27_2289_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2290}>
                <View style={styles.View_27_2291}>
                  <View style={styles.View_27_2292}>
                    <View style={styles.View_27_2293}>
                      <Text style={styles.Text_27_2293}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2294}>
                      <Text style={styles.Text_27_2294}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2295}>
                    <View style={styles.View_27_2296}>
                      <Text style={styles.Text_27_2296}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2297}>
                    <View style={styles.View_27_2298}>
                      <Text style={styles.Text_27_2298}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2356}>
                  <View style={styles.View_27_2357}>
                    <Text style={styles.Text_27_2357}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2358}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a8/adbc/c32ca01cd77dd0ee9b3c7a1f59f44d09"
                      }}
                      style={styles.ImageBackground_I27_2358_140_9380}
                    />
                    <View style={styles.View_I27_2358_26_525}>
                      <Text style={styles.Text_I27_2358_26_525}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                      }}
                      style={styles.ImageBackground_I27_2358_140_9337}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2362}>
              <View style={styles.View_27_2363}>
                <View style={styles.View_I27_2363_36_9152}>
                  <Text style={styles.Text_I27_2363_36_9152}>9:41 AM</Text>
                </View>
                <View style={styles.View_I27_2363_36_9153}>
                  <View style={styles.View_I27_2363_36_9154}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                      }}
                      style={styles.ImageBackground_I27_2363_36_9155}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                      }}
                      style={styles.ImageBackground_I27_2363_36_9158}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                      }}
                      style={styles.ImageBackground_I27_2363_36_9159}
                    />
                  </View>
                  <View style={styles.View_I27_2363_36_9160}>
                    <Text style={styles.Text_I27_2363_36_9160}>100%</Text>
                  </View>
                  <View style={styles.View_I27_2363_36_9161}>
                    <View style={styles.View_I27_2363_36_9162}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I27_2363_36_9163}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I27_2363_36_9166}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I27_2363_36_9167}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2363_36_9168}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                      }}
                      style={styles.ImageBackground_I27_2363_36_9169}
                    />
                  </View>
                </View>
                <View style={styles.View_I27_2363_36_9173}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                    }}
                    style={styles.ImageBackground_I27_2363_36_9174}
                  />
                  <View style={styles.View_I27_2363_36_9180}>
                    <Text style={styles.Text_I27_2363_36_9180}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                    }}
                    style={styles.ImageBackground_I27_2363_36_9181}
                  />
                </View>
              </View>
              <View style={styles.View_27_2364}>
                <View style={styles.View_27_2365}>
                  <View style={styles.View_27_2366}>
                    <Text style={styles.Text_27_2366}>􀆉</Text>
                  </View>
                  <View style={styles.View_27_2367}>
                    <Text style={styles.Text_27_2367}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2368}>
                  <View style={styles.View_27_2369}>
                    <Text style={styles.Text_27_2369}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2370}>
                  <View style={styles.View_27_2371}>
                    <Text style={styles.Text_27_2371}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2372}>
              <View style={styles.View_27_2373}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2374}
                />
                <View style={styles.View_27_2375}>
                  <View style={styles.View_27_2376} />
                  <View style={styles.View_27_2377}>
                    <View style={styles.View_27_2378} />
                    <View style={styles.View_27_2379} />
                  </View>
                </View>
                <View style={styles.View_27_2380}>
                  <View style={styles.View_I27_2380_36_9152}>
                    <Text style={styles.Text_I27_2380_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I27_2380_36_9153}>
                    <View style={styles.View_I27_2380_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I27_2380_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I27_2380_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I27_2380_36_9159}
                      />
                    </View>
                    <View style={styles.View_I27_2380_36_9160}>
                      <Text style={styles.Text_I27_2380_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I27_2380_36_9161}>
                      <View style={styles.View_I27_2380_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I27_2380_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I27_2380_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I27_2380_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I27_2380_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I27_2380_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2380_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I27_2380_36_9174}
                    />
                    <View style={styles.View_I27_2380_36_9180}>
                      <Text style={styles.Text_I27_2380_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I27_2380_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2381}>
                <View style={styles.View_27_2382}>
                  <View style={styles.View_27_2383}>
                    <Text style={styles.Text_27_2383}>􀆉</Text>
                  </View>
                  <View style={styles.View_27_2384}>
                    <Text style={styles.Text_27_2384}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2385}>
                  <View style={styles.View_27_2386}>
                    <Text style={styles.Text_27_2386}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2387}>
                  <View style={styles.View_27_2388}>
                    <Text style={styles.Text_27_2388}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2389}>
              <View style={styles.View_27_2390}>
                <View style={styles.View_I27_2390_36_9152}>
                  <Text style={styles.Text_I27_2390_36_9152}>9:41 AM</Text>
                </View>
                <View style={styles.View_I27_2390_36_9153}>
                  <View style={styles.View_I27_2390_36_9154}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                      }}
                      style={styles.ImageBackground_I27_2390_36_9155}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                      }}
                      style={styles.ImageBackground_I27_2390_36_9158}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                      }}
                      style={styles.ImageBackground_I27_2390_36_9159}
                    />
                  </View>
                  <View style={styles.View_I27_2390_36_9160}>
                    <Text style={styles.Text_I27_2390_36_9160}>100%</Text>
                  </View>
                  <View style={styles.View_I27_2390_36_9161}>
                    <View style={styles.View_I27_2390_36_9162}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I27_2390_36_9163}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I27_2390_36_9166}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I27_2390_36_9167}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2390_36_9168}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                      }}
                      style={styles.ImageBackground_I27_2390_36_9169}
                    />
                  </View>
                </View>
                <View style={styles.View_I27_2390_36_9173}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                    }}
                    style={styles.ImageBackground_I27_2390_36_9174}
                  />
                  <View style={styles.View_I27_2390_36_9180}>
                    <Text style={styles.Text_I27_2390_36_9180}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                    }}
                    style={styles.ImageBackground_I27_2390_36_9181}
                  />
                </View>
              </View>
              <View style={styles.View_27_2391}>
                <View style={styles.View_27_2392}>
                  <View style={styles.View_27_2393}>
                    <View style={styles.View_27_2394}>
                      <Text style={styles.Text_27_2394}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2395}>
                      <Text style={styles.Text_27_2395}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2396}>
                    <View style={styles.View_27_2397}>
                      <Text style={styles.Text_27_2397}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2398}>
                    <View style={styles.View_27_2399}>
                      <Text style={styles.Text_27_2399}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2400}>
                  <View style={styles.View_27_2401}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2401_140_9425}
                    />
                    <View style={styles.View_I27_2401_26_7539}>
                      <Text style={styles.Text_I27_2401_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2401_140_9453}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2402}>
              <View style={styles.View_27_2403}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2404}
                />
                <View style={styles.View_27_2405}>
                  <View style={styles.View_27_2406} />
                  <View style={styles.View_27_2407}>
                    <View style={styles.View_27_2408} />
                    <View style={styles.View_27_2409} />
                  </View>
                </View>
                <View style={styles.View_27_2410}>
                  <View style={styles.View_I27_2410_36_9152}>
                    <Text style={styles.Text_I27_2410_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I27_2410_36_9153}>
                    <View style={styles.View_I27_2410_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I27_2410_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I27_2410_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I27_2410_36_9159}
                      />
                    </View>
                    <View style={styles.View_I27_2410_36_9160}>
                      <Text style={styles.Text_I27_2410_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I27_2410_36_9161}>
                      <View style={styles.View_I27_2410_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I27_2410_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I27_2410_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I27_2410_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I27_2410_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I27_2410_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2410_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I27_2410_36_9174}
                    />
                    <View style={styles.View_I27_2410_36_9180}>
                      <Text style={styles.Text_I27_2410_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I27_2410_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2411}>
                <View style={styles.View_27_2412}>
                  <View style={styles.View_27_2413}>
                    <View style={styles.View_27_2414}>
                      <Text style={styles.Text_27_2414}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2415}>
                      <Text style={styles.Text_27_2415}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2416}>
                    <View style={styles.View_27_2417}>
                      <Text style={styles.Text_27_2417}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2418}>
                    <View style={styles.View_27_2419}>
                      <Text style={styles.Text_27_2419}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2420}>
                  <View style={styles.View_27_2421}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2421_140_9425}
                    />
                    <View style={styles.View_I27_2421_26_7539}>
                      <Text style={styles.Text_I27_2421_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2421_140_9453}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2422}>
              <View style={styles.View_27_2423}>
                <View style={styles.View_I27_2423_36_9152}>
                  <Text style={styles.Text_I27_2423_36_9152}>9:41 AM</Text>
                </View>
                <View style={styles.View_I27_2423_36_9153}>
                  <View style={styles.View_I27_2423_36_9154}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                      }}
                      style={styles.ImageBackground_I27_2423_36_9155}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                      }}
                      style={styles.ImageBackground_I27_2423_36_9158}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                      }}
                      style={styles.ImageBackground_I27_2423_36_9159}
                    />
                  </View>
                  <View style={styles.View_I27_2423_36_9160}>
                    <Text style={styles.Text_I27_2423_36_9160}>100%</Text>
                  </View>
                  <View style={styles.View_I27_2423_36_9161}>
                    <View style={styles.View_I27_2423_36_9162}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I27_2423_36_9163}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I27_2423_36_9166}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I27_2423_36_9167}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2423_36_9168}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                      }}
                      style={styles.ImageBackground_I27_2423_36_9169}
                    />
                  </View>
                </View>
                <View style={styles.View_I27_2423_36_9173}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                    }}
                    style={styles.ImageBackground_I27_2423_36_9174}
                  />
                  <View style={styles.View_I27_2423_36_9180}>
                    <Text style={styles.Text_I27_2423_36_9180}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                    }}
                    style={styles.ImageBackground_I27_2423_36_9181}
                  />
                </View>
              </View>
              <View style={styles.View_27_2424}>
                <View style={styles.View_27_2425}>
                  <View style={styles.View_27_2426}>
                    <View style={styles.View_27_2427}>
                      <Text style={styles.Text_27_2427}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2428}>
                      <Text style={styles.Text_27_2428}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2429}>
                    <View style={styles.View_27_2430}>
                      <Text style={styles.Text_27_2430}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2431}>
                    <View style={styles.View_27_2432}>
                      <Text style={styles.Text_27_2432}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2433}>
                  <View style={styles.View_27_2434}>
                    <Text style={styles.Text_27_2434}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2435}>
              <View style={styles.View_27_2436}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2437}
                />
                <View style={styles.View_27_2438}>
                  <View style={styles.View_27_2439} />
                  <View style={styles.View_27_2440}>
                    <View style={styles.View_27_2441} />
                    <View style={styles.View_27_2442} />
                  </View>
                </View>
                <View style={styles.View_27_2443}>
                  <View style={styles.View_I27_2443_36_9152}>
                    <Text style={styles.Text_I27_2443_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I27_2443_36_9153}>
                    <View style={styles.View_I27_2443_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I27_2443_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I27_2443_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I27_2443_36_9159}
                      />
                    </View>
                    <View style={styles.View_I27_2443_36_9160}>
                      <Text style={styles.Text_I27_2443_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I27_2443_36_9161}>
                      <View style={styles.View_I27_2443_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I27_2443_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I27_2443_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I27_2443_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I27_2443_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I27_2443_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2443_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I27_2443_36_9174}
                    />
                    <View style={styles.View_I27_2443_36_9180}>
                      <Text style={styles.Text_I27_2443_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I27_2443_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2444}>
                <View style={styles.View_27_2445}>
                  <View style={styles.View_27_2446}>
                    <View style={styles.View_27_2447}>
                      <Text style={styles.Text_27_2447}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2448}>
                      <Text style={styles.Text_27_2448}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2449}>
                    <View style={styles.View_27_2450}>
                      <Text style={styles.Text_27_2450}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2451}>
                    <View style={styles.View_27_2452}>
                      <Text style={styles.Text_27_2452}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2453}>
                  <View style={styles.View_27_2454}>
                    <Text style={styles.Text_27_2454}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2455}>
              <View style={styles.View_27_2456}>
                <View style={styles.View_I27_2456_36_9152}>
                  <Text style={styles.Text_I27_2456_36_9152}>9:41 AM</Text>
                </View>
                <View style={styles.View_I27_2456_36_9153}>
                  <View style={styles.View_I27_2456_36_9154}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                      }}
                      style={styles.ImageBackground_I27_2456_36_9155}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                      }}
                      style={styles.ImageBackground_I27_2456_36_9158}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                      }}
                      style={styles.ImageBackground_I27_2456_36_9159}
                    />
                  </View>
                  <View style={styles.View_I27_2456_36_9160}>
                    <Text style={styles.Text_I27_2456_36_9160}>100%</Text>
                  </View>
                  <View style={styles.View_I27_2456_36_9161}>
                    <View style={styles.View_I27_2456_36_9162}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                        }}
                        style={styles.ImageBackground_I27_2456_36_9163}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                        }}
                        style={styles.ImageBackground_I27_2456_36_9166}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                        }}
                        style={styles.ImageBackground_I27_2456_36_9167}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2456_36_9168}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                      }}
                      style={styles.ImageBackground_I27_2456_36_9169}
                    />
                  </View>
                </View>
                <View style={styles.View_I27_2456_36_9173}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                    }}
                    style={styles.ImageBackground_I27_2456_36_9174}
                  />
                  <View style={styles.View_I27_2456_36_9180}>
                    <Text style={styles.Text_I27_2456_36_9180}>Figma</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                    }}
                    style={styles.ImageBackground_I27_2456_36_9181}
                  />
                </View>
              </View>
              <View style={styles.View_27_2457}>
                <View style={styles.View_27_2458}>
                  <View style={styles.View_27_2459}>
                    <View style={styles.View_27_2460}>
                      <Text style={styles.Text_27_2460}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2461}>
                      <Text style={styles.Text_27_2461}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2462}>
                    <View style={styles.View_27_2463}>
                      <Text style={styles.Text_27_2463}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2464}>
                    <View style={styles.View_27_2465}>
                      <Text style={styles.Text_27_2465}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2466}>
                  <View style={styles.View_27_2467}>
                    <Text style={styles.Text_27_2467}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2468}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2468_140_9425}
                    />
                    <View style={styles.View_I27_2468_26_7539}>
                      <Text style={styles.Text_I27_2468_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2468_140_9453}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2469}>
              <View style={styles.View_27_2470}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2471}
                />
                <View style={styles.View_27_2472}>
                  <View style={styles.View_27_2473} />
                  <View style={styles.View_27_2474}>
                    <View style={styles.View_27_2475} />
                    <View style={styles.View_27_2476} />
                  </View>
                </View>
                <View style={styles.View_27_2477}>
                  <View style={styles.View_I27_2477_36_9152}>
                    <Text style={styles.Text_I27_2477_36_9152}>9:41 AM</Text>
                  </View>
                  <View style={styles.View_I27_2477_36_9153}>
                    <View style={styles.View_I27_2477_36_9154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                        }}
                        style={styles.ImageBackground_I27_2477_36_9155}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                        }}
                        style={styles.ImageBackground_I27_2477_36_9158}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                        }}
                        style={styles.ImageBackground_I27_2477_36_9159}
                      />
                    </View>
                    <View style={styles.View_I27_2477_36_9160}>
                      <Text style={styles.Text_I27_2477_36_9160}>100%</Text>
                    </View>
                    <View style={styles.View_I27_2477_36_9161}>
                      <View style={styles.View_I27_2477_36_9162}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                          }}
                          style={styles.ImageBackground_I27_2477_36_9163}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                          }}
                          style={styles.ImageBackground_I27_2477_36_9166}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                          }}
                          style={styles.ImageBackground_I27_2477_36_9167}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I27_2477_36_9168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                        }}
                        style={styles.ImageBackground_I27_2477_36_9169}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I27_2477_36_9173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                      }}
                      style={styles.ImageBackground_I27_2477_36_9174}
                    />
                    <View style={styles.View_I27_2477_36_9180}>
                      <Text style={styles.Text_I27_2477_36_9180}>Figma</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                      }}
                      style={styles.ImageBackground_I27_2477_36_9181}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2478}>
                <View style={styles.View_27_2479}>
                  <View style={styles.View_27_2480}>
                    <View style={styles.View_27_2481}>
                      <Text style={styles.Text_27_2481}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2482}>
                      <Text style={styles.Text_27_2482}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2483}>
                    <View style={styles.View_27_2484}>
                      <Text style={styles.Text_27_2484}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2485}>
                    <View style={styles.View_27_2486}>
                      <Text style={styles.Text_27_2486}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2487}>
                  <View style={styles.View_27_2488}>
                    <Text style={styles.Text_27_2488}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2489}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2489_140_9425}
                    />
                    <View style={styles.View_I27_2489_26_7539}>
                      <Text style={styles.Text_I27_2489_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2489_140_9453}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2490}>
              <View style={styles.View_27_2491}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I27_2491_36_7726}
                />
                <View style={styles.View_I27_2491_36_7731}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I27_2491_36_7732}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I27_2491_36_7736}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I27_2491_36_7740}
                  />
                </View>
                <View style={styles.View_I27_2491_36_7747}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I27_2491_36_7748}
                  />
                </View>
              </View>
              <View style={styles.View_27_2492}>
                <View style={styles.View_27_2493}>
                  <View style={styles.View_27_2494}>
                    <Text style={styles.Text_27_2494}>􀆉</Text>
                  </View>
                  <View style={styles.View_27_2495}>
                    <Text style={styles.Text_27_2495}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2496}>
                  <View style={styles.View_27_2497}>
                    <Text style={styles.Text_27_2497}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2498}>
                  <View style={styles.View_27_2499}>
                    <Text style={styles.Text_27_2499}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2500}>
              <View style={styles.View_27_2501}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2502}
                />
                <View style={styles.View_27_2503}>
                  <View style={styles.View_27_2504} />
                  <View style={styles.View_27_2505}>
                    <View style={styles.View_27_2506} />
                    <View style={styles.View_27_2507} />
                  </View>
                </View>
                <View style={styles.View_27_2508}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I27_2508_36_7726}
                  />
                  <View style={styles.View_I27_2508_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I27_2508_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I27_2508_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I27_2508_36_7740}
                    />
                  </View>
                  <View style={styles.View_I27_2508_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I27_2508_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2509}>
                <View style={styles.View_27_2510}>
                  <View style={styles.View_27_2511}>
                    <Text style={styles.Text_27_2511}>􀆉</Text>
                  </View>
                  <View style={styles.View_27_2512}>
                    <Text style={styles.Text_27_2512}>Left Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2513}>
                  <View style={styles.View_27_2514}>
                    <Text style={styles.Text_27_2514}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_27_2515}>
                  <View style={styles.View_27_2516}>
                    <Text style={styles.Text_27_2516}>Right Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2517}>
              <View style={styles.View_27_2518}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I27_2518_36_7726}
                />
                <View style={styles.View_I27_2518_36_7731}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I27_2518_36_7732}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I27_2518_36_7736}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I27_2518_36_7740}
                  />
                </View>
                <View style={styles.View_I27_2518_36_7747}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I27_2518_36_7748}
                  />
                </View>
              </View>
              <View style={styles.View_27_2519}>
                <View style={styles.View_27_2520}>
                  <View style={styles.View_27_2521}>
                    <View style={styles.View_27_2522}>
                      <Text style={styles.Text_27_2522}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2523}>
                      <Text style={styles.Text_27_2523}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2524}>
                    <View style={styles.View_27_2525}>
                      <Text style={styles.Text_27_2525}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2526}>
                    <View style={styles.View_27_2527}>
                      <Text style={styles.Text_27_2527}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2528}>
                  <View style={styles.View_27_2529}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2529_140_9425}
                    />
                    <View style={styles.View_I27_2529_26_7539}>
                      <Text style={styles.Text_I27_2529_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2529_140_9453}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2530}>
              <View style={styles.View_27_2531}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2532}
                />
                <View style={styles.View_27_2533}>
                  <View style={styles.View_27_2534} />
                  <View style={styles.View_27_2535}>
                    <View style={styles.View_27_2536} />
                    <View style={styles.View_27_2537} />
                  </View>
                </View>
                <View style={styles.View_27_2538}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I27_2538_36_7726}
                  />
                  <View style={styles.View_I27_2538_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I27_2538_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I27_2538_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I27_2538_36_7740}
                    />
                  </View>
                  <View style={styles.View_I27_2538_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I27_2538_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2539}>
                <View style={styles.View_27_2540}>
                  <View style={styles.View_27_2541}>
                    <View style={styles.View_27_2542}>
                      <Text style={styles.Text_27_2542}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2543}>
                      <Text style={styles.Text_27_2543}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2544}>
                    <View style={styles.View_27_2545}>
                      <Text style={styles.Text_27_2545}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2546}>
                    <View style={styles.View_27_2547}>
                      <Text style={styles.Text_27_2547}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2548}>
                  <View style={styles.View_27_2549}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2549_140_9425}
                    />
                    <View style={styles.View_I27_2549_26_7539}>
                      <Text style={styles.Text_I27_2549_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2549_140_9453}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2550}>
              <View style={styles.View_27_2551}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I27_2551_36_7726}
                />
                <View style={styles.View_I27_2551_36_7731}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I27_2551_36_7732}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I27_2551_36_7736}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I27_2551_36_7740}
                  />
                </View>
                <View style={styles.View_I27_2551_36_7747}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I27_2551_36_7748}
                  />
                </View>
              </View>
              <View style={styles.View_27_2552}>
                <View style={styles.View_27_2553}>
                  <View style={styles.View_27_2554}>
                    <View style={styles.View_27_2555}>
                      <Text style={styles.Text_27_2555}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2556}>
                      <Text style={styles.Text_27_2556}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2557}>
                    <View style={styles.View_27_2558}>
                      <Text style={styles.Text_27_2558}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2559}>
                    <View style={styles.View_27_2560}>
                      <Text style={styles.Text_27_2560}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2561}>
                  <View style={styles.View_27_2562}>
                    <Text style={styles.Text_27_2562}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2563}>
              <View style={styles.View_27_2565}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2566}
                />
                <View style={styles.View_27_2567}>
                  <View style={styles.View_27_2568} />
                  <View style={styles.View_27_2569}>
                    <View style={styles.View_27_2570} />
                    <View style={styles.View_27_2571} />
                  </View>
                </View>
                <View style={styles.View_27_2572}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I27_2572_36_7726}
                  />
                  <View style={styles.View_I27_2572_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I27_2572_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I27_2572_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I27_2572_36_7740}
                    />
                  </View>
                  <View style={styles.View_I27_2572_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I27_2572_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2573}>
                <View style={styles.View_27_2574}>
                  <View style={styles.View_27_2575}>
                    <View style={styles.View_27_2576}>
                      <Text style={styles.Text_27_2576}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2577}>
                      <Text style={styles.Text_27_2577}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2578}>
                    <View style={styles.View_27_2579}>
                      <Text style={styles.Text_27_2579}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2580}>
                    <View style={styles.View_27_2581}>
                      <Text style={styles.Text_27_2581}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2582}>
                  <View style={styles.View_27_2583}>
                    <Text style={styles.Text_27_2583}>Large Title</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2584}>
              <View style={styles.View_27_2585}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I27_2585_36_7726}
                />
                <View style={styles.View_I27_2585_36_7731}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I27_2585_36_7732}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I27_2585_36_7736}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I27_2585_36_7740}
                  />
                </View>
                <View style={styles.View_I27_2585_36_7747}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I27_2585_36_7748}
                  />
                </View>
              </View>
              <View style={styles.View_27_2586}>
                <View style={styles.View_27_2587}>
                  <View style={styles.View_27_2588}>
                    <View style={styles.View_27_2589}>
                      <Text style={styles.Text_27_2589}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2590}>
                      <Text style={styles.Text_27_2590}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2591}>
                    <View style={styles.View_27_2592}>
                      <Text style={styles.Text_27_2592}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2593}>
                    <View style={styles.View_27_2594}>
                      <Text style={styles.Text_27_2594}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2595}>
                  <View style={styles.View_27_2596}>
                    <Text style={styles.Text_27_2596}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2597}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2597_140_9425}
                    />
                    <View style={styles.View_I27_2597_26_7539}>
                      <Text style={styles.Text_I27_2597_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2597_140_9453}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_27_2598}>
              <View style={styles.View_27_2600}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879e/305b/1367a305556f90413cc6170fb853e263"
                  }}
                  style={styles.ImageBackground_27_2601}
                />
                <View style={styles.View_27_2602}>
                  <View style={styles.View_27_2603} />
                  <View style={styles.View_27_2604}>
                    <View style={styles.View_27_2605} />
                    <View style={styles.View_27_2606} />
                  </View>
                </View>
                <View style={styles.View_27_2607}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I27_2607_36_7726}
                  />
                  <View style={styles.View_I27_2607_36_7731}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I27_2607_36_7732}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I27_2607_36_7736}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I27_2607_36_7740}
                    />
                  </View>
                  <View style={styles.View_I27_2607_36_7747}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I27_2607_36_7748}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_27_2608}>
                <View style={styles.View_27_2609}>
                  <View style={styles.View_27_2610}>
                    <View style={styles.View_27_2611}>
                      <Text style={styles.Text_27_2611}>􀆉</Text>
                    </View>
                    <View style={styles.View_27_2612}>
                      <Text style={styles.Text_27_2612}>Left Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2613}>
                    <View style={styles.View_27_2614}>
                      <Text style={styles.Text_27_2614}>Title</Text>
                    </View>
                  </View>
                  <View style={styles.View_27_2615}>
                    <View style={styles.View_27_2616}>
                      <Text style={styles.Text_27_2616}>Right Title</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_27_2617}>
                  <View style={styles.View_27_2618}>
                    <Text style={styles.Text_27_2618}>Large Title</Text>
                  </View>
                  <View style={styles.View_27_2619}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/3855/91d9e49401284c2df245c53c7937f510"
                      }}
                      style={styles.ImageBackground_I27_2619_140_9425}
                    />
                    <View style={styles.View_I27_2619_26_7539}>
                      <Text style={styles.Text_I27_2619_26_7539}>Search</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                      }}
                      style={styles.ImageBackground_I27_2619_140_9453}
                    />
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
  View_2: { height: hp("930.1912568306012%") },
  View_140_5507: {
    width: wp("89.12489379779099%"),
    minWidth: wp("89.12489379779099%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104503%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_1: {
    flexGrow: 1,
    width: wp("89.12489379779099%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_1_5_19: {
    flexGrow: 1,
    width: wp("89.12489379779099%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_1_5_20: {
    width: wp("53.355989804587935%"),
    minWidth: wp("53.355989804587935%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_1_5_21: {
    width: wp("4.7578589634664405%"),
    minWidth: wp("4.7578589634664405%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I26_1_5_22: {
    width: wp("45.879354290569246%"),
    minWidth: wp("45.879354290569246%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.476635514018693%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I26_1_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_1_5_23: {
    width: wp("33.050127442650805%"),
    minWidth: wp("33.050127442650805%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.074766355140184%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I26_1_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I26_1_5_24: {
    flexGrow: 1,
    width: wp("89.12489379779099%"),
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
  ImageBackground_140_5530: {
    width: wp("4.7578589634664405%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_26_2: {
    width: wp("89.12489379779099%"),
    minWidth: wp("89.12489379779099%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104503%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2_10_2304: {
    flexGrow: 1,
    width: wp("6.032285471537808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I26_2_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2_10_2303: {
    flexGrow: 1,
    width: wp("89.12489379779099%"),
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
  View_26_3: {
    width: wp("49.61767204757859%"),
    minWidth: wp("49.61767204757859%"),
    height: hp("67.75956284153006%"),
    minHeight: hp("67.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104503%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_4: {
    width: wp("11.724723874256584%"),
    minWidth: wp("11.724723874256584%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_5: {
    width: wp("49.61767204757859%"),
    minWidth: wp("49.61767204757859%"),
    height: hp("60.10928961748634%"),
    minHeight: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_26_6: {
    width: wp("12.31945624468989%"),
    minWidth: wp("12.31945624468989%"),
    height: hp("49.72677595628415%"),
    minHeight: hp("49.72677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.2982158028887%"),
    top: hp("5.191256830601098%")
  },
  View_26_7: {
    width: wp("12.31945624468989%"),
    minWidth: wp("12.31945624468989%"),
    height: hp("49.72677595628415%"),
    minHeight: hp("49.72677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_8: {
    width: wp("11.554800339847068%"),
    minWidth: wp("11.554800339847068%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_7567: {
    width: wp("10.790144435004247%"),
    minWidth: wp("10.790144435004247%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338791%"),
    justifyContent: "center"
  },
  Text_26_7567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_7568: {
    width: wp("12.31945624468989%"),
    minWidth: wp("12.31945624468989%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.57923497267759%"),
    justifyContent: "center"
  },
  Text_26_7568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_7569: {
    width: wp("10.790144435004247%"),
    minWidth: wp("10.790144435004247%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.868852459016388%"),
    justifyContent: "center"
  },
  Text_26_7569: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_7570: {
    width: wp("10.025488530161427%"),
    minWidth: wp("10.025488530161427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.158469945355186%"),
    justifyContent: "center"
  },
  Text_26_7570: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_7571: {
    width: wp("11.554800339847068%"),
    minWidth: wp("11.554800339847068%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.44808743169397%"),
    justifyContent: "center"
  },
  Text_26_7571: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_18: {
    width: wp("34.57943925233645%"),
    minWidth: wp("34.57943925233645%"),
    height: hp("60.10928961748634%"),
    minHeight: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_523: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031352%")
  },
  View_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581833%")
  },
  View_26_528: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("13.661202185792348%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_529: {
    flexGrow: 1,
    width: wp("23.44944774851317%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I26_529_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031352%")
  },
  View_I26_529_26_525: {
    flexGrow: 1,
    width: wp("18.733322934367035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_I26_529_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I26_529_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.760500743415463%"),
    top: hp("1.2513207607581904%")
  },
  View_26_530: {
    flexGrow: 1,
    width: wp("4.502973661852167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.638912489379777%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "center"
  },
  Text_26_530: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_531: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7498: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_140_9423: {
    width: wp("1.327983950191164%"),
    minWidth: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031352%")
  },
  View_26_7503: {
    width: wp("24.42576133708581%"),
    minWidth: wp("24.42576133708581%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_7502: {
    width: wp("21.49532710280374%"),
    minWidth: wp("21.49532710280374%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.6830601092896131%"),
    resizeMode: "cover"
  },
  ImageBackground_140_9424: {
    width: wp("1.0092113822217503%"),
    minWidth: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581904%")
  },
  View_26_7537: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("32.240437158469945%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031352%")
  },
  View_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581904%")
  },
  View_26_7541: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7542: {
    flexGrow: 1,
    width: wp("23.44944774851317%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I26_7542_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031352%")
  },
  View_I26_7542_26_525: {
    flexGrow: 1,
    width: wp("18.733322934367035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_I26_7542_26_525: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I26_7542_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.760500743415463%"),
    top: hp("1.2513207607582046%")
  },
  View_26_7543: {
    flexGrow: 1,
    width: wp("4.502973661852167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.638912489379777%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "center"
  },
  Text_26_7543: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_7544: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("50.81967213114754%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7545: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_140_9481: {
    width: wp("1.327983950191164%"),
    minWidth: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031352%")
  },
  View_26_7547: {
    width: wp("24.42576133708581%"),
    minWidth: wp("24.42576133708581%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_7548: {
    width: wp("21.49532710280374%"),
    minWidth: wp("21.49532710280374%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.6830601092896273%")
  },
  ImageBackground_140_9482: {
    width: wp("1.0092113822217503%"),
    minWidth: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607582046%")
  },
  View_26_101: {
    width: wp("89.12489379779099%"),
    minWidth: wp("89.12489379779099%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104503%"),
    top: hp("123.36065573770492%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_101_10_2311: {
    flexGrow: 1,
    width: wp("9.515717926932881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I26_101_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_101_10_2312: {
    flexGrow: 1,
    width: wp("89.12489379779099%"),
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
  View_26_102: {
    width: wp("89.12489379779099%"),
    minWidth: wp("89.12489379779099%"),
    height: hp("780.8743169398907%"),
    minHeight: hp("780.8743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104503%"),
    top: hp("140.5737704918033%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_103: {
    width: wp("13.678844519966017%"),
    minWidth: wp("13.678844519966017%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_104: {
    width: wp("89.12489379779099%"),
    minWidth: wp("89.12489379779099%"),
    height: hp("773.2240437158471%"),
    minHeight: hp("773.2240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_26_105: {
    width: wp("49.10790144435004%"),
    minWidth: wp("49.10790144435004%"),
    height: hp("748.4972677595629%"),
    minHeight: hp("748.4972677595629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.01699235344095%"),
    top: hp("7.786885245901658%")
  },
  View_26_106: {
    width: wp("49.10790144435004%"),
    minWidth: wp("49.10790144435004%"),
    height: hp("748.4972677595629%"),
    minHeight: hp("748.4972677595629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_108: {
    width: wp("25.318606627017843%"),
    minWidth: wp("25.318606627017843%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16317: {
    width: wp("36.10875106202209%"),
    minWidth: wp("36.10875106202209%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234944%"),
    justifyContent: "center"
  },
  Text_26_16317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16318: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.92896174863387%"),
    justifyContent: "center"
  },
  Text_26_16318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16319: {
    width: wp("39.932030586236195%"),
    minWidth: wp("39.932030586236195%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.56284153005461%"),
    justifyContent: "center"
  },
  Text_26_16319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16320: {
    width: wp("28.377230246389125%"),
    minWidth: wp("28.377230246389125%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.06010928961746%"),
    justifyContent: "center"
  },
  Text_26_16320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16321: {
    width: wp("46.04927782497876%"),
    minWidth: wp("46.04927782497876%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107.78688524590163%"),
    justifyContent: "center"
  },
  Text_26_16321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16322: {
    width: wp("35.34409515717927%"),
    minWidth: wp("35.34409515717927%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("134.2896174863388%"),
    justifyContent: "center"
  },
  Text_26_16322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16323: {
    width: wp("46.04927782497876%"),
    minWidth: wp("46.04927782497876%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("162.56830601092898%"),
    justifyContent: "center"
  },
  Text_26_16323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16324: {
    width: wp("28.377230246389125%"),
    minWidth: wp("28.377230246389125%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("186.4754098360656%"),
    justifyContent: "center"
  },
  Text_26_16324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16325: {
    width: wp("39.167374681393376%"),
    minWidth: wp("39.167374681393376%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("204.3715846994535%"),
    justifyContent: "center"
  },
  Text_26_16325: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16326: {
    width: wp("32.285471537807986%"),
    minWidth: wp("32.285471537807986%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("225.95628415300544%"),
    justifyContent: "center"
  },
  Text_26_16326: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_16327: {
    width: wp("42.99065420560748%"),
    minWidth: wp("42.99065420560748%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("251.2295081967213%"),
    justifyContent: "center"
  },
  Text_26_16327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_17480: {
    width: wp("31.520815632965167%"),
    minWidth: wp("31.520815632965167%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("276.3661202185792%"),
    justifyContent: "center"
  },
  Text_26_17480: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_17481: {
    width: wp("42.22599830076466%"),
    minWidth: wp("42.22599830076466%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("303.00546448087425%"),
    justifyContent: "center"
  },
  Text_26_17481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_17483: {
    width: wp("38.40271877655056%"),
    minWidth: wp("38.40271877655056%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("331.14754098360663%"),
    justifyContent: "center"
  },
  Text_26_17483: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_17484: {
    width: wp("49.10790144435004%"),
    minWidth: wp("49.10790144435004%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("360.792349726776%"),
    justifyContent: "center"
  },
  Text_26_17484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3428: {
    width: wp("24.55395072217502%"),
    minWidth: wp("24.55395072217502%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("384.4262295081967%"),
    justifyContent: "center"
  },
  Text_27_3428: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3429: {
    width: wp("35.34409515717927%"),
    minWidth: wp("35.34409515717927%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("400.5464480874317%"),
    justifyContent: "center"
  },
  Text_27_3429: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3430: {
    width: wp("28.377230246389125%"),
    minWidth: wp("28.377230246389125%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("420.3551912568306%"),
    justifyContent: "center"
  },
  Text_27_3430: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3431: {
    width: wp("39.167374681393376%"),
    minWidth: wp("39.167374681393376%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("443.9890710382514%"),
    justifyContent: "center"
  },
  Text_27_3431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3432: {
    width: wp("27.612574341546303%"),
    minWidth: wp("27.612574341546303%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("467.48633879781426%"),
    justifyContent: "center"
  },
  Text_27_3432: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3433: {
    width: wp("45.28462192013593%"),
    minWidth: wp("45.28462192013593%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("492.21311475409846%"),
    justifyContent: "center"
  },
  Text_27_3433: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3434: {
    width: wp("34.57943925233645%"),
    minWidth: wp("34.57943925233645%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("518.7158469945356%"),
    justifyContent: "center"
  },
  Text_27_3434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3435: {
    width: wp("45.28462192013593%"),
    minWidth: wp("45.28462192013593%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("546.9945355191256%"),
    justifyContent: "center"
  },
  Text_27_3435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3436: {
    width: wp("27.612574341546303%"),
    minWidth: wp("27.612574341546303%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("570.9016393442623%"),
    justifyContent: "center"
  },
  Text_27_3436: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3437: {
    width: wp("38.40271877655056%"),
    minWidth: wp("38.40271877655056%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("588.7978142076503%"),
    justifyContent: "center"
  },
  Text_27_3437: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3438: {
    width: wp("31.520815632965167%"),
    minWidth: wp("31.520815632965167%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("610.3825136612022%"),
    justifyContent: "center"
  },
  Text_27_3438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3439: {
    width: wp("42.22599830076466%"),
    minWidth: wp("42.22599830076466%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("635.6557377049181%"),
    justifyContent: "center"
  },
  Text_27_3439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3440: {
    width: wp("30.671197960917585%"),
    minWidth: wp("30.671197960917585%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("660.7923497267759%"),
    justifyContent: "center"
  },
  Text_27_3440: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3441: {
    width: wp("41.46134239592183%"),
    minWidth: wp("41.46134239592183%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("687.4316939890712%"),
    justifyContent: "center"
  },
  Text_27_3441: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3442: {
    width: wp("37.63806287170773%"),
    minWidth: wp("37.63806287170773%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("715.5737704918033%"),
    justifyContent: "center"
  },
  Text_27_3442: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_3443: {
    width: wp("48.34324553950722%"),
    minWidth: wp("48.34324553950722%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("745.2185792349727%"),
    justifyContent: "center"
  },
  Text_27_3443: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_109: {
    width: wp("37.2982158028887%"),
    minWidth: wp("37.2982158028887%"),
    height: hp("773.2240437158471%"),
    minHeight: hp("773.2240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_7856: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_7857: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I26_7857_5_3053: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_I26_7857_5_3053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_7857_5_3054: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.4098360655737565%")
  },
  View_I26_7857_5_3055: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278687826%")
  },
  ImageBackground_I26_7857_5_3056: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_7857_5_3059: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.450792990095664%")
  },
  ImageBackground_I26_7857_5_3060: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437158566%")
  },
  View_I26_7857_5_3061: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.0409902770662427%"),
    justifyContent: "flex-start"
  },
  Text_I26_7857_5_3061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_7857_5_3062: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_7857_5_3063: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I26_7857_5_3064: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05191323535689207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I26_7857_5_3067: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_7857_5_3068: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I26_7857_5_3069: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_7857_5_3070: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529714448855941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I26_7857_5_3074: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_7857_5_3075: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_7857_5_3081: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_7857_5_3081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I26_7857_5_3082: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_26_7858: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7859: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7860: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_26_7860: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_7861: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_7861: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_7862: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7863: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_7863: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_7864: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7865: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_7865: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_12726: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("18.852459016393453%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_12874: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_12875: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.644808743169392%")
  },
  View_26_12876: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_12877: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_26_12878: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169392%")
  },
  View_26_12879: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_12880: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_12881: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_12881_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_I26_12881_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_12881_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.4098360655737565%")
  },
  View_I26_12881_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278687826%")
  },
  ImageBackground_I26_12881_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_12881_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.45079299009563556%")
  },
  ImageBackground_I26_12881_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437158566%")
  },
  View_I26_12881_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.04099027706627112%"),
    justifyContent: "flex-start"
  },
  Text_I26_12881_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_12881_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_12881_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I26_12881_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05191323535689207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I26_12881_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_12881_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I26_12881_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_12881_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529714448855941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I26_12881_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_12881_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_12881_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_12881_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I26_12881_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_26_12728: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12729: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12730: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_26_12730: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_12731: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "center"
  },
  Text_26_12731: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_12732: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.2295081967213264%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12733: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_12733: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_12734: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12735: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "center"
  },
  Text_26_12735: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_7866: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("36.61202185792351%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_7867: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I26_7867_5_3053: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_I26_7867_5_3053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_7867_5_3054: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.4098360655737565%")
  },
  View_I26_7867_5_3055: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_I26_7867_5_3056: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_7867_5_3059: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.45079299009560714%")
  },
  ImageBackground_I26_7867_5_3060: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437158282%")
  },
  View_I26_7867_5_3061: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.04099027706627112%"),
    justifyContent: "flex-start"
  },
  Text_I26_7867_5_3061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_7867_5_3062: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_7867_5_3063: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.341530054644835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I26_7867_5_3064: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051896559084667615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I26_7867_5_3067: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_7867_5_3068: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I26_7867_5_3069: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_7867_5_3070: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861339807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I26_7867_5_3074: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_7867_5_3075: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_7867_5_3081: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_7867_5_3081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I26_7867_5_3082: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_26_7868: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7869: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7870: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7871: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_26_7871: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_7872: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792547%"),
    justifyContent: "center"
  },
  Text_26_7872: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_7873: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7874: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_7874: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_7875: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7876: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792547%"),
    justifyContent: "center"
  },
  Text_26_7876: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_7877: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896188%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_7878: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I26_7878_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031494%")
  },
  View_I26_7878_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_I26_7878_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I26_7878_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_26_13069: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("58.46994535519124%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_13070: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_13071: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.6448087431694205%")
  },
  View_26_13072: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_13073: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_26_13074: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.6448087431694205%")
  },
  View_26_13075: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_13076: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_13077: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_13077_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557378494%"),
    justifyContent: "flex-start"
  },
  Text_I26_13077_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_13077_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557378494%")
  },
  View_I26_13077_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_I26_13077_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_13077_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.45079299009560714%")
  },
  ImageBackground_I26_13077_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437158566%")
  },
  View_I26_13077_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.0409902770662427%"),
    justifyContent: "flex-start"
  },
  Text_I26_13077_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_13077_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_13077_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I26_13077_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908472446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I26_13077_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_13077_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I26_13077_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_13077_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861336965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I26_13077_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557378494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_13077_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_13077_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_13077_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I26_13077_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_26_13121: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759586%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13122: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13123: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13124: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.229508196721298%"),
    justifyContent: "flex-start"
  },
  Text_26_13124: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_13125: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185791979%"),
    justifyContent: "center"
  },
  Text_26_13125: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_13126: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13127: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_13127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_13128: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13129: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185791979%"),
    justifyContent: "center"
  },
  Text_26_13129: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_13130: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13131: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I26_13131_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031494%")
  },
  View_I26_13131_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_I26_13131_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I26_13131_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607582046%")
  },
  View_26_12749: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("83.87978142076503%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_12750: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I26_12750_5_3053: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_I26_12750_5_3053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_12750_5_3054: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.4098360655737565%")
  },
  View_I26_12750_5_3055: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_I26_12750_5_3056: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_12750_5_3059: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.45079299009563556%")
  },
  ImageBackground_I26_12750_5_3060: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437158566%")
  },
  View_I26_12750_5_3061: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.0409902770662427%"),
    justifyContent: "flex-start"
  },
  Text_I26_12750_5_3061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_12750_5_3062: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_12750_5_3063: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I26_12750_5_3064: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908472446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I26_12750_5_3067: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_12750_5_3068: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I26_12750_5_3069: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_12750_5_3070: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861339807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I26_12750_5_3074: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_12750_5_3075: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_12750_5_3081: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_12750_5_3081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I26_12750_5_3082: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_26_12751: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12752: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12753: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12754: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213548%"),
    justifyContent: "flex-start"
  },
  Text_26_12754: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_12755: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792547%"),
    justifyContent: "center"
  },
  Text_26_12755: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_12756: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12757: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_12757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_12758: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12759: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792547%"),
    justifyContent: "center"
  },
  Text_26_12759: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_12760: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_12761: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_26_12761: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_26_13135: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("105.46448087431693%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_13136: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_13137: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.644808743169449%")
  },
  View_26_13138: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_13139: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_26_13140: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169449%")
  },
  View_26_13141: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_13142: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185791694%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_13143: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_13143_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557378494%"),
    justifyContent: "flex-start"
  },
  Text_I26_13143_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_13143_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557378494%")
  },
  View_I26_13143_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_I26_13143_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_13143_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.45079299009560714%")
  },
  ImageBackground_I26_13143_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437157998%")
  },
  View_I26_13143_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.0409902770662427%"),
    justifyContent: "flex-start"
  },
  Text_I26_13143_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_13143_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_13143_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I26_13143_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051896559084667615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I26_13143_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_13143_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I26_13143_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_13143_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861336965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I26_13143_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557378494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_13143_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_13143_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_13143_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I26_13143_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_26_13193: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759615%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13194: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13195: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13196: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967212695%"),
    justifyContent: "flex-start"
  },
  Text_26_13196: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_13197: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185791694%"),
    justifyContent: "center"
  },
  Text_26_13197: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_13198: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185791694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13199: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_13199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_13200: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13201: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185791694%"),
    justifyContent: "center"
  },
  Text_26_13201: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_13202: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_13203: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_26_13203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2077: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("130.60109289617483%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_27_2078: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I27_2078_5_3053: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557381336%"),
    justifyContent: "flex-start"
  },
  Text_I27_2078_5_3053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2078_5_3054: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557381336%")
  },
  View_I27_2078_5_3055: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278684984%")
  },
  ImageBackground_I27_2078_5_3056: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2078_5_3059: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900956924%")
  },
  ImageBackground_I27_2078_5_3060: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437158566%")
  },
  View_I27_2078_5_3061: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.04099027706627112%"),
    justifyContent: "flex-start"
  },
  Text_I27_2078_5_3061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2078_5_3062: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2078_5_3063: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2078_5_3064: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908469604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2078_5_3067: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2078_5_3068: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2078_5_3069: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2078_5_3070: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861336965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2078_5_3074: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557381336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2078_5_3075: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2078_5_3081: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2078_5_3081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2078_5_3082: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2079: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2080: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2081: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2082: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2082: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2083: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2083: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2084: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2085: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2085: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2086: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2087: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2087: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2088: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2089: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2089: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2090: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754088%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I27_2090_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031778%")
  },
  View_I27_2090_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_I27_2090_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2090_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_27_2128: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("158.46994535519124%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_27_2129: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2130: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.644808743169449%")
  },
  View_27_2131: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2132: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2133: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169449%")
  },
  View_27_2134: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2135: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2136: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2136_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_I27_2136_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2136_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.4098360655737565%")
  },
  View_I27_2136_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_I27_2136_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2136_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.45079299009563556%")
  },
  ImageBackground_I27_2136_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437158566%")
  },
  View_I27_2136_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.04099027706627112%"),
    justifyContent: "flex-start"
  },
  Text_I27_2136_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2136_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2136_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2136_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908475288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2136_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2136_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2136_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2136_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686134265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2136_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2136_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2136_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2136_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2136_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2137: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759615%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2138: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2139: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2140: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967212695%"),
    justifyContent: "flex-start"
  },
  Text_27_2140: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2141: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185791694%"),
    justifyContent: "center"
  },
  Text_27_2141: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2142: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185791694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2143: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2144: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2145: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185791694%"),
    justifyContent: "center"
  },
  Text_27_2145: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2183: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2184: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2185: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754088%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I27_2185_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.381162216103121%")
  },
  View_I27_2185_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I27_2185_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2185_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_26_8061: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("189.89071038251367%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_8062: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_8062_5_3003: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_I26_8062_5_3008: {
    flexGrow: 1,
    width: wp("5.663655426103176%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("2.367563716700829%")
  },
  ImageBackground_I26_8062_5_3009: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("0.0003668779883696516%")
  },
  ImageBackground_I26_8062_140_7963: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("0%")
  },
  ImageBackground_I26_8062_140_8168: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109287226%")
  },
  View_I26_8062_5_3024: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I26_8062_5_3025: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_8063: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8064: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8065: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_26_8065: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_8066: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_8066: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_8067: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8068: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_8068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_8069: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8070: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_8070: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_10150: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("206.2841530054645%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_10685: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_10686: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032762%")
  },
  View_26_10687: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_10688: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_26_10689: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%")
  },
  View_26_10690: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_10691: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_10692: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_10692_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_I26_10692_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_I26_10692_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_I26_10692_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418374593%")
  },
  ImageBackground_I26_10692_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I26_10692_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I26_10692_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_10152: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10153: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10154: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_26_10154: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_10155: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_10155: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_10156: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10157: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_10157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_10158: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10159: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_10159: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_8163: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("225.68306010928964%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_8164: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_8164_5_3003: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_I26_8164_5_3008: {
    flexGrow: 1,
    width: wp("5.663655426103176%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("2.367563716700829%")
  },
  ImageBackground_I26_8164_5_3009: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("0.0003668779883696516%")
  },
  ImageBackground_I26_8164_140_7963: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("0%")
  },
  ImageBackground_I26_8164_140_8168: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109287226%")
  },
  View_I26_8164_5_3024: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295026%")
  },
  ImageBackground_I26_8164_5_3025: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_8197: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8990: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8991: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8992: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967212695%"),
    justifyContent: "flex-start"
  },
  Text_26_8992: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_8993: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_8993: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_8994: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8995: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_8995: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_8996: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8997: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_8997: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_8198: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896188%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8199: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I26_8199_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.381162216103121%")
  },
  View_I26_8199_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I26_8199_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I26_8199_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_26_10110: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("249.45355191256832%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_10275: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_10276: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032819%")
  },
  View_26_10277: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_10278: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_26_10279: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_26_10280: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_10281: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_10282: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_10282_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_I26_10282_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748634265%")
  },
  ImageBackground_I26_10282_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_I26_10282_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418374025%")
  },
  ImageBackground_I26_10282_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429302748%")
  },
  View_I26_10282_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I26_10282_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_10112: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10113: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10114: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10115: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213832%"),
    justifyContent: "flex-start"
  },
  Text_26_10115: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_10116: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792831%"),
    justifyContent: "center"
  },
  Text_26_10116: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_10117: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10118: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_10118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_10119: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10120: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792831%"),
    justifyContent: "center"
  },
  Text_26_10120: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_10121: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896245%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_10122: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I26_10122_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811622161031778%")
  },
  View_I26_10122_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_I26_10122_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I26_10122_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.251320760758233%")
  },
  View_26_8297: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("276.2295081967213%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_8298: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_8298_5_3003: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I26_8298_5_3008: {
    flexGrow: 1,
    width: wp("5.663655426103176%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("2.367563716700886%")
  },
  ImageBackground_I26_8298_5_3009: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("0.00036687798831280816%")
  },
  ImageBackground_I26_8298_140_7963: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("0%")
  },
  ImageBackground_I26_8298_140_8168: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109287226%")
  },
  View_I26_8298_5_3024: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I26_8298_5_3025: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_8299: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8998: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8999: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9000: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967212127%"),
    justifyContent: "flex-start"
  },
  Text_26_9000: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_9001: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_9001: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_9002: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9003: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_9003: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_9004: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9005: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_26_9005: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_8308: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_8337: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_26_8337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_26_9583: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("299.7267759562841%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_26_9620: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_26_9621: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032819%")
  },
  View_26_9622: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_9623: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_26_9624: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_26_9625: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_9626: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_26_9654: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_9654_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I26_9654_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748634833%")
  },
  ImageBackground_I26_9654_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.2750344198257721%")
  },
  ImageBackground_I26_9654_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418374025%")
  },
  ImageBackground_I26_9654_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I26_9654_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I26_9654_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_9585: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338841%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9586: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9587: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9588: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_26_9588: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_26_9589: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792831%"),
    justifyContent: "center"
  },
  Text_26_9589: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_9590: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9591: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_26_9591: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_9592: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9593: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792831%"),
    justifyContent: "center"
  },
  Text_26_9593: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_26_9594: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_9595: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_26_9595: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2243: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("326.2295081967213%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_27_2244: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2244_5_3003: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I27_2244_5_3008: {
    flexGrow: 1,
    width: wp("5.663655426103176%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("2.367563716700886%")
  },
  ImageBackground_I27_2244_5_3009: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("0.0003335254439775781%")
  },
  ImageBackground_I27_2244_140_7963: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("0%")
  },
  ImageBackground_I27_2244_140_8168: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109287226%")
  },
  View_I27_2244_5_3024: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I27_2244_5_3025: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2245: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2246: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2247: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2248: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967212127%"),
    justifyContent: "flex-start"
  },
  Text_27_2248: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2249: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2249: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2250: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2251: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2252: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2253: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2253: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2350: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2351: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2351: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2352: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754145%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I27_2352_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.381195568647513%")
  },
  View_I27_2352_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I27_2352_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2352_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_27_2280: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("356.0109289617486%"),
    backgroundColor: "rgba(249, 249, 249, 0.9399999976158142)"
  },
  View_27_2282: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2283: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032819%")
  },
  View_27_2284: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2285: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2286: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_27_2287: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2288: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185791694%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2289: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2289_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371591347%")
  },
  View_I27_2289_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_I27_2289_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275001067281437%")
  },
  ImageBackground_I27_2289_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418374593%")
  },
  ImageBackground_I27_2289_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I27_2289_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I27_2289_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2290: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2291: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2292: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2293: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2293: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2294: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2294: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2295: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2296: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2297: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2298: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2298: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2356: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2357: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2357: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2358: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754031%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)"
  },
  ImageBackground_I27_2358_140_9380: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811955686476267%")
  },
  View_I27_2358_26_525: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "flex-start"
  },
  Text_I27_2358_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2358_140_9337: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.25132076075829%")
  },
  View_27_2362: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("388.7978142076503%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2363: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2363_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557381336%"),
    justifyContent: "flex-start"
  },
  Text_I27_2363_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2363_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557381336%")
  },
  View_I27_2363_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278684984%")
  },
  ImageBackground_I27_2363_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2363_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900956924%")
  },
  ImageBackground_I27_2363_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.27322404371591347%")
  },
  View_I27_2363_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.040956924521879046%"),
    justifyContent: "flex-start"
  },
  Text_I27_2363_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2363_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2363_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546447497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2363_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908475288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2363_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2363_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2363_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2363_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686133128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2363_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557381336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2363_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2363_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2363_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2363_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2364: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2365: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2366: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2366: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2367: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2367: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2368: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2369: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2370: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2371: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2371: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2372: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("403.27868852459017%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2373: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2374: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.644808743169392%")
  },
  View_27_2375: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2376: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2377: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169392%")
  },
  View_27_2378: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2379: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2380: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2380_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557381336%"),
    justifyContent: "flex-start"
  },
  Text_I27_2380_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2380_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557381336%")
  },
  View_I27_2380_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278684984%")
  },
  ImageBackground_I27_2380_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2380_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900956924%")
  },
  ImageBackground_I27_2380_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437157998%")
  },
  View_I27_2380_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.040956924521879046%"),
    justifyContent: "flex-start"
  },
  Text_I27_2380_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2380_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2380_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546447497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2380_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908475288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2380_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2380_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2380_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2380_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686133128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2380_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557381336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2380_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2380_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2380_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2380_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2381: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2382: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2383: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.0928961748634265%"),
    justifyContent: "flex-start"
  },
  Text_27_2383: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2384: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "center"
  },
  Text_27_2384: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2385: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.2295081967213264%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2386: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2387: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2388: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "center"
  },
  Text_27_2388: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2389: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("421.0382513661202%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2390: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2390_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557381336%"),
    justifyContent: "flex-start"
  },
  Text_I27_2390_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2390_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557381336%")
  },
  View_I27_2390_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278684984%")
  },
  ImageBackground_I27_2390_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2390_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900956924%")
  },
  ImageBackground_I27_2390_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437157998%")
  },
  View_I27_2390_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.040956924521879046%"),
    justifyContent: "flex-start"
  },
  Text_I27_2390_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2390_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2390_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546447497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2390_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908475288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2390_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2390_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2390_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2390_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686133128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2390_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557381336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2390_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2390_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2390_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2390_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2391: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2392: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2393: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2394: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2394: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2395: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2395: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2396: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2397: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2397: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2398: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2399: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2399: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2400: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2401: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2401_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811955686476267%")
  },
  View_I27_2401_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "flex-start"
  },
  Text_I27_2401_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2401_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_27_2402: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("442.89617486338807%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2403: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2404: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.644808743169278%")
  },
  View_27_2405: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2406: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2407: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169278%")
  },
  View_27_2408: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2409: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.36612021857934%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2410: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2410_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557369967%"),
    justifyContent: "flex-start"
  },
  Text_I27_2410_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2410_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557369967%")
  },
  View_I27_2410_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278696352%")
  },
  ImageBackground_I27_2410_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2410_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900955787%")
  },
  ImageBackground_I27_2410_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437157998%")
  },
  View_I27_2410_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.040956924521879046%"),
    justifyContent: "flex-start"
  },
  Text_I27_2410_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2410_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2410_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2410_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908463919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2410_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2410_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2410_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2410_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686134265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2410_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557369967%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2410_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2410_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2410_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2410_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2411: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2412: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2413: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2414: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967212127%"),
    justifyContent: "flex-start"
  },
  Text_27_2414: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2415: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2415: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2416: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2417: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2418: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2419: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2419: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2420: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2421: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2421_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.381195568647513%")
  },
  View_I27_2421_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I27_2421_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2421_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_27_2422: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("468.30601092896177%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2423: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2423_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557381336%"),
    justifyContent: "flex-start"
  },
  Text_I27_2423_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2423_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557381336%")
  },
  View_I27_2423_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278684984%")
  },
  ImageBackground_I27_2423_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2423_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900955787%")
  },
  ImageBackground_I27_2423_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.27322404371591347%")
  },
  View_I27_2423_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.04095692452176536%"),
    justifyContent: "flex-start"
  },
  Text_I27_2423_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2423_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2423_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2423_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908463919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2423_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2423_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2423_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2423_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686134265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2423_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557381336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2423_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2423_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2423_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2423_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2424: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453479%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2425: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2426: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2427: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.22950819672144%"),
    justifyContent: "flex-start"
  },
  Text_27_2427: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2428: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.36612021857934%"),
    justifyContent: "center"
  },
  Text_27_2428: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2429: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.36612021857934%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2430: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2431: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2432: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.36612021857934%"),
    justifyContent: "center"
  },
  Text_27_2432: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2433: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2434: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2434: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2435: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("489.8907103825137%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2436: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2437: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.644808743169392%")
  },
  View_27_2438: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2439: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2440: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169392%")
  },
  View_27_2441: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2442: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2443: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2443_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557369967%"),
    justifyContent: "flex-start"
  },
  Text_I27_2443_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2443_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557369967%")
  },
  View_I27_2443_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278696352%")
  },
  ImageBackground_I27_2443_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2443_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900955787%")
  },
  ImageBackground_I27_2443_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437157998%")
  },
  View_I27_2443_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.04095692452199273%"),
    justifyContent: "flex-start"
  },
  Text_I27_2443_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2443_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2443_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2443_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908475288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2443_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2443_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2443_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2443_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686134265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2443_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557369967%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2443_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2443_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2443_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2443_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2444: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2445: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2446: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2447: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2447: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2448: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2448: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2449: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2450: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2450: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2451: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2452: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2452: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2453: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2454: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2454: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2455: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("515.0273224043716%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2456: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2456_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557381336%"),
    justifyContent: "flex-start"
  },
  Text_I27_2456_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2456_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557381336%")
  },
  View_I27_2456_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278684984%")
  },
  ImageBackground_I27_2456_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2456_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900956924%")
  },
  ImageBackground_I27_2456_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437157998%")
  },
  View_I27_2456_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.040956924521879046%"),
    justifyContent: "flex-start"
  },
  Text_I27_2456_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2456_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2456_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546447497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2456_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908475288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2456_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2456_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2456_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2456_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686133128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2456_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557381336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2456_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2456_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2456_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2456_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2457: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2458: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2459: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2460: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2460: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2461: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2461: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2462: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2463: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2464: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2465: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2465: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2466: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2467: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2468: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754031%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2468_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.381195568647513%")
  },
  View_I27_2468_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I27_2468_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2468_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_27_2469: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("542.8961748633881%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2470: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2471: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("4.644808743169278%")
  },
  View_27_2472: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2473: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2474: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169278%")
  },
  View_27_2475: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2476: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.36612021857934%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2477: {
    flexGrow: 1,
    width: wp("31.860665294611568%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2477_36_9152: {
    flexGrow: 1,
    width: wp("4.163126593033136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.848768054375533%"),
    top: hp("0.40983606557369967%"),
    justifyContent: "flex-start"
  },
  Text_I27_2477_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2477_36_9153: {
    flexGrow: 1,
    width: wp("7.689039932030586%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.704333050127442%"),
    top: hp("0.40983606557369967%")
  },
  View_I27_2477_36_9154: {
    width: wp("2.2514868309260834%"),
    minWidth: wp("2.2514868309260834%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.437553101104502%"),
    top: hp("0.20491803278696352%")
  },
  ImageBackground_I27_2477_36_9155: {
    width: wp("2.0390824129141887%"),
    minWidth: wp("2.0390824129141887%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I27_2477_36_9158: {
    width: wp("0.1274426508071368%"),
    minWidth: wp("0.1274426508071368%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1240441801189505%"),
    top: hp("0.4507929900955787%")
  },
  ImageBackground_I27_2477_36_9159: {
    width: wp("1.6992353440951573%"),
    minWidth: wp("1.6992353440951573%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440952002%"),
    top: hp("0.2732240437157998%")
  },
  View_I27_2477_36_9160: {
    width: wp("2.7187765505522514%"),
    minWidth: wp("2.7187765505522514%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.46389124893798%"),
    top: hp("0.040956924521879046%"),
    justifyContent: "flex-start"
  },
  Text_I27_2477_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I27_2477_36_9161: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I27_2477_36_9162: {
    width: wp("0.8496176720475787%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16992353440951646%")
  },
  ImageBackground_I27_2477_36_9163: {
    width: wp("0.7434154630416313%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908463919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05268625212404032%")
  },
  ImageBackground_I27_2477_36_9166: {
    width: wp("0.17969265972646295%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I27_2477_36_9167: {
    width: wp("0.18011543238274405%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6694887691163984%")
  },
  View_I27_2477_36_9168: {
    width: wp("1.1894647408666101%"),
    minWidth: wp("1.1894647408666101%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2744265080713681%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I27_2477_36_9169: {
    width: wp("0.5904511262930949%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686134265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2586189730246389%")
  },
  View_I27_2477_36_9173: {
    flexGrow: 1,
    width: wp("6.627017841971113%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33984706881903115%"),
    top: hp("0.40983606557369967%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2477_36_9174: {
    width: wp("1.7841971112999149%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I27_2477_36_9180: {
    width: wp("2.888700084961767%"),
    minWidth: wp("2.888700084961767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124044180118945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I27_2477_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_I27_2477_36_9181: {
    width: wp("1.274426508071368%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525913338997455%")
  },
  View_27_2478: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2479: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2480: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2481: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.2295081967212127%"),
    justifyContent: "flex-start"
  },
  Text_27_2481: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2482: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6338147833474927%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2482: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2483: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2484: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2484: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2485: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2486: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375531011045023%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2486: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2487: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2488: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2488: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2489: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754145%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2489_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.381195568647513%")
  },
  View_I27_2489_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I27_2489_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2489_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_27_2490: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("574.3169398907105%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2491: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2491_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371591347%")
  },
  View_I27_2491_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748633128%")
  },
  ImageBackground_I27_2491_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275001067281437%")
  },
  ImageBackground_I27_2491_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418374025%")
  },
  ImageBackground_I27_2491_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I27_2491_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295026%")
  },
  ImageBackground_I27_2491_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2492: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2493: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2494: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2494: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2495: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2495: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2496: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2497: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2498: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2499: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2499: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2500: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("590.7103825136612%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2501: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2502: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032819%")
  },
  View_27_2503: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2504: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2505: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_27_2506: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2507: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2508: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2508_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I27_2508_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748633128%")
  },
  ImageBackground_I27_2508_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275001067281437%")
  },
  ImageBackground_I27_2508_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418375162%")
  },
  ImageBackground_I27_2508_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429304453%")
  },
  View_I27_2508_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.6393442622951397%")
  },
  ImageBackground_I27_2508_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2509: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338898%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2510: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2511: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967212127%"),
    justifyContent: "flex-start"
  },
  Text_27_2511: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2512: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185791126%"),
    justifyContent: "center"
  },
  Text_27_2512: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2513: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185791126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2514: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2515: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2516: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185791126%"),
    justifyContent: "center"
  },
  Text_27_2516: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2517: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("610.1092896174863%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2518: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2518_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I27_2518_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748634265%")
  },
  ImageBackground_I27_2518_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275001067281437%")
  },
  ImageBackground_I27_2518_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418375162%")
  },
  ImageBackground_I27_2518_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I27_2518_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.6393442622952534%")
  },
  ImageBackground_I27_2518_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2519: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2520: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2521: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2522: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2522: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2523: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2523: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2524: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2525: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2525: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2526: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2527: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2527: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2528: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2529: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2529_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811955686476267%")
  },
  View_I27_2529_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "flex-start"
  },
  Text_I27_2529_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2529_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.25132076075829%")
  },
  View_27_2530: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("633.8797814207651%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2531: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2532: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032705%")
  },
  View_27_2533: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2534: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2535: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032705%")
  },
  View_27_2536: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2537: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2538: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2538_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371591347%")
  },
  View_I27_2538_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748633128%")
  },
  ImageBackground_I27_2538_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275001067281437%")
  },
  ImageBackground_I27_2538_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418375162%")
  },
  ImageBackground_I27_2538_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I27_2538_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.639344262295026%")
  },
  ImageBackground_I27_2538_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2539: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2540: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2541: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2542: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2542: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2543: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2543: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2544: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2545: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2545: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2546: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2547: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2547: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2548: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896245%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2549: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2549_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.381195568647513%")
  },
  View_I27_2549_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I27_2549_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2549_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607581762%")
  },
  View_27_2550: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("660.655737704918%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2551: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2551_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I27_2551_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748635402%")
  },
  ImageBackground_I27_2551_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.2750010672813232%")
  },
  ImageBackground_I27_2551_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418372888%")
  },
  ImageBackground_I27_2551_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.320560642930218%")
  },
  View_I27_2551_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.6393442622951397%")
  },
  ImageBackground_I27_2551_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2552: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2553: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2554: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2555: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2555: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2556: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2556: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2557: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2558: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2558: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2559: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2560: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2560: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2561: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2562: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2562: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2563: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("684.1530054644809%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2565: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2566: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032819%")
  },
  View_27_2567: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2568: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2569: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_27_2570: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2571: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2572: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2572_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I27_2572_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748634265%")
  },
  ImageBackground_I27_2572_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275001067281437%")
  },
  ImageBackground_I27_2572_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418374025%")
  },
  ImageBackground_I27_2572_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.320560642930218%")
  },
  View_I27_2572_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.6393442622951397%")
  },
  ImageBackground_I27_2572_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2573: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2574: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2575: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2576: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2576: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2577: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2577: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2578: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2579: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2579: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2580: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2581: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2581: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2582: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.2841530054646455%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2583: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2583: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2584: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("710.655737704918%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2585: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2585_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I27_2585_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748635402%")
  },
  ImageBackground_I27_2585_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.2750010672813232%")
  },
  ImageBackground_I27_2585_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418372888%")
  },
  ImageBackground_I27_2585_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.320560642930218%")
  },
  View_I27_2585_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.6393442622951397%")
  },
  ImageBackground_I27_2585_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2586: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2587: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2588: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2589: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_27_2589: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2590: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2590: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2591: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2592: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2592: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2593: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2594: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2594: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2595: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2596: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2596: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2597: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754031%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2597_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811955686476267%")
  },
  View_I27_2597_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "flex-start"
  },
  Text_I27_2597_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2597_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.25132076075829%")
  },
  View_27_2598: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552252%"),
    top: hp("740.4371584699453%"),
    backgroundColor: "rgba(29, 29, 29, 0.9399999976158142)"
  },
  View_27_2600: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_2601: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("5.737704918032819%")
  },
  View_27_2602: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2603: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_27_2604: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_27_2605: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2606: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_2607: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I27_2607_36_7726: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I27_2607_36_7731: {
    flexGrow: 1,
    width: wp("5.663668390240017%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.95046662595582%"),
    top: hp("1.0928961748634265%")
  },
  ImageBackground_I27_2607_36_7732: {
    width: wp("2.066953038399566%"),
    minWidth: wp("2.066953038399566%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.596687154842826%"),
    top: hp("1.275001067281437%")
  },
  ImageBackground_I27_2607_36_7736: {
    width: wp("1.297568059514515%"),
    minWidth: wp("1.297568059514515%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8714820518266748%"),
    top: hp("1.2746675418374025%")
  },
  ImageBackground_I27_2607_36_7740: {
    width: wp("1.4443500424808835%"),
    minWidth: wp("1.4443500424808835%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I27_2607_36_7747: {
    flexGrow: 1,
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.784197111299914%"),
    top: hp("1.6393442622951397%")
  },
  ImageBackground_I27_2607_36_7748: {
    width: wp("4.587935429056925%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_2608: {
    flexGrow: 1,
    width: wp("31.860662701784197%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486339012%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2609: {
    width: wp("31.860662701784197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2610: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2611: {
    width: wp("1.5293118096856415%"),
    minWidth: wp("1.5293118096856415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7646559048428205%"),
    top: hp("1.229508196721099%"),
    justifyContent: "flex-start"
  },
  Text_27_2611: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_27_2612: {
    width: wp("5.777400169923534%"),
    minWidth: wp("5.777400169923534%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.718776550552251%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2612: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2613: {
    width: wp("8.496176720475786%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.682242990654203%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2614: {
    width: wp("8.496176720475786%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_27_2614: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2615: {
    width: wp("11.682242990654206%"),
    minWidth: wp("11.682242990654206%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.178419711129994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2616: {
    width: wp("6.627017841971113%"),
    minWidth: wp("6.627017841971113%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29056924384027%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "center"
  },
  Text_27_2616: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_27_2617: {
    width: wp("31.860662701784197%"),
    minWidth: wp("31.860662701784197%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_2618: {
    flexGrow: 1,
    width: wp("29.141886151231944%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_27_2618: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_27_2619: {
    width: wp("29.141886151231944%"),
    minWidth: wp("29.141886151231944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3593882752761264%"),
    top: hp("6.967213114754145%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I27_2619_140_9425: {
    flexGrow: 1,
    width: wp("1.327983950191164%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6796941376380623%"),
    top: hp("1.3811955686473993%")
  },
  View_I27_2619_26_7539: {
    flexGrow: 1,
    width: wp("24.42576133708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5174901762956665%"),
    top: hp("0.9562841530052992%"),
    justifyContent: "flex-start"
  },
  Text_I27_2619_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I27_2619_140_9453: {
    flexGrow: 1,
    width: wp("1.0092113822217503%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.45293914613424%"),
    top: hp("1.2513207607580625%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
