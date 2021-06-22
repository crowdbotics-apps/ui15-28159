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
      <View style={styles.View_140_5522}>
        <View style={styles.View_70_1}>
          <View style={styles.View_I70_1_5_19}>
            <View style={styles.View_I70_1_5_20}>
              <View style={styles.View_I70_1_5_21} />
              <View style={styles.View_I70_1_5_22}>
                <Text style={styles.Text_I70_1_5_22}>App Clips</Text>
              </View>
            </View>
            <View style={styles.View_I70_1_5_23}>
              <Text style={styles.Text_I70_1_5_23}>
                Human Interface Guidelines: App Clips
              </Text>
            </View>
          </View>
          <View style={styles.View_I70_1_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e66/52eb/6db937da7dd31e6c269c71be52c3c5b7"
          }}
          style={styles.ImageBackground_140_5560}
        />
      </View>
      <View style={styles.View_70_4357}>
        <View style={styles.View_I70_4357_10_2304}>
          <Text style={styles.Text_I70_4357_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I70_4357_10_2303} />
      </View>
      <View style={styles.View_70_4362}>
        <View style={styles.View_70_4363}>
          <Text style={styles.Text_70_4363}>App Clip Icon</Text>
        </View>
        <View style={styles.View_70_4364}>
          <View style={styles.View_70_4369}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
              }}
              style={styles.ImageBackground_70_4368}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_70_2}>
        <View style={styles.View_I70_2_10_2311}>
          <Text style={styles.Text_I70_2_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I70_2_10_2312} />
      </View>
      <View style={styles.View_70_3}>
        <View style={styles.View_70_4}>
          <Text style={styles.Text_70_4}>App Clip</Text>
        </View>
        <View style={styles.View_70_5}>
          <View style={styles.View_70_6}>
            <View style={styles.View_70_7}>
              <View style={styles.View_70_8}>
                <Text style={styles.Text_70_8}>Light</Text>
              </View>
              <View style={styles.View_70_9}>
                <Text style={styles.Text_70_9}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_70_10}>
            <View style={styles.View_70_769}>
              <View style={styles.View_70_770}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ccc/de42/6d16587e7d6daa44d08ed2fd41ffa33e"
                  }}
                  style={styles.ImageBackground_70_771}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f62/d14a/e8a134eecd554073c08d3faac7173cbb"
                  }}
                  style={styles.ImageBackground_70_2938}
                />
              </View>
              <View style={styles.View_70_773}>
                <View style={styles.View_70_774}>
                  <View style={styles.View_70_775}>
                    <Text style={styles.Text_70_775}>Clip Name</Text>
                  </View>
                  <View style={styles.View_70_776}>
                    <Text style={styles.Text_70_776}>
                      Here’s a place for the App Clip’s description...
                    </Text>
                  </View>
                </View>
                <View style={styles.View_70_777}>
                  <View style={styles.View_70_778}>
                    <Text style={styles.Text_70_778}>Open</Text>
                  </View>
                </View>
                <View style={styles.View_70_779} />
                <View style={styles.View_70_780}>
                  <View style={styles.View_70_3361}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/123f/d0f8/f79a2314654ae31afb5d142eff749585"
                      }}
                      style={styles.ImageBackground_I70_3361_70_4368}
                    />
                  </View>
                  <View style={styles.View_70_3336}>
                    <View style={styles.View_70_781}>
                      <Text style={styles.Text_70_781}>Powered by</Text>
                    </View>
                    <View style={styles.View_70_782}>
                      <Text style={styles.Text_70_782}>App Name</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_70_784}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/489a/df29/02f43b6e098f0f8e414befbd1e0b348e"
                    }}
                    style={styles.ImageBackground_70_786}
                  />
                  <View style={styles.View_70_785}>
                    <Text style={styles.Text_70_785}>App Store</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91df/7afb/eeb6f0b3db01bfd22bc42974522ae516"
                    }}
                    style={styles.ImageBackground_140_11812}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_70_791}>
              <View style={styles.View_70_1942}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ccc/de42/6d16587e7d6daa44d08ed2fd41ffa33e"
                  }}
                  style={styles.ImageBackground_70_1943}
                />
                <View style={styles.View_70_1971}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7b8/6562/14bf9c377de522e6506bd7e36a5eb453"
                    }}
                    style={styles.ImageBackground_70_1977}
                  />
                </View>
              </View>
              <View style={styles.View_70_3617}>
                <View style={styles.View_70_3618}>
                  <View style={styles.View_70_3619}>
                    <Text style={styles.Text_70_3619}>Clip Name</Text>
                  </View>
                  <View style={styles.View_70_3620}>
                    <Text style={styles.Text_70_3620}>
                      Here’s a place for the App Clip’s description...
                    </Text>
                  </View>
                </View>
                <View style={styles.View_70_3621}>
                  <View style={styles.View_70_3622}>
                    <Text style={styles.Text_70_3622}>Open</Text>
                  </View>
                </View>
                <View style={styles.View_70_3623} />
                <View style={styles.View_70_3624}>
                  <View style={styles.View_70_3625}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/123f/d0f8/f79a2314654ae31afb5d142eff749585"
                      }}
                      style={styles.ImageBackground_I70_3625_70_4368}
                    />
                  </View>
                  <View style={styles.View_70_3626}>
                    <View style={styles.View_70_3627}>
                      <Text style={styles.Text_70_3627}>Powered by</Text>
                    </View>
                    <View style={styles.View_70_3628}>
                      <Text style={styles.Text_70_3628}>App Name</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_70_3629}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb59/bd6c/a866b88dea68bc5267f709082641d94d"
                    }}
                    style={styles.ImageBackground_70_3630}
                  />
                  <View style={styles.View_70_3634}>
                    <Text style={styles.Text_70_3634}>App Store</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cb7/1173/f078661a808a6f3ba27b9f2dbad7b6c4"
                    }}
                    style={styles.ImageBackground_140_11825}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_70_103}>
        <View style={styles.View_I70_103_10_2318}>
          <Text style={styles.Text_I70_103_10_2318}>Templates</Text>
        </View>
        <View style={styles.View_I70_103_10_2319} />
      </View>
      <View style={styles.View_70_104}>
        <View style={styles.View_70_105}>
          <Text style={styles.Text_70_105}>App Clip Preview</Text>
        </View>
        <View style={styles.View_70_106}>
          <View style={styles.View_70_107}>
            <View style={styles.View_70_108}>
              <View style={styles.View_70_109}>
                <Text style={styles.Text_70_109}>Light</Text>
              </View>
              <View style={styles.View_70_110}>
                <Text style={styles.Text_70_110}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_70_111}>
            <View style={styles.View_70_3054}>
              <View style={styles.View_70_2986}>
                <View style={styles.View_I70_2986_36_6825}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed9e/7c1f/2ff062dc08d343b7ac0581df923637d6"
                    }}
                    style={styles.ImageBackground_I70_2986_36_6825_122_4126}
                  />
                </View>
                <View style={styles.View_I70_2986_36_6837}>
                  <View style={styles.View_I70_2986_36_6838}>
                    <Text style={styles.Text_I70_2986_36_6838}>
                      Monday, June 3
                    </Text>
                  </View>
                  <View style={styles.View_I70_2986_36_6848}>
                    <View style={styles.View_I70_2986_36_6849}>
                      <Text style={styles.Text_I70_2986_36_6849}>41</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                      }}
                      style={styles.ImageBackground_I70_2986_36_6850}
                    />
                    <View style={styles.View_I70_2986_36_6851}>
                      <Text style={styles.Text_I70_2986_36_6851}>9</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                    }}
                    style={styles.ImageBackground_I70_2986_140_11846}
                  />
                  <View style={styles.View_I70_2986_36_6882}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                      }}
                      style={styles.ImageBackground_I70_2986_36_6882_5_3003}
                    />
                    <View style={styles.View_I70_2986_36_6882_5_3008}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                        }}
                        style={styles.ImageBackground_I70_2986_36_6882_5_3009}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                        }}
                        style={styles.ImageBackground_I70_2986_36_6882_140_7963}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                        }}
                        style={styles.ImageBackground_I70_2986_36_6882_140_8168}
                      />
                    </View>
                    <View style={styles.View_I70_2986_36_6882_5_3024}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                        }}
                        style={styles.ImageBackground_I70_2986_36_6882_5_3025}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_I70_2986_118_188}>
                  <View style={styles.View_I70_2986_118_143}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d48/deff/4437171e87f212513c77db5b584f93dc"
                      }}
                      style={styles.ImageBackground_I70_2986_118_272}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                      }}
                      style={styles.ImageBackground_I70_2986_140_11964}
                    />
                  </View>
                  <View style={styles.View_I70_2986_118_277}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6850/a202/71de2c84224a4182fb1c709cb0355497"
                      }}
                      style={styles.ImageBackground_I70_2986_118_278}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c30/73d4/90888e7533404b04f3037d84bee5d960"
                      }}
                      style={styles.ImageBackground_I70_2986_140_11969}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_70_3025}>
                <View style={styles.View_I70_3025_70_770}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ccc/de42/6d16587e7d6daa44d08ed2fd41ffa33e"
                    }}
                    style={styles.ImageBackground_I70_3025_70_771}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f62/d14a/e8a134eecd554073c08d3faac7173cbb"
                    }}
                    style={styles.ImageBackground_I70_3025_70_2938}
                  />
                </View>
                <View style={styles.View_I70_3025_70_773}>
                  <View style={styles.View_I70_3025_70_774}>
                    <View style={styles.View_I70_3025_70_775}>
                      <Text style={styles.Text_I70_3025_70_775}>Clip Name</Text>
                    </View>
                    <View style={styles.View_I70_3025_70_776}>
                      <Text style={styles.Text_I70_3025_70_776}>
                        Here’s a place for the App Clip’s description...
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I70_3025_70_777}>
                    <View style={styles.View_I70_3025_70_778}>
                      <Text style={styles.Text_I70_3025_70_778}>Open</Text>
                    </View>
                  </View>
                  <View style={styles.View_I70_3025_70_779} />
                  <View style={styles.View_I70_3025_70_780}>
                    <View style={styles.View_I70_3025_70_3361}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/123f/d0f8/f79a2314654ae31afb5d142eff749585"
                        }}
                        style={styles.ImageBackground_I70_3025_70_3361_70_4368}
                      />
                    </View>
                    <View style={styles.View_I70_3025_70_3336}>
                      <View style={styles.View_I70_3025_70_781}>
                        <Text style={styles.Text_I70_3025_70_781}>
                          Powered by
                        </Text>
                      </View>
                      <View style={styles.View_I70_3025_70_782}>
                        <Text style={styles.Text_I70_3025_70_782}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I70_3025_70_784}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/489a/df29/02f43b6e098f0f8e414befbd1e0b348e"
                      }}
                      style={styles.ImageBackground_I70_3025_70_786}
                    />
                    <View style={styles.View_I70_3025_70_785}>
                      <Text style={styles.Text_I70_3025_70_785}>App Store</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91df/7afb/eeb6f0b3db01bfd22bc42974522ae516"
                      }}
                      style={styles.ImageBackground_I70_3025_140_11812}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_70_3193}>
              <View style={styles.View_70_3125}>
                <View style={styles.View_I70_3125_36_10067}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81b6/3b38/a1099b4a47b223ca3e3938f94b01cc09"
                    }}
                    style={styles.ImageBackground_I70_3125_36_10067_5_258}
                  />
                </View>
                <View style={styles.View_I70_3125_36_10068}>
                  <View style={styles.View_I70_3125_36_10069}>
                    <Text style={styles.Text_I70_3125_36_10069}>
                      Monday, June 3
                    </Text>
                  </View>
                  <View style={styles.View_I70_3125_36_10070}>
                    <View style={styles.View_I70_3125_36_10071}>
                      <Text style={styles.Text_I70_3125_36_10071}>41</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                      }}
                      style={styles.ImageBackground_I70_3125_36_10072}
                    />
                    <View style={styles.View_I70_3125_36_10073}>
                      <Text style={styles.Text_I70_3125_36_10073}>9</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                    }}
                    style={styles.ImageBackground_I70_3125_140_11893}
                  />
                  <View style={styles.View_I70_3125_36_10077}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                      }}
                      style={styles.ImageBackground_I70_3125_36_10077_71_8856}
                    />
                    <View style={styles.View_I70_3125_36_10077_71_8861}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                        }}
                        style={styles.ImageBackground_I70_3125_36_10077_71_8862}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                        }}
                        style={
                          styles.ImageBackground_I70_3125_36_10077_140_8460
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                        }}
                        style={
                          styles.ImageBackground_I70_3125_36_10077_140_8569
                        }
                      />
                    </View>
                    <View style={styles.View_I70_3125_36_10077_71_8877}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                        }}
                        style={styles.ImageBackground_I70_3125_36_10077_71_8878}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_I70_3125_118_486}>
                  <View style={styles.View_I70_3125_118_487}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aa2/fded/362cfb366655bfc51c9b75bccf266fb1"
                      }}
                      style={styles.ImageBackground_I70_3125_118_488}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                      }}
                      style={styles.ImageBackground_I70_3125_140_11980}
                    />
                  </View>
                  <View style={styles.View_I70_3125_118_490}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eef4/a954/c80516550a3424a4b2afed0d91464120"
                      }}
                      style={styles.ImageBackground_I70_3125_118_491}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c30/73d4/90888e7533404b04f3037d84bee5d960"
                      }}
                      style={styles.ImageBackground_I70_3125_140_11985}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_70_3126}>
                <View style={styles.View_I70_3126_70_1942}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ccc/de42/6d16587e7d6daa44d08ed2fd41ffa33e"
                    }}
                    style={styles.ImageBackground_I70_3126_70_1943}
                  />
                  <View style={styles.View_I70_3126_70_1971}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7b8/6562/14bf9c377de522e6506bd7e36a5eb453"
                      }}
                      style={styles.ImageBackground_I70_3126_70_1977}
                    />
                  </View>
                </View>
                <View style={styles.View_I70_3126_70_3617}>
                  <View style={styles.View_I70_3126_70_3618}>
                    <View style={styles.View_I70_3126_70_3619}>
                      <Text style={styles.Text_I70_3126_70_3619}>
                        Clip Name
                      </Text>
                    </View>
                    <View style={styles.View_I70_3126_70_3620}>
                      <Text style={styles.Text_I70_3126_70_3620}>
                        Here’s a place for the App Clip’s description...
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I70_3126_70_3621}>
                    <View style={styles.View_I70_3126_70_3622}>
                      <Text style={styles.Text_I70_3126_70_3622}>Open</Text>
                    </View>
                  </View>
                  <View style={styles.View_I70_3126_70_3623} />
                  <View style={styles.View_I70_3126_70_3624}>
                    <View style={styles.View_I70_3126_70_3625}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/123f/d0f8/f79a2314654ae31afb5d142eff749585"
                        }}
                        style={styles.ImageBackground_I70_3126_70_3625_70_4368}
                      />
                    </View>
                    <View style={styles.View_I70_3126_70_3626}>
                      <View style={styles.View_I70_3126_70_3627}>
                        <Text style={styles.Text_I70_3126_70_3627}>
                          Powered by
                        </Text>
                      </View>
                      <View style={styles.View_I70_3126_70_3628}>
                        <Text style={styles.Text_I70_3126_70_3628}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I70_3126_70_3629}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb59/bd6c/a866b88dea68bc5267f709082641d94d"
                      }}
                      style={styles.ImageBackground_I70_3126_70_3630}
                    />
                    <View style={styles.View_I70_3126_70_3634}>
                      <Text style={styles.Text_I70_3126_70_3634}>
                        App Store
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cb7/1173/f078661a808a6f3ba27b9f2dbad7b6c4"
                      }}
                      style={styles.ImageBackground_I70_3126_140_11825}
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
  View_2: { height: hp("498.7704918032787%") },
  View_140_5522: {
    width: wp("84.31372549019608%"),
    minWidth: wp("84.31372549019608%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8431372549019605%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_1: {
    flexGrow: 1,
    width: wp("84.31372549019608%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_1_5_19: {
    flexGrow: 1,
    width: wp("84.31372549019608%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_1_5_20: {
    width: wp("39.46078431372549%"),
    minWidth: wp("39.46078431372549%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_1_5_21: {
    width: wp("6.862745098039216%"),
    minWidth: wp("6.862745098039216%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I70_1_5_22: {
    width: wp("28.676470588235293%"),
    minWidth: wp("28.676470588235293%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.784313725490197%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_1_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_1_5_23: {
    width: wp("40.931372549019606%"),
    minWidth: wp("40.931372549019606%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.382352941176464%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I70_1_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I70_1_5_24: {
    flexGrow: 1,
    width: wp("84.31372549019608%"),
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
  ImageBackground_140_5560: {
    width: wp("6.862745098039216%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_4357: {
    width: wp("84.31372549019608%"),
    minWidth: wp("84.31372549019608%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8431372549019605%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_4357_10_2304: {
    flexGrow: 1,
    width: wp("8.700980392156863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_4357_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_4357_10_2303: {
    flexGrow: 1,
    width: wp("84.31372549019608%"),
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
  View_70_4362: {
    width: wp("18.38235294117647%"),
    minWidth: wp("18.38235294117647%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8431372549019605%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_4363: {
    width: wp("18.38235294117647%"),
    minWidth: wp("18.38235294117647%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_70_4363: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_4364: {
    width: wp("7.352941176470589%"),
    minWidth: wp("7.352941176470589%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_70_4369: {
    width: wp("7.352941176470589%"),
    minWidth: wp("7.352941176470589%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_4368: {
    flexGrow: 1,
    width: wp("7.352941176470589%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_70_2: {
    width: wp("84.31372549019608%"),
    minWidth: wp("84.31372549019608%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8431372549019605%"),
    top: hp("71.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_2_10_2311: {
    flexGrow: 1,
    width: wp("13.725490196078432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_2_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_2_10_2312: {
    flexGrow: 1,
    width: wp("84.31372549019608%"),
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
  View_70_3: {
    width: wp("60.78431372549019%"),
    minWidth: wp("60.78431372549019%"),
    height: hp("132.78688524590163%"),
    minHeight: hp("132.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8431372549019605%"),
    top: hp("88.66120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_4: {
    width: wp("11.27450980392157%"),
    minWidth: wp("11.27450980392157%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_70_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_5: {
    width: wp("60.78431372549019%"),
    minWidth: wp("60.78431372549019%"),
    height: hp("125.13661202185793%"),
    minHeight: hp("125.13661202185793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_70_6: {
    width: wp("5.514705882352941%"),
    minWidth: wp("5.514705882352941%"),
    height: hp("63.661202185792355%"),
    minHeight: hp("63.661202185792355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.26960784313725%"),
    top: hp("30.73770491803279%")
  },
  View_70_7: {
    width: wp("5.514705882352941%"),
    minWidth: wp("5.514705882352941%"),
    height: hp("63.661202185792355%"),
    minHeight: hp("63.661202185792355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_70_8: {
    width: wp("5.514705882352941%"),
    minWidth: wp("5.514705882352941%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_70_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_9: {
    width: wp("4.411764705882353%"),
    minWidth: wp("4.411764705882353%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.382513661202196%"),
    justifyContent: "center"
  },
  Text_70_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_10: {
    width: wp("51.34803921568627%"),
    minWidth: wp("51.34803921568627%"),
    height: hp("125.13661202185793%"),
    minHeight: hp("125.13661202185793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_70_769: {
    width: wp("43.504901960784316%"),
    minWidth: wp("43.504901960784316%"),
    height: hp("56.01092896174863%"),
    minHeight: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.92156862745098%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    overflow: "hidden"
  },
  View_70_770: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_70_771: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_70_2938: {
    width: wp("3.6764705882352944%"),
    height: hp("4.098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.88725490196078%")
  },
  View_70_773: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9411764705882373%"),
    top: hp("35.792349726775925%")
  },
  View_70_774: {
    flexGrow: 1,
    width: wp("21.44607843137255%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_775: {
    width: wp("21.44607843137255%"),
    minWidth: wp("21.44607843137255%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_70_775: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_70_776: {
    width: wp("21.44607843137255%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453564%"),
    justifyContent: "flex-start"
  },
  Text_70_776: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_777: {
    width: wp("12.009803921568627%"),
    minWidth: wp("12.009803921568627%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.612745098039216%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)"
  },
  View_70_778: {
    width: wp("5.392156862745098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.308823529411761%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_70_778: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_70_779: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.860655737704946%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_70_780: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_3361: {
    width: wp("3.431372549019608%"),
    minWidth: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.20491803278690668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3361_70_4368: {
    flexGrow: 1,
    width: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_70_3336: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4117647058823515%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_781: {
    width: wp("7.8431372549019605%"),
    minWidth: wp("7.8431372549019605%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_70_781: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_70_782: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "flex-start"
  },
  Text_70_782: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_70_784: {
    width: wp("10.395244523590687%"),
    minWidth: wp("10.395244523590687%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.227424172794112%"),
    top: hp("14.890710382513674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_786: {
    width: wp("1.4705882352941175%"),
    minWidth: wp("1.4705882352941175%"),
    height: hp("1.4519520796061864%"),
    minHeight: hp("1.4519520796061864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3669280172046001%")
  },
  View_70_785: {
    width: wp("7.107843137254902%"),
    minWidth: wp("7.107843137254902%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_70_785: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_11812: {
    width: wp("0.5913229549632353%"),
    minWidth: wp("0.5913229549632353%"),
    height: hp("1.1046362704918034%"),
    minHeight: hp("1.1046362704918034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.803921568627452%"),
    top: hp("0.5405780396174862%")
  },
  View_70_791: {
    width: wp("43.504901960784316%"),
    minWidth: wp("43.504901960784316%"),
    height: hp("56.01092896174863%"),
    minHeight: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.92156862745098%"),
    top: hp("64.75409836065573%"),
    backgroundColor: "rgba(30, 30, 30, 0.75)",
    overflow: "hidden"
  },
  View_70_1942: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_70_1943: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_70_1971: {
    width: wp("3.6764705882352944%"),
    minWidth: wp("3.6764705882352944%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.88725490196078%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_1977: {
    width: wp("3.6764705882352944%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_3617: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9411764705882373%"),
    top: hp("35.79234972677597%")
  },
  View_70_3618: {
    flexGrow: 1,
    width: wp("21.44607843137255%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_3619: {
    width: wp("21.44607843137255%"),
    minWidth: wp("21.44607843137255%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_70_3619: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_70_3620: {
    width: wp("21.44607843137255%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    justifyContent: "flex-start"
  },
  Text_70_3620: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_3621: {
    width: wp("12.009803921568627%"),
    minWidth: wp("12.009803921568627%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.612745098039216%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)"
  },
  View_70_3622: {
    width: wp("5.392156862745098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.308823529411761%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_70_3622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_70_3623: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.860655737704917%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_70_3624: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_3625: {
    width: wp("3.431372549019608%"),
    minWidth: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.20491803278690668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3625_70_4368: {
    flexGrow: 1,
    width: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_70_3626: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4117647058823515%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_3627: {
    width: wp("7.8431372549019605%"),
    minWidth: wp("7.8431372549019605%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_70_3627: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_70_3628: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "flex-start"
  },
  Text_70_3628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_70_3629: {
    width: wp("10.395244523590687%"),
    minWidth: wp("10.395244523590687%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.227424172794112%"),
    top: hp("14.890710382513674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_3630: {
    width: wp("1.4705882352941175%"),
    minWidth: wp("1.4705882352941175%"),
    height: hp("1.4519520796061864%"),
    minHeight: hp("1.4519520796061864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.36691134093234723%")
  },
  View_70_3634: {
    width: wp("7.107843137254902%"),
    minWidth: wp("7.107843137254902%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_70_3634: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_11825: {
    width: wp("0.5913229549632353%"),
    minWidth: wp("0.5913229549632353%"),
    height: hp("1.1046362704918034%"),
    minHeight: hp("1.1046362704918034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.803921568627452%"),
    top: hp("0.5405780396174862%")
  },
  View_70_103: {
    width: wp("84.31372549019608%"),
    minWidth: wp("84.31372549019608%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8431372549019605%"),
    top: hp("230.19125683060108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_103_10_2318: {
    flexGrow: 1,
    width: wp("13.848039215686276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_103_10_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_103_10_2319: {
    flexGrow: 1,
    width: wp("84.31372549019608%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333371%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_70_104: {
    width: wp("63.23529411764706%"),
    minWidth: wp("63.23529411764706%"),
    height: hp("242.62295081967213%"),
    minHeight: hp("242.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8431372549019605%"),
    top: hp("247.40437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_105: {
    width: wp("22.54901960784314%"),
    minWidth: wp("22.54901960784314%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_70_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_106: {
    width: wp("63.23529411764706%"),
    minWidth: wp("63.23529411764706%"),
    height: hp("234.9726775956284%"),
    minHeight: hp("234.9726775956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_70_107: {
    width: wp("5.514705882352941%"),
    minWidth: wp("5.514705882352941%"),
    height: hp("118.5792349726776%"),
    minHeight: hp("118.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.720588235294116%"),
    top: hp("58.196721311475386%")
  },
  View_70_108: {
    width: wp("5.514705882352941%"),
    minWidth: wp("5.514705882352941%"),
    height: hp("118.5792349726776%"),
    minHeight: hp("118.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_70_109: {
    width: wp("5.514705882352941%"),
    minWidth: wp("5.514705882352941%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_70_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_110: {
    width: wp("4.411764705882353%"),
    minWidth: wp("4.411764705882353%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115.30054644808746%"),
    justifyContent: "center"
  },
  Text_70_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_111: {
    width: wp("53.799019607843135%"),
    minWidth: wp("53.799019607843135%"),
    height: hp("234.9726775956284%"),
    minHeight: hp("234.9726775956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_70_3054: {
    width: wp("45.955882352941174%"),
    minWidth: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.92156862745098%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_2986: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I70_2986_36_6825: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_2986_36_6825_122_4126: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I70_2986_36_6837: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I70_2986_36_6838: {
    width: wp("19.240196078431374%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.357843137254902%"),
    top: hp("25.956284153005413%"),
    justifyContent: "flex-start"
  },
  Text_I70_2986_36_6838: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I70_2986_36_6848: {
    width: wp("17.769607843137255%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.093137254901963%")
  },
  View_I70_2986_36_6849: {
    width: wp("9.803921568627452%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.965686274509807%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_2986_36_6849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I70_2986_36_6850: {
    width: wp("0.660555970435049%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.7138671875%"),
    top: hp("4.439890710382542%")
  },
  View_I70_2986_36_6851: {
    width: wp("6.004901960784314%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_2986_36_6851: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I70_2986_140_11846: {
    width: wp("2.877987132352941%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.538947610294116%"),
    top: hp("8.013682547814199%")
  },
  View_I70_2986_36_6882: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
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
  ImageBackground_I70_2986_36_6882_5_3003: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_I70_2986_36_6882_5_3008: {
    flexGrow: 1,
    width: wp("8.16926769181794%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.9884823069853%"),
    top: hp("2.367563716700772%")
  },
  ImageBackground_I70_2986_36_6882_5_3009: {
    width: wp("2.9813771154366284%"),
    minWidth: wp("2.9813771154366284%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.18798828125%"),
    top: hp("0.000366877988426495%")
  },
  ImageBackground_I70_2986_36_6882_140_7963: {
    width: wp("1.871614713294833%"),
    minWidth: wp("1.871614713294833%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6994293811274446%"),
    top: hp("0%")
  },
  ImageBackground_I70_2986_36_6882_140_8168: {
    width: wp("2.083333333333333%"),
    minWidth: wp("2.083333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0458931010929291%")
  },
  View_I70_2986_36_6882_5_3024: {
    flexGrow: 1,
    width: wp("6.61764705882353%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5735294117647065%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I70_2986_36_6882_5_3025: {
    width: wp("6.61764705882353%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I70_2986_118_188: {
    flexGrow: 1,
    width: wp("35.17156862745098%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.392156862745098%"),
    top: hp("97.26775956284149%")
  },
  View_I70_2986_118_143: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_2986_118_272: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I70_2986_140_11964: {
    width: wp("1.2716854319852942%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4280024509803937%"),
    top: hp("1.7884968408470172%")
  },
  View_I70_2986_118_277: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.044117647058826%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_2986_118_278: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I70_2986_140_11969: {
    width: wp("3.0862247242647056%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.581887637867645%"),
    top: hp("1.9804073813183436%")
  },
  View_70_3025: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2254901960784341%"),
    top: hp("53.551912568305966%"),
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    overflow: "hidden"
  },
  View_I70_3025_70_770: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I70_3025_70_771: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I70_3025_70_2938: {
    width: wp("3.6764705882352944%"),
    height: hp("4.098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.88725490196078%")
  },
  View_I70_3025_70_773: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.941176470588232%"),
    top: hp("35.792349726776024%")
  },
  View_I70_3025_70_774: {
    flexGrow: 1,
    width: wp("21.44607843137255%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_3025_70_775: {
    width: wp("21.44607843137255%"),
    minWidth: wp("21.44607843137255%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I70_3025_70_775: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I70_3025_70_776: {
    width: wp("21.44607843137255%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    justifyContent: "flex-start"
  },
  Text_I70_3025_70_776: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_3025_70_777: {
    width: wp("12.009803921568627%"),
    minWidth: wp("12.009803921568627%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.61274509803922%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)"
  },
  View_I70_3025_70_778: {
    width: wp("5.392156862745098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.308823529411761%"),
    top: hp("1.639344262295026%"),
    justifyContent: "center"
  },
  Text_I70_3025_70_778: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I70_3025_70_779: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.86065573770486%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I70_3025_70_780: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.79781420765022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_3025_70_3361: {
    width: wp("3.431372549019608%"),
    minWidth: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.20491803278690668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3025_70_3361_70_4368: {
    flexGrow: 1,
    width: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I70_3025_70_3336: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.411764705882355%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_3025_70_781: {
    width: wp("7.8431372549019605%"),
    minWidth: wp("7.8431372549019605%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I70_3025_70_781: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_I70_3025_70_782: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7759562841530396%"),
    justifyContent: "flex-start"
  },
  Text_I70_3025_70_782: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I70_3025_70_784: {
    width: wp("10.395244523590687%"),
    minWidth: wp("10.395244523590687%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.227424172794116%"),
    top: hp("14.89071038251359%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3025_70_786: {
    width: wp("1.4705882352941175%"),
    minWidth: wp("1.4705882352941175%"),
    height: hp("1.4519520796061864%"),
    minHeight: hp("1.4519520796061864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3669113409324041%")
  },
  View_I70_3025_70_785: {
    width: wp("7.107843137254902%"),
    minWidth: wp("7.107843137254902%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I70_3025_70_785: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I70_3025_140_11812: {
    width: wp("0.5913229549632353%"),
    minWidth: wp("0.5913229549632353%"),
    height: hp("1.1046362704918034%"),
    minHeight: hp("1.1046362704918034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.803921568627459%"),
    top: hp("0.5405780396175146%")
  },
  View_70_3193: {
    width: wp("45.955882352941174%"),
    minWidth: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.92156862745098%"),
    top: hp("119.67213114754097%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_3125: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I70_3125_36_10067: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3125_36_10067_5_258: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I70_3125_36_10068: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I70_3125_36_10069: {
    width: wp("19.240196078431374%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.357843137254902%"),
    top: hp("25.95628415300547%"),
    justifyContent: "flex-start"
  },
  Text_I70_3125_36_10069: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I70_3125_36_10070: {
    width: wp("17.769607843137255%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.093137254901963%")
  },
  View_I70_3125_36_10071: {
    width: wp("9.803921568627452%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.965686274509807%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_3125_36_10071: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I70_3125_36_10072: {
    width: wp("0.660555970435049%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.7138671875%"),
    top: hp("4.439890710382542%")
  },
  View_I70_3125_36_10073: {
    width: wp("6.004901960784314%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_3125_36_10073: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I70_3125_140_11893: {
    width: wp("2.877987132352941%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.538947610294116%"),
    top: hp("8.013682547814199%")
  },
  View_I70_3125_36_10077: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
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
  ImageBackground_I70_3125_36_10077_71_8856: {
    flexGrow: 1,
    width: wp("45.955882352941174%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I70_3125_36_10077_71_8861: {
    flexGrow: 1,
    width: wp("8.16926769181794%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.9884823069853%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_I70_3125_36_10077_71_8862: {
    width: wp("2.9813771154366284%"),
    minWidth: wp("2.9813771154366284%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.18798828125%"),
    top: hp("0.0003668779883696516%")
  },
  ImageBackground_I70_3125_36_10077_140_8460: {
    width: wp("1.871614713294833%"),
    minWidth: wp("1.871614713294833%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6994293811274446%"),
    top: hp("0%")
  },
  ImageBackground_I70_3125_36_10077_140_8569: {
    width: wp("2.083333333333333%"),
    minWidth: wp("2.083333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0458931010929291%")
  },
  View_I70_3125_36_10077_71_8877: {
    flexGrow: 1,
    width: wp("6.61764705882353%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5735294117647065%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I70_3125_36_10077_71_8878: {
    width: wp("6.61764705882353%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I70_3125_118_486: {
    flexGrow: 1,
    width: wp("35.17156862745098%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.392156862745098%"),
    top: hp("97.26775956284155%")
  },
  View_I70_3125_118_487: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3125_118_488: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I70_3125_140_11980: {
    width: wp("1.2716854319852942%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4280024509803937%"),
    top: hp("1.7884968408469604%")
  },
  View_I70_3125_118_490: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.044117647058826%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3125_118_491: {
    width: wp("6.127450980392156%"),
    minWidth: wp("6.127450980392156%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I70_3125_140_11985: {
    width: wp("3.0862247242647056%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.581887637867645%"),
    top: hp("1.9804073813182868%")
  },
  View_70_3126: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2254901960784341%"),
    top: hp("53.551912568305966%"),
    backgroundColor: "rgba(30, 30, 30, 0.75)",
    overflow: "hidden"
  },
  View_I70_3126_70_1942: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I70_3126_70_1943: {
    flexGrow: 1,
    width: wp("43.504901960784316%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I70_3126_70_1971: {
    width: wp("3.6764705882352944%"),
    minWidth: wp("3.6764705882352944%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.88725490196078%"),
    top: hp("3.2786885245902226%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3126_70_1977: {
    width: wp("3.6764705882352944%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I70_3126_70_3617: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.941176470588232%"),
    top: hp("35.792349726776024%")
  },
  View_I70_3126_70_3618: {
    flexGrow: 1,
    width: wp("21.44607843137255%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_3126_70_3619: {
    width: wp("21.44607843137255%"),
    minWidth: wp("21.44607843137255%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I70_3126_70_3619: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I70_3126_70_3620: {
    width: wp("21.44607843137255%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    justifyContent: "flex-start"
  },
  Text_I70_3126_70_3620: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_3126_70_3621: {
    width: wp("12.009803921568627%"),
    minWidth: wp("12.009803921568627%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.61274509803922%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)"
  },
  View_I70_3126_70_3622: {
    width: wp("5.392156862745098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.308823529411761%"),
    top: hp("1.639344262295026%"),
    justifyContent: "center"
  },
  Text_I70_3126_70_3622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I70_3126_70_3623: {
    flexGrow: 1,
    width: wp("37.622549019607845%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.860655737704917%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I70_3126_70_3624: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_3126_70_3625: {
    width: wp("3.431372549019608%"),
    minWidth: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.20491803278684984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3126_70_3625_70_4368: {
    flexGrow: 1,
    width: wp("3.431372549019608%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I70_3126_70_3626: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.411764705882355%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_3126_70_3627: {
    width: wp("7.8431372549019605%"),
    minWidth: wp("7.8431372549019605%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I70_3126_70_3627: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_I70_3126_70_3628: {
    width: wp("8.088235294117647%"),
    minWidth: wp("8.088235294117647%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_I70_3126_70_3628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I70_3126_70_3629: {
    width: wp("10.395244523590687%"),
    minWidth: wp("10.395244523590687%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.227424172794116%"),
    top: hp("14.89071038251359%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_3126_70_3630: {
    width: wp("1.4705882352941175%"),
    minWidth: wp("1.4705882352941175%"),
    height: hp("1.4519520796061864%"),
    minHeight: hp("1.4519520796061864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.36694469347679615%")
  },
  View_I70_3126_70_3634: {
    width: wp("7.107843137254902%"),
    minWidth: wp("7.107843137254902%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I70_3126_70_3634: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I70_3126_140_11825: {
    width: wp("0.5913229549632353%"),
    minWidth: wp("0.5913229549632353%"),
    height: hp("1.1046362704918034%"),
    minHeight: hp("1.1046362704918034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.803921568627459%"),
    top: hp("0.5405780396175146%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
