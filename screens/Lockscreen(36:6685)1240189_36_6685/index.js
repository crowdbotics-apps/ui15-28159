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
      <View style={styles.View_140_5523}>
        <View style={styles.View_36_6686}>
          <View style={styles.View_I36_6686_5_19}>
            <View style={styles.View_I36_6686_5_20}>
              <View style={styles.View_I36_6686_5_21} />
              <View style={styles.View_I36_6686_5_22}>
                <Text style={styles.Text_I36_6686_5_22}>Lockscreen</Text>
              </View>
            </View>
            <View style={styles.View_I36_6686_5_23}>
              <Text style={styles.Text_I36_6686_5_23}>
                Human Interface Guidelines: Notifications
              </Text>
            </View>
          </View>
          <View style={styles.View_I36_6686_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cc7/e0fb/c02bfcadd42d99a11b98853cb9974e91"
          }}
          style={styles.ImageBackground_140_5562}
        />
      </View>
      <View style={styles.View_36_6687}>
        <View style={styles.View_I36_6687_10_2318}>
          <Text style={styles.Text_I36_6687_10_2318}>Templates</Text>
        </View>
        <View style={styles.View_I36_6687_10_2319} />
      </View>
      <View style={styles.View_36_6696}>
        <View style={styles.View_36_6697}>
          <Text style={styles.Text_36_6697}>Lockscreen</Text>
        </View>
        <View style={styles.View_36_6698}>
          <View style={styles.View_36_6699}>
            <View style={styles.View_36_6700}>
              <View style={styles.View_36_6701}>
                <Text style={styles.Text_36_6701}>Light / None</Text>
              </View>
              <View style={styles.View_75_9136}>
                <Text style={styles.Text_75_9136}>Light / Default</Text>
              </View>
              <View style={styles.View_75_9137}>
                <Text style={styles.Text_75_9137}>Light / Stacked</Text>
              </View>
              <View style={styles.View_75_9138}>
                <Text style={styles.Text_75_9138}>Light / Pressed</Text>
              </View>
              <View style={styles.View_75_9139}>
                <Text style={styles.Text_75_9139}>Dark / None</Text>
              </View>
              <View style={styles.View_75_9140}>
                <Text style={styles.Text_75_9140}>Dark / Notification</Text>
              </View>
              <View style={styles.View_122_4361}>
                <Text style={styles.Text_122_4361}>Dark / Stacked</Text>
              </View>
              <View style={styles.View_122_4362}>
                <Text style={styles.Text_122_4362}>
                  Dark / Notification Pressed
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_36_6705}>
            <View style={styles.View_36_6836}>
              <View style={styles.View_36_6825}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/317b/e9a0/5cf92ebabea3b29a3c9eddd53dae329b"
                  }}
                  style={styles.ImageBackground_I36_6825_122_4126}
                />
              </View>
              <View style={styles.View_36_6837}>
                <View style={styles.View_36_6838}>
                  <Text style={styles.Text_36_6838}>Monday, June 3</Text>
                </View>
                <View style={styles.View_36_6848}>
                  <View style={styles.View_36_6849}>
                    <Text style={styles.Text_36_6849}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_36_6850}
                  />
                  <View style={styles.View_36_6851}>
                    <Text style={styles.Text_36_6851}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0243/0c34/ff88a73c809f46e3b542edc8d472f569"
                  }}
                  style={styles.ImageBackground_140_11846}
                />
                <View style={styles.View_36_6882}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I36_6882_5_3003}
                  />
                  <View style={styles.View_I36_6882_5_3008}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                      }}
                      style={styles.ImageBackground_I36_6882_5_3009}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                      }}
                      style={styles.ImageBackground_I36_6882_140_7963}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                      }}
                      style={styles.ImageBackground_I36_6882_140_8168}
                    />
                  </View>
                  <View style={styles.View_I36_6882_5_3024}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                      }}
                      style={styles.ImageBackground_I36_6882_5_3025}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_118_188}>
                <View style={styles.View_118_143}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a138/f5f7/6dde15166999f1e08b0b9bf83e5505f2"
                    }}
                    style={styles.ImageBackground_118_272}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11964}
                  />
                </View>
                <View style={styles.View_118_277}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8095/232d/73eed095a226a560e16d7523043998e7"
                    }}
                    style={styles.ImageBackground_118_278}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c30/73d4/90888e7533404b04f3037d84bee5d960"
                    }}
                    style={styles.ImageBackground_140_11969}
                  />
                </View>
              </View>
              <View style={styles.View_36_6907}>
                <View style={styles.View_I36_6907_36_10050} />
              </View>
            </View>
            <View style={styles.View_36_7378}>
              <View style={styles.View_36_7379}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/317b/e9a0/5cf92ebabea3b29a3c9eddd53dae329b"
                  }}
                  style={styles.ImageBackground_I36_7379_122_4126}
                />
              </View>
              <View style={styles.View_36_7380}>
                <View style={styles.View_36_7381}>
                  <Text style={styles.Text_36_7381}>Monday, June 3</Text>
                </View>
                <View style={styles.View_36_7382}>
                  <View style={styles.View_36_7383}>
                    <Text style={styles.Text_36_7383}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_36_7384}
                  />
                  <View style={styles.View_36_7385}>
                    <Text style={styles.Text_36_7385}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                  }}
                  style={styles.ImageBackground_140_11891}
                />
                <View style={styles.View_36_7389}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I36_7389_5_3003}
                  />
                  <View style={styles.View_I36_7389_5_3008}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                      }}
                      style={styles.ImageBackground_I36_7389_5_3009}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                      }}
                      style={styles.ImageBackground_I36_7389_140_7963}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                      }}
                      style={styles.ImageBackground_I36_7389_140_8168}
                    />
                  </View>
                  <View style={styles.View_I36_7389_5_3024}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                      }}
                      style={styles.ImageBackground_I36_7389_5_3025}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_118_458}>
                <View style={styles.View_118_459}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a138/f5f7/6dde15166999f1e08b0b9bf83e5505f2"
                    }}
                    style={styles.ImageBackground_118_460}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11974}
                  />
                </View>
                <View style={styles.View_118_462}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8095/232d/73eed095a226a560e16d7523043998e7"
                    }}
                    style={styles.ImageBackground_118_463}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/299f/d585/5aba5c8572ba76de61727fd8ecf98a67"
                    }}
                    style={styles.ImageBackground_140_11975}
                  />
                </View>
              </View>
              <View style={styles.View_36_7390}>
                <View style={styles.View_I36_7390_36_10050} />
              </View>
              <View style={styles.View_41_2930}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_41_2980}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_7659")
                    )
                  }
                >
                  <View style={styles.View_I41_2980_121_0}>
                    <View style={styles.View_I41_2980_121_31}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                        }}
                        style={styles.ImageBackground_I41_2980_121_31_34_38}
                      />
                    </View>
                    <View style={styles.View_I41_2980_35_6307}>
                      <View style={styles.View_I41_2980_121_79}>
                        <View style={styles.View_I41_2980_35_6308}>
                          <Text style={styles.Text_I41_2980_35_6308}>
                            Notification Title
                          </Text>
                        </View>
                        <View style={styles.View_I41_2980_121_89}>
                          <Text style={styles.Text_I41_2980_121_89}>now</Text>
                        </View>
                      </View>
                      <View style={styles.View_I41_2980_35_6309}>
                        <Text style={styles.Text_I41_2980_35_6309}>
                          Here’s notification text.
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.TouchableOpacity_41_3010}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_7659")
                    )
                  }
                >
                  <View style={styles.View_I41_3010_121_0}>
                    <View style={styles.View_I41_3010_121_31}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2467/a116/894bf232909d2f89ca9da9c4389479ce"
                        }}
                        style={styles.ImageBackground_I41_3010_121_31_126_5063}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd8d/e116/0dc39818908291287d845db76690ef70"
                        }}
                        style={styles.ImageBackground_I41_3010_121_31_126_5072}
                      />
                    </View>
                    <View style={styles.View_I41_3010_35_6307}>
                      <View style={styles.View_I41_3010_121_79}>
                        <View style={styles.View_I41_3010_35_6308}>
                          <Text style={styles.Text_I41_3010_35_6308}>
                            Notification Title
                          </Text>
                        </View>
                        <View style={styles.View_I41_3010_121_89}>
                          <Text style={styles.Text_I41_3010_121_89}>now</Text>
                        </View>
                      </View>
                      <View style={styles.View_I41_3010_35_6309}>
                        <Text style={styles.Text_I41_3010_35_6309}>
                          Here’s notification text. This is a spot for app
                          notification text.
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.View_122_4139}>
              <View style={styles.View_122_4140}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/317b/e9a0/5cf92ebabea3b29a3c9eddd53dae329b"
                  }}
                  style={styles.ImageBackground_I122_4140_122_4126}
                />
              </View>
              <View style={styles.View_122_4141}>
                <View style={styles.View_122_4142}>
                  <Text style={styles.Text_122_4142}>Monday, June 3</Text>
                </View>
                <View style={styles.View_122_4143}>
                  <View style={styles.View_122_4144}>
                    <Text style={styles.Text_122_4144}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_122_4145}
                  />
                  <View style={styles.View_122_4146}>
                    <Text style={styles.Text_122_4146}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                  }}
                  style={styles.ImageBackground_140_11892}
                />
                <View style={styles.View_122_4148}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I122_4148_5_3003}
                  />
                  <View style={styles.View_I122_4148_5_3008}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                      }}
                      style={styles.ImageBackground_I122_4148_5_3009}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                      }}
                      style={styles.ImageBackground_I122_4148_140_7963}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                      }}
                      style={styles.ImageBackground_I122_4148_140_8168}
                    />
                  </View>
                  <View style={styles.View_I122_4148_5_3024}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                      }}
                      style={styles.ImageBackground_I122_4148_5_3025}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_122_4149}>
                <View style={styles.View_122_4150}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a138/f5f7/6dde15166999f1e08b0b9bf83e5505f2"
                    }}
                    style={styles.ImageBackground_122_4151}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11976}
                  />
                </View>
                <View style={styles.View_122_4153}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8095/232d/73eed095a226a560e16d7523043998e7"
                    }}
                    style={styles.ImageBackground_122_4154}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/299f/d585/5aba5c8572ba76de61727fd8ecf98a67"
                    }}
                    style={styles.ImageBackground_140_11977}
                  />
                </View>
              </View>
              <View style={styles.View_122_4156}>
                <View style={styles.View_I122_4156_36_10050} />
              </View>
              <View style={styles.View_122_4157}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_122_4160}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_7659")
                    )
                  }
                >
                  <View style={styles.View_I122_4160_122_5997} />
                  <View style={styles.View_I122_4160_122_5998} />
                  <View style={styles.View_I122_4160_122_5999}>
                    <View style={styles.View_I122_4160_122_5999_121_0}>
                      <View style={styles.View_I122_4160_122_5999_121_31}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                          }}
                          style={
                            styles.ImageBackground_I122_4160_122_5999_121_31_34_38
                          }
                        />
                      </View>
                      <View style={styles.View_I122_4160_122_5999_35_6307}>
                        <View style={styles.View_I122_4160_122_5999_121_79}>
                          <View style={styles.View_I122_4160_122_5999_35_6308}>
                            <Text
                              style={styles.Text_I122_4160_122_5999_35_6308}
                            >
                              Notification Title
                            </Text>
                          </View>
                          <View style={styles.View_I122_4160_122_5999_121_89}>
                            <Text style={styles.Text_I122_4160_122_5999_121_89}>
                              now
                            </Text>
                          </View>
                        </View>
                        <View style={styles.View_I122_4160_122_5999_35_6309}>
                          <Text style={styles.Text_I122_4160_122_5999_35_6309}>
                            Here’s notification text.
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.View_36_7659}>
              <View style={styles.View_36_7660}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/317b/e9a0/5cf92ebabea3b29a3c9eddd53dae329b"
                  }}
                  style={styles.ImageBackground_I36_7660_122_4126}
                />
              </View>
              <View style={styles.View_36_7661}>
                <View style={styles.View_36_7662}>
                  <Text style={styles.Text_36_7662}>Monday, June 3</Text>
                </View>
                <View style={styles.View_36_7663}>
                  <View style={styles.View_36_7664}>
                    <Text style={styles.Text_36_7664}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_36_7665}
                  />
                  <View style={styles.View_36_7666}>
                    <Text style={styles.Text_36_7666}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                  }}
                  style={styles.ImageBackground_140_11938}
                />
                <View style={styles.View_36_7670}>
                  <View style={styles.View_I36_7670_5_3008}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                      }}
                      style={styles.ImageBackground_I36_7670_5_3009}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                      }}
                      style={styles.ImageBackground_I36_7670_140_7963}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                      }}
                      style={styles.ImageBackground_I36_7670_140_8168}
                    />
                  </View>
                  <View style={styles.View_I36_7670_5_3024}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                      }}
                      style={styles.ImageBackground_I36_7670_5_3025}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_118_465}>
                <View style={styles.View_118_466}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a138/f5f7/6dde15166999f1e08b0b9bf83e5505f2"
                    }}
                    style={styles.ImageBackground_118_467}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11978}
                  />
                </View>
                <View style={styles.View_118_469}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8095/232d/73eed095a226a560e16d7523043998e7"
                    }}
                    style={styles.ImageBackground_118_470}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c30/73d4/90888e7533404b04f3037d84bee5d960"
                    }}
                    style={styles.ImageBackground_140_11979}
                  />
                </View>
              </View>
              <View style={styles.View_36_7671}>
                <View style={styles.View_I36_7671_36_10050} />
              </View>
              <View style={styles.View_36_7724} />
              <View style={styles.View_36_7672}>
                <TouchableOpacity
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca2b/4e38/45481b63702175d4cc2a8887a60a03d7"
                  }}
                  style={styles.TouchableOpacity_I36_7672_35_6311}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_7378")
                    )
                  }
                />
                <View style={styles.View_I36_7672_121_193}>
                  <View style={styles.View_I36_7672_121_193_121_0}>
                    <View style={styles.View_I36_7672_121_193_121_31}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                        }}
                        style={
                          styles.ImageBackground_I36_7672_121_193_121_31_34_38
                        }
                      />
                    </View>
                    <View style={styles.View_I36_7672_121_193_35_6307}>
                      <View style={styles.View_I36_7672_121_193_121_79}>
                        <View style={styles.View_I36_7672_121_193_35_6308}>
                          <Text style={styles.Text_I36_7672_121_193_35_6308}>
                            Notification Title
                          </Text>
                        </View>
                        <View style={styles.View_I36_7672_121_193_121_89}>
                          <Text style={styles.Text_I36_7672_121_193_121_89}>
                            now
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I36_7672_121_193_35_6309}>
                        <Text style={styles.Text_I36_7672_121_193_35_6309}>
                          Here’s notification text.
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I36_7672_35_6323}>
                  <View style={styles.View_I36_7672_35_6323_35_5356}>
                    <Text style={styles.Text_I36_7672_35_6323_35_5356}>
                      Action
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_36_10066}>
              <View style={styles.View_36_10067}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c7/815a/a737a9e84896b0eaa251363221b38803"
                  }}
                  style={styles.ImageBackground_I36_10067_5_258}
                />
              </View>
              <View style={styles.View_36_10068}>
                <View style={styles.View_36_10069}>
                  <Text style={styles.Text_36_10069}>Monday, June 3</Text>
                </View>
                <View style={styles.View_36_10070}>
                  <View style={styles.View_36_10071}>
                    <Text style={styles.Text_36_10071}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_36_10072}
                  />
                  <View style={styles.View_36_10073}>
                    <Text style={styles.Text_36_10073}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0243/0c34/ff88a73c809f46e3b542edc8d472f569"
                  }}
                  style={styles.ImageBackground_140_11893}
                />
                <View style={styles.View_36_10077}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I36_10077_71_8856}
                  />
                  <View style={styles.View_I36_10077_71_8861}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e5/3a89/9767c3360ce953968be39d8ff0e10f1a"
                      }}
                      style={styles.ImageBackground_I36_10077_71_8862}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I36_10077_140_8460}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I36_10077_140_8569}
                    />
                  </View>
                  <View style={styles.View_I36_10077_71_8877}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I36_10077_71_8878}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_118_486}>
                <View style={styles.View_118_487}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec44/8fad/7e2daf6ee53092a301432ad544bb8a85"
                    }}
                    style={styles.ImageBackground_118_488}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11980}
                  />
                </View>
                <View style={styles.View_118_490}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f993/61ab/d50532235c9286e1cf867ce2ac7d67f4"
                    }}
                    style={styles.ImageBackground_118_491}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c30/73d4/90888e7533404b04f3037d84bee5d960"
                    }}
                    style={styles.ImageBackground_140_11985}
                  />
                </View>
              </View>
              <View style={styles.View_36_10078}>
                <View style={styles.View_I36_10078_36_10050} />
              </View>
            </View>
            <View style={styles.View_36_10079}>
              <View style={styles.View_36_10080}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c7/815a/a737a9e84896b0eaa251363221b38803"
                  }}
                  style={styles.ImageBackground_I36_10080_5_258}
                />
              </View>
              <View style={styles.View_36_10081}>
                <View style={styles.View_36_10082}>
                  <Text style={styles.Text_36_10082}>Monday, June 3</Text>
                </View>
                <View style={styles.View_36_10083}>
                  <View style={styles.View_36_10084}>
                    <Text style={styles.Text_36_10084}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_36_10085}
                  />
                  <View style={styles.View_36_10086}>
                    <Text style={styles.Text_36_10086}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                  }}
                  style={styles.ImageBackground_140_11939}
                />
                <View style={styles.View_36_10090}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I36_10090_71_8856}
                  />
                  <View style={styles.View_I36_10090_71_8861}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I36_10090_71_8862}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I36_10090_140_8460}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I36_10090_140_8569}
                    />
                  </View>
                  <View style={styles.View_I36_10090_71_8877}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I36_10090_71_8878}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_118_479}>
                <View style={styles.View_118_480}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec44/8fad/7e2daf6ee53092a301432ad544bb8a85"
                    }}
                    style={styles.ImageBackground_118_481}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11990}
                  />
                </View>
                <View style={styles.View_118_483}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f993/61ab/d50532235c9286e1cf867ce2ac7d67f4"
                    }}
                    style={styles.ImageBackground_118_484}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c30/73d4/90888e7533404b04f3037d84bee5d960"
                    }}
                    style={styles.ImageBackground_140_11993}
                  />
                </View>
              </View>
              <View style={styles.View_36_10091}>
                <View style={styles.View_I36_10091_36_10050} />
              </View>
              <View style={styles.View_41_3068}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_41_3079}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_10093")
                    )
                  }
                >
                  <View style={styles.View_I41_3079_121_347}>
                    <View style={styles.View_I41_3079_121_348}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                        }}
                        style={styles.ImageBackground_I41_3079_121_348_34_38}
                      />
                    </View>
                    <View style={styles.View_I41_3079_121_349}>
                      <View style={styles.View_I41_3079_121_350}>
                        <View style={styles.View_I41_3079_121_351}>
                          <Text style={styles.Text_I41_3079_121_351}>
                            Notification Title
                          </Text>
                        </View>
                        <View style={styles.View_I41_3079_121_352}>
                          <Text style={styles.Text_I41_3079_121_352}>now</Text>
                        </View>
                      </View>
                      <View style={styles.View_I41_3079_121_353}>
                        <Text style={styles.Text_I41_3079_121_353}>
                          Here’s a spot for notification text.
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.TouchableOpacity_122_4847}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_10093")
                    )
                  }
                >
                  <View style={styles.View_I122_4847_121_347}>
                    <View style={styles.View_I122_4847_121_348}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2467/a116/894bf232909d2f89ca9da9c4389479ce"
                        }}
                        style={
                          styles.ImageBackground_I122_4847_121_348_126_5063
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd8d/e116/0dc39818908291287d845db76690ef70"
                        }}
                        style={
                          styles.ImageBackground_I122_4847_121_348_126_5072
                        }
                      />
                    </View>
                    <View style={styles.View_I122_4847_121_349}>
                      <View style={styles.View_I122_4847_121_350}>
                        <View style={styles.View_I122_4847_121_351}>
                          <Text style={styles.Text_I122_4847_121_351}>
                            Notification Title
                          </Text>
                        </View>
                        <View style={styles.View_I122_4847_121_352}>
                          <Text style={styles.Text_I122_4847_121_352}>now</Text>
                        </View>
                      </View>
                      <View style={styles.View_I122_4847_121_353}>
                        <Text style={styles.Text_I122_4847_121_353}>
                          Here’s a spot for notification text. This is a spot
                          for app notification text.
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.View_122_4243}>
              <View style={styles.View_122_4244}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c7/815a/a737a9e84896b0eaa251363221b38803"
                  }}
                  style={styles.ImageBackground_I122_4244_5_258}
                />
              </View>
              <View style={styles.View_122_4245}>
                <View style={styles.View_122_4246}>
                  <Text style={styles.Text_122_4246}>Monday, June 3</Text>
                </View>
                <View style={styles.View_122_4247}>
                  <View style={styles.View_122_4248}>
                    <Text style={styles.Text_122_4248}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_122_4249}
                  />
                  <View style={styles.View_122_4250}>
                    <Text style={styles.Text_122_4250}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                  }}
                  style={styles.ImageBackground_140_11962}
                />
                <View style={styles.View_122_4252}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                    }}
                    style={styles.ImageBackground_I122_4252_71_8856}
                  />
                  <View style={styles.View_I122_4252_71_8861}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I122_4252_71_8862}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I122_4252_140_8460}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I122_4252_140_8569}
                    />
                  </View>
                  <View style={styles.View_I122_4252_71_8877}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I122_4252_71_8878}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_122_4253}>
                <View style={styles.View_122_4254}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec44/8fad/7e2daf6ee53092a301432ad544bb8a85"
                    }}
                    style={styles.ImageBackground_122_4255}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11996}
                  />
                </View>
                <View style={styles.View_122_4257}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f993/61ab/d50532235c9286e1cf867ce2ac7d67f4"
                    }}
                    style={styles.ImageBackground_122_4258}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/299f/d585/5aba5c8572ba76de61727fd8ecf98a67"
                    }}
                    style={styles.ImageBackground_140_11997}
                  />
                </View>
              </View>
              <View style={styles.View_122_4260}>
                <View style={styles.View_I122_4260_36_10050} />
              </View>
              <View style={styles.View_122_4261}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_122_4264}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_10093")
                    )
                  }
                >
                  <View style={styles.View_I122_4264_122_3955} />
                  <View style={styles.View_I122_4264_122_3956} />
                  <View style={styles.View_I122_4264_122_3957}>
                    <View style={styles.View_I122_4264_122_3957_121_347}>
                      <View style={styles.View_I122_4264_122_3957_121_348}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                          }}
                          style={
                            styles.ImageBackground_I122_4264_122_3957_121_348_34_38
                          }
                        />
                      </View>
                      <View style={styles.View_I122_4264_122_3957_121_349}>
                        <View style={styles.View_I122_4264_122_3957_121_350}>
                          <View style={styles.View_I122_4264_122_3957_121_351}>
                            <Text
                              style={styles.Text_I122_4264_122_3957_121_351}
                            >
                              Notification Title
                            </Text>
                          </View>
                          <View style={styles.View_I122_4264_122_3957_121_352}>
                            <Text
                              style={styles.Text_I122_4264_122_3957_121_352}
                            >
                              now
                            </Text>
                          </View>
                        </View>
                        <View style={styles.View_I122_4264_122_3957_121_353}>
                          <Text style={styles.Text_I122_4264_122_3957_121_353}>
                            Here’s a spot for notification text.
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.View_36_10093}>
              <View style={styles.View_36_10094}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c7/815a/a737a9e84896b0eaa251363221b38803"
                  }}
                  style={styles.ImageBackground_I36_10094_5_258}
                />
              </View>
              <View style={styles.View_36_10095}>
                <View style={styles.View_36_10096}>
                  <Text style={styles.Text_36_10096}>Monday, June 3</Text>
                </View>
                <View style={styles.View_36_10097}>
                  <View style={styles.View_36_10098}>
                    <Text style={styles.Text_36_10098}>41</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2f/713b/65d110edbed69e087d0cc5de59927276"
                    }}
                    style={styles.ImageBackground_36_10099}
                  />
                  <View style={styles.View_36_10100}>
                    <Text style={styles.Text_36_10100}>9</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/8dc4/22ab585a155ef6938d79738c80fc8b4d"
                  }}
                  style={styles.ImageBackground_140_11963}
                />
                <View style={styles.View_36_10104}>
                  <View style={styles.View_I36_10104_71_8861}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                      }}
                      style={styles.ImageBackground_I36_10104_71_8862}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                      }}
                      style={styles.ImageBackground_I36_10104_140_8460}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                      }}
                      style={styles.ImageBackground_I36_10104_140_8569}
                    />
                  </View>
                  <View style={styles.View_I36_10104_71_8877}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                      }}
                      style={styles.ImageBackground_I36_10104_71_8878}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_118_472}>
                <View style={styles.View_118_473}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec44/8fad/7e2daf6ee53092a301432ad544bb8a85"
                    }}
                    style={styles.ImageBackground_118_474}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125c/d58c/1bfbb08e79c49814927ee2f5d5278e42"
                    }}
                    style={styles.ImageBackground_140_11998}
                  />
                </View>
                <View style={styles.View_118_476}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f993/61ab/d50532235c9286e1cf867ce2ac7d67f4"
                    }}
                    style={styles.ImageBackground_118_477}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/299f/d585/5aba5c8572ba76de61727fd8ecf98a67"
                    }}
                    style={styles.ImageBackground_140_11999}
                  />
                </View>
              </View>
              <View style={styles.View_36_10105}>
                <View style={styles.View_I36_10105_36_10050} />
              </View>
              <View style={styles.View_36_10106} />
              <View style={styles.View_36_10107}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I36_10107_35_4913}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("36_10079")
                    )
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e2/ca5a/46799e2e0932cf43c24b3477ccec1bb5"
                    }}
                    style={styles.ImageBackground_I36_10107_35_4914}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0f2/7b15/1dc09c3fb019b28043f2219595bdef35"
                    }}
                    style={styles.ImageBackground_I36_10107_140_11784}
                  />
                </TouchableOpacity>
                <View style={styles.View_I36_10107_121_355}>
                  <View style={styles.View_I36_10107_121_355_121_347}>
                    <View style={styles.View_I36_10107_121_355_121_348}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8676/61e6/085e8180bfb0887760cad217533d3e3f"
                        }}
                        style={
                          styles.ImageBackground_I36_10107_121_355_121_348_34_38
                        }
                      />
                    </View>
                    <View style={styles.View_I36_10107_121_355_121_349}>
                      <View style={styles.View_I36_10107_121_355_121_350}>
                        <View style={styles.View_I36_10107_121_355_121_351}>
                          <Text style={styles.Text_I36_10107_121_355_121_351}>
                            Notification Title
                          </Text>
                        </View>
                        <View style={styles.View_I36_10107_121_355_121_352}>
                          <Text style={styles.Text_I36_10107_121_355_121_352}>
                            now
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I36_10107_121_355_121_353}>
                        <Text style={styles.Text_I36_10107_121_355_121_353}>
                          Here’s a spot for notification text.
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I36_10107_35_6144}>
                  <View style={styles.View_I36_10107_35_6144_35_6287}>
                    <Text style={styles.Text_I36_10107_35_6144_35_6287}>
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
  View_2: { height: hp("190.5737704918033%") },
  View_140_5523: {
    width: wp("96.25292740046838%"),
    minWidth: wp("96.25292740046838%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.873536299765808%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_6686: {
    flexGrow: 1,
    width: wp("96.25292740046838%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_6686_5_19: {
    flexGrow: 1,
    width: wp("96.25292740046838%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_6686_5_20: {
    width: wp("84.45550351288055%"),
    minWidth: wp("84.45550351288055%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_6686_5_21: {
    width: wp("1.639344262295082%"),
    minWidth: wp("1.639344262295082%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I36_6686_5_22: {
    width: wp("81.87939110070258%"),
    minWidth: wp("81.87939110070258%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.576112412177986%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I36_6686_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I36_6686_5_23: {
    width: wp("10.860655737704917%"),
    minWidth: wp("10.860655737704917%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.39227166276348%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I36_6686_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I36_6686_5_24: {
    flexGrow: 1,
    width: wp("96.25292740046838%"),
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
  ImageBackground_140_5562: {
    width: wp("1.639344262295082%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_36_6687: {
    width: wp("96.25292740046838%"),
    minWidth: wp("96.25292740046838%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.873536299765808%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_6687_10_2318: {
    flexGrow: 1,
    width: wp("3.307962529274005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I36_6687_10_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I36_6687_10_2319: {
    flexGrow: 1,
    width: wp("96.25292740046838%"),
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
  View_36_6696: {
    width: wp("96.25292740046838%"),
    minWidth: wp("96.25292740046838%"),
    height: hp("134.9726775956284%"),
    minHeight: hp("134.9726775956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.873536299765808%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_6697: {
    width: wp("3.3665105386416863%"),
    minWidth: wp("3.3665105386416863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_6697: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_6698: {
    width: wp("96.25292740046838%"),
    minWidth: wp("96.25292740046838%"),
    height: hp("127.32240437158471%"),
    minHeight: hp("127.32240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_36_6699: {
    width: wp("90.54449648711945%"),
    minWidth: wp("90.54449648711945%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9367681498829039%"),
    top: hp("0%")
  },
  View_36_6700: {
    width: wp("90.54449648711945%"),
    minWidth: wp("90.54449648711945%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_6701: {
    width: wp("3.190866510538642%"),
    minWidth: wp("3.190866510538642%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_6701: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9136: {
    width: wp("3.9812646370023423%"),
    minWidth: wp("3.9812646370023423%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.914519906323186%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9137: {
    width: wp("3.9812646370023423%"),
    minWidth: wp("3.9812646370023423%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.82903981264637%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9138: {
    width: wp("3.9812646370023423%"),
    minWidth: wp("3.9812646370023423%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74355971896956%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9139: {
    width: wp("2.898126463700234%"),
    minWidth: wp("2.898126463700234%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.65807962529274%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9140: {
    width: wp("5.035128805620609%"),
    minWidth: wp("5.035128805620609%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.57259953161593%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_122_4361: {
    width: wp("3.717798594847775%"),
    minWidth: wp("3.717798594847775%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.48711943793911%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_122_4361: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_122_4362: {
    width: wp("7.142857142857142%"),
    minWidth: wp("7.142857142857142%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.40163934426229%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_122_4362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_6705: {
    width: wp("96.25292740046838%"),
    minWidth: wp("96.25292740046838%"),
    height: hp("119.67213114754098%"),
    minHeight: hp("119.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043708%")
  },
  View_36_6836: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9367681498829039%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_6825: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_6825_122_4126: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_6837: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_6838: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.190866510538642%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_36_6838: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_36_6848: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325527%")
  },
  View_36_6849: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8735362997658083%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_6849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_36_6850: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5745069159836058%"),
    top: hp("4.439890710382514%")
  },
  View_36_6851: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_6851: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11846: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346603%"),
    top: hp("8.013682547814213%")
  },
  View_36_6882: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  ImageBackground_I36_6882_5_3003: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158424%")
  },
  View_I36_6882_5_3008: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.5967803168911%"),
    top: hp("2.367580392973011%")
  },
  ImageBackground_I36_6882_5_3009: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793913%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_I36_6882_140_7963: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100711%"),
    top: hp("0%")
  },
  ImageBackground_I36_6882_140_8168: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I36_6882_5_3024: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6147540983606561%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I36_6882_5_3025: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_188: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889926%"),
    top: hp("97.26775956284153%")
  },
  View_118_143: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_272: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11964: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799912177985949%"),
    top: hp("1.7884968408469888%")
  },
  View_118_277: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.937939110070258%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_278: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11969: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37787479874121743%"),
    top: hp("1.9804073813182868%")
  },
  View_36_6907: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_6907_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5421545667447307%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_36_7378: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.851288056206089%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_7379: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_7379_122_4126: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_7380: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_7381: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1908665105386405%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_36_7381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_36_7382: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325526%")
  },
  View_36_7383: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.87353629976581%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_7383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_36_7384: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5745069159836085%"),
    top: hp("4.439890710382514%")
  },
  View_36_7385: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_7385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11891: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346601%"),
    top: hp("8.013682547814213%")
  },
  View_36_7389: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  ImageBackground_I36_7389_5_3003: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158424%")
  },
  View_I36_7389_5_3008: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.596780316891099%"),
    top: hp("2.367580392973011%")
  },
  ImageBackground_I36_7389_5_3009: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793913%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_I36_7389_140_7963: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100711%"),
    top: hp("0%")
  },
  ImageBackground_I36_7389_140_8168: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I36_7389_5_3024: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6147540983606561%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I36_7389_5_3025: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_458: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889922%"),
    top: hp("97.26775956284153%")
  },
  View_118_459: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_460: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11974: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799912177985966%"),
    top: hp("1.7884968408469888%")
  },
  View_118_462: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.937939110070257%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_463: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11975: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.377874798741221%"),
    top: hp("1.9804073813182868%")
  },
  View_36_7390: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_7390_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.542154566744731%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_41_2930: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.5136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_41_2980: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072537%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I41_2980_121_0: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29274004683840893%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_2980_121_31: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I41_2980_121_31_34_38: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I41_2980_35_6307: {
    width: wp("8.694379391100702%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2295081967213086%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I41_2980_121_79: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_2980_35_6308: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I41_2980_35_6308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I41_2980_121_89: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.962529274004684%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I41_2980_121_89: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I41_2980_35_6309: {
    width: wp("8.694379391100702%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-start"
  },
  Text_I41_2980_35_6309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  TouchableOpacity_41_3010: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072537%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I41_3010_121_0: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29274004683840893%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_3010_121_31: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I41_3010_121_31_126_5063: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
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
  ImageBackground_I41_3010_121_31_126_5072: {
    flexGrow: 1,
    width: wp("0.3747072376188684%"),
    height: hp("1.7486337755547194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6869671216334883%"),
    top: hp("2.7686780919142677%"),
    resizeMode: "cover"
  },
  View_I41_3010_35_6307: {
    width: wp("8.694379391100702%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2295081967213086%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I41_3010_121_79: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_3010_35_6308: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I41_3010_35_6308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I41_3010_121_89: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.962529274004684%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I41_3010_121_89: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I41_3010_35_6309: {
    width: wp("8.694379391100702%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-start"
  },
  Text_I41_3010_35_6309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_122_4139: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.765807962529276%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_122_4140: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I122_4140_122_4126: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_122_4141: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_4142: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.190866510538644%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_122_4142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_122_4143: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325526%")
  },
  View_122_4144: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.87353629976581%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_122_4144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_122_4145: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5745069159836085%"),
    top: hp("4.439890710382514%")
  },
  View_122_4146: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_122_4146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11892: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346605%"),
    top: hp("8.013682547814213%")
  },
  View_122_4148: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  ImageBackground_I122_4148_5_3003: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158424%")
  },
  View_I122_4148_5_3008: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.596780316891099%"),
    top: hp("2.367580392973011%")
  },
  ImageBackground_I122_4148_5_3009: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793913%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_I122_4148_140_7963: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100711%"),
    top: hp("0%")
  },
  ImageBackground_I122_4148_140_8168: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I122_4148_5_3024: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6147540983606561%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I122_4148_5_3025: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_4149: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889886%"),
    top: hp("97.26775956284153%")
  },
  View_122_4150: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_122_4151: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11976: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799912177986002%"),
    top: hp("1.7884968408469888%")
  },
  View_122_4153: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9379391100702605%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_122_4154: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11977: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37787479874122454%"),
    top: hp("1.9804073813182868%")
  },
  View_122_4156: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4156_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5421545667447276%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_122_4157: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.5136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_122_4160: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072714%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4160_122_5997: {
    flexGrow: 1,
    width: wp("9.572599531615925%"),
    height: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4683840749414543%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(245, 245, 245, 0.25)",
    overflow: "hidden"
  },
  View_I122_4160_122_5998: {
    flexGrow: 1,
    width: wp("10.040983606557377%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072714%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 0.3499999940395355)",
    overflow: "hidden"
  },
  View_I122_4160_122_5999: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I122_4160_122_5999_121_0: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29274004683840715%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4160_122_5999_121_31: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I122_4160_122_5999_121_31_34_38: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I122_4160_122_5999_35_6307: {
    width: wp("8.694379391100702%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2295081967213086%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I122_4160_122_5999_121_79: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4160_122_5999_35_6308: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_4160_122_5999_35_6308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I122_4160_122_5999_121_89: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.962529274004687%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_4160_122_5999_121_89: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I122_4160_122_5999_35_6309: {
    width: wp("8.694379391100702%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-start"
  },
  Text_I122_4160_122_5999_35_6309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_36_7659: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.68032786885246%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_7660: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_7660_122_4126: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_7661: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_7662: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1908665105386405%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_36_7662: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_36_7663: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325526%")
  },
  View_36_7664: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.87353629976581%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_7664: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_36_7665: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.574506915983605%"),
    top: hp("4.439890710382514%")
  },
  View_36_7666: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_7666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11938: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346601%"),
    top: hp("8.013682547814213%")
  },
  View_36_7670: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  View_I36_7670_5_3008: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.596780316891099%"),
    top: hp("2.367580392973011%")
  },
  ImageBackground_I36_7670_5_3009: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793913%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_I36_7670_140_7963: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100711%"),
    top: hp("0%")
  },
  ImageBackground_I36_7670_140_8168: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I36_7670_5_3024: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6147540983606561%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I36_7670_5_3025: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_465: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889957%"),
    top: hp("97.26775956284153%")
  },
  View_118_466: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_467: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11978: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799912177985931%"),
    top: hp("1.7884968408469888%")
  },
  View_118_469: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.937939110070253%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_470: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11979: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37787479874121743%"),
    top: hp("1.9804073813182868%")
  },
  View_36_7671: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_7671_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5421545667447347%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_36_7724: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.009999999776482582
  },
  View_36_7672: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072714%"),
    top: hp("33.606557377049185%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I36_7672_35_6311: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.572599531615921%"),
    top: hp("0%")
  },
  View_I36_7672_121_193: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.9180327868852345%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I36_7672_121_193_121_0: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2927400468384036%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_7672_121_193_121_31: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_7672_121_193_121_31_34_38: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I36_7672_121_193_35_6307: {
    width: wp("8.694379391100702%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2295081967213122%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I36_7672_121_193_121_79: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_7672_121_193_35_6308: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I36_7672_121_193_35_6308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I36_7672_121_193_121_89: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.962529274004687%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I36_7672_121_193_121_89: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I36_7672_121_193_35_6309: {
    width: wp("8.694379391100702%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_I36_7672_121_193_35_6309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I36_7672_35_6323: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(245, 245, 245, 0.5)"
  },
  View_I36_7672_35_6323_35_5356: {
    flexGrow: 1,
    width: wp("9.572599531615925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4683840749414543%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_I36_7672_35_6323_35_5356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_36_10066: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.594847775175644%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_10067: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_10067_5_258: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_10068: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_10069: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1908665105386333%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_36_10069: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_36_10070: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325526%")
  },
  View_36_10071: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.873536299765803%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_10071: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_36_10072: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5745069159835978%"),
    top: hp("4.439890710382514%")
  },
  View_36_10073: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_10073: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11893: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346601%"),
    top: hp("8.013682547814213%")
  },
  View_36_10077: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  ImageBackground_I36_10077_71_8856: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158424%")
  },
  View_I36_10077_71_8861: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.596780316891092%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_I36_10077_71_8862: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793984%"),
    top: hp("0.0003502017161878257%")
  },
  ImageBackground_I36_10077_140_8460: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100782%"),
    top: hp("0%")
  },
  ImageBackground_I36_10077_140_8569: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I36_10077_71_8877: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6147540983606561%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I36_10077_71_8878: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_486: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889957%"),
    top: hp("97.26775956284153%")
  },
  View_118_487: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_488: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11980: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.579991217798586%"),
    top: hp("1.7884968408469888%")
  },
  View_118_490: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.937939110070253%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_491: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11985: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37787479874121743%"),
    top: hp("1.9804073813182868%")
  },
  View_36_10078: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_10078_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5421545667447276%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_36_10079: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.50936768149883%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_10080: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_10080_5_258: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_10081: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_10082: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1908665105386333%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_36_10082: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_36_10083: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325526%")
  },
  View_36_10084: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.873536299765803%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_10084: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_36_10085: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.574506915983605%"),
    top: hp("4.439890710382514%")
  },
  View_36_10086: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_10086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11939: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346601%"),
    top: hp("8.013682547814213%")
  },
  View_36_10090: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  ImageBackground_I36_10090_71_8856: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158424%")
  },
  View_I36_10090_71_8861: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.596780316891106%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_I36_10090_71_8862: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793842%"),
    top: hp("0.0003502017161878257%")
  },
  ImageBackground_I36_10090_140_8460: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100711%"),
    top: hp("0%")
  },
  ImageBackground_I36_10090_140_8569: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I36_10090_71_8877: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6147540983606561%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I36_10090_71_8878: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_479: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889886%"),
    top: hp("97.26775956284153%")
  },
  View_118_480: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_481: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11990: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799912177985931%"),
    top: hp("1.7884968408469888%")
  },
  View_118_483: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9379391100702605%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_484: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11993: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37787479874121743%"),
    top: hp("1.9804073813182868%")
  },
  View_36_10091: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_10091_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5421545667447205%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_41_3068: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.5136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_41_3079: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072004%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I41_3079_121_347: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2927400468384036%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_3079_121_348: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I41_3079_121_348_34_38: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I41_3079_121_349: {
    width: wp("8.694379391100702%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2295081967213193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I41_3079_121_350: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_3079_121_351: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I41_3079_121_351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I41_3079_121_352: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.96252927400468%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I41_3079_121_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I41_3079_121_353: {
    width: wp("8.694379391100702%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-start"
  },
  Text_I41_3079_121_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  TouchableOpacity_122_4847: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072004%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I122_4847_121_347: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2927400468384036%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4847_121_348: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I122_4847_121_348_126_5063: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
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
  ImageBackground_I122_4847_121_348_126_5072: {
    flexGrow: 1,
    width: wp("0.3747072376188684%"),
    height: hp("1.7486337755547194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6869671216335007%"),
    top: hp("2.7686780919142677%"),
    resizeMode: "cover"
  },
  View_I122_4847_121_349: {
    width: wp("8.694379391100702%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2295081967213193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I122_4847_121_350: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4847_121_351: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_4847_121_351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I122_4847_121_352: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.96252927400468%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_4847_121_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I122_4847_121_353: {
    width: wp("8.694379391100702%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-start"
  },
  Text_I122_4847_121_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_122_4243: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.42388758782202%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_122_4244: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I122_4244_5_258: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_122_4245: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_4246: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1908665105386405%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_122_4246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_122_4247: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325533%")
  },
  View_122_4248: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.873536299765803%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_122_4248: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_122_4249: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.574506915983605%"),
    top: hp("4.439890710382514%")
  },
  View_122_4250: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_122_4250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11962: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346594%"),
    top: hp("8.013682547814213%")
  },
  View_122_4252: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  ImageBackground_I122_4252_71_8856: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158424%")
  },
  View_I122_4252_71_8861: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.596780316891099%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_I122_4252_71_8862: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793842%"),
    top: hp("0.0003502017161878257%")
  },
  ImageBackground_I122_4252_140_8460: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100711%"),
    top: hp("0%")
  },
  ImageBackground_I122_4252_140_8569: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I122_4252_71_8877: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.614754098360649%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I122_4252_71_8878: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_4253: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889957%"),
    top: hp("97.26775956284153%")
  },
  View_122_4254: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_122_4255: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11996: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799912177985931%"),
    top: hp("1.7884968408469888%")
  },
  View_122_4257: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.937939110070246%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_122_4258: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11997: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37787479874121743%"),
    top: hp("1.9804073813182868%")
  },
  View_122_4260: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4260_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5421545667447276%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_122_4261: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.5136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_122_4264: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747072004%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4264_122_3955: {
    flexGrow: 1,
    width: wp("9.572599531615925%"),
    height: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4683840749414543%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(37, 37, 37, 0.25)",
    overflow: "hidden"
  },
  View_I122_4264_122_3956: {
    flexGrow: 1,
    width: wp("10.040983606557377%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747073425%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.3499999940395355)",
    overflow: "hidden"
  },
  View_I122_4264_122_3957: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.5)"
  },
  View_I122_4264_122_3957_121_347: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2927400468384178%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4264_122_3957_121_348: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I122_4264_122_3957_121_348_34_38: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I122_4264_122_3957_121_349: {
    width: wp("8.694379391100702%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.229508196721298%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I122_4264_122_3957_121_350: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I122_4264_122_3957_121_351: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_4264_122_3957_121_351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I122_4264_122_3957_121_352: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9625292740046945%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I122_4264_122_3957_121_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I122_4264_122_3957_121_353: {
    width: wp("8.694379391100702%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-start"
  },
  Text_I122_4264_122_3957_121_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_36_10093: {
    width: wp("10.97775175644028%"),
    minWidth: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.3384074941452%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_10094: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_10094_5_258: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_10095: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_10096: {
    width: wp("4.596018735362998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1908665105386547%"),
    top: hp("25.956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_36_10096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_36_10097: {
    width: wp("4.215456674473068%"),
    height: hp("13.524590163934427%"),
    top: hp("13.251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.395784543325533%")
  },
  View_36_10098: {
    width: wp("2.3419203747072603%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.873536299765803%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_10098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_36_10099: {
    width: wp("0.1577908875512295%"),
    height: hp("4.757406933060109%"),
    minHeight: hp("4.757406933060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.574506915983605%"),
    top: hp("4.439890710382514%")
  },
  View_36_10100: {
    width: wp("1.405152224824356%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_10100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66,
    fontWeight: "100",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_11963: {
    width: wp("0.6874817037470726%"),
    height: hp("4.685098616803279%"),
    minHeight: hp("4.685098616803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.145135026346608%"),
    top: hp("8.013682547814213%")
  },
  View_36_10104: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
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
  View_I36_10104_71_8861: {
    flexGrow: 1,
    width: wp("1.95144099429843%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.596780316891113%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_I36_10104_71_8862: {
    width: wp("0.712179076755354%"),
    minWidth: wp("0.712179076755354%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2392852568793842%"),
    top: hp("0.0003502017161878257%")
  },
  ImageBackground_I36_10104_140_8460: {
    width: wp("0.4470836083280398%"),
    minWidth: wp("0.4470836083280398%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6448285641100568%"),
    top: hp("0%")
  },
  ImageBackground_I36_10104_140_8569: {
    width: wp("0.4976580796252928%"),
    minWidth: wp("0.4976580796252928%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_I36_10104_71_8877: {
    flexGrow: 1,
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6147540983606632%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I36_10104_71_8878: {
    width: wp("1.5807962529274004%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_472: {
    flexGrow: 1,
    width: wp("8.401639344262295%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2880562060889957%"),
    top: hp("97.26775956284153%")
  },
  View_118_473: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_474: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11998: {
    width: wp("0.3037749743852459%"),
    height: hp("3.136406570184426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799912177985931%"),
    top: hp("1.7884968408469888%")
  },
  View_118_476: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9379391100702605%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_118_477: {
    width: wp("1.4637002341920375%"),
    minWidth: wp("1.4637002341920375%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_140_11999: {
    width: wp("0.7372246413934427%"),
    height: hp("2.6713386910860657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37787479874121743%"),
    top: hp("1.9804073813182868%")
  },
  View_36_10105: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_10105_36_10050: {
    flexGrow: 1,
    width: wp("3.9227166276346606%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.542154566744742%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_36_10106: {
    flexGrow: 1,
    width: wp("10.97775175644028%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.009999999776482582
  },
  View_36_10107: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23419203747073425%"),
    top: hp("33.606557377049185%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I36_10107_35_4913: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.572599531615921%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_10107_35_4914: {
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_10107_140_11784: {
    width: wp("0.3035855795795521%"),
    height: hp("1.4167342681050952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3165823514344339%"),
    top: hp("1.5356845543032591%")
  },
  View_I36_10107_121_355: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.9180327868852345%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I36_10107_121_355_121_347: {
    flexGrow: 1,
    width: wp("9.923887587822014%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2927400468384036%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_10107_121_355_121_348: {
    width: wp("0.936768149882904%"),
    minWidth: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_10107_121_355_121_348_34_38: {
    flexGrow: 1,
    width: wp("0.936768149882904%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I36_10107_121_355_121_349: {
    width: wp("8.694379391100702%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2295081967213122%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I36_10107_121_355_121_350: {
    width: wp("8.694379391100702%"),
    minWidth: wp("8.694379391100702%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_10107_121_355_121_351: {
    width: wp("7.669789227166277%"),
    minWidth: wp("7.669789227166277%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I36_10107_121_355_121_351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I36_10107_121_355_121_352: {
    width: wp("0.7318501170960188%"),
    minWidth: wp("0.7318501170960188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.96252927400468%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I36_10107_121_355_121_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I36_10107_121_355_121_353: {
    width: wp("8.694379391100702%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_I36_10107_121_355_121_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I36_10107_35_6144: {
    flexGrow: 1,
    width: wp("10.50936768149883%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(24, 24, 24, 0.699999988079071)"
  },
  View_I36_10107_35_6144_35_6287: {
    flexGrow: 1,
    width: wp("9.572599531615925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4683840749414401%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_I36_10107_35_6144_35_6287: {
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
