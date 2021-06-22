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
      <View style={styles.View_140_5506}>
        <View style={styles.View_5_1939}>
          <View style={styles.View_I5_1939_5_19}>
            <View style={styles.View_I5_1939_5_20}>
              <View style={styles.View_I5_1939_5_21} />
              <View style={styles.View_I5_1939_5_22}>
                <Text style={styles.Text_I5_1939_5_22}>
                  Status Bar &amp; Home Indicator
                </Text>
              </View>
            </View>
            <View style={styles.View_I5_1939_5_23}>
              <Text style={styles.Text_I5_1939_5_23}>
                Human Interface Guidelines: Status Bars
              </Text>
            </View>
          </View>
          <View style={styles.View_I5_1939_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d32/ec53/b10d4e8dbc201dd3e4246f1950d692a8"
          }}
          style={styles.ImageBackground_140_5528}
        />
      </View>
      <View style={styles.View_10_2332}>
        <View style={styles.View_I10_2332_10_2304}>
          <Text style={styles.Text_I10_2332_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I10_2332_10_2303} />
      </View>
      <View style={styles.View_5_3752}>
        <View style={styles.View_5_3448}>
          <Text style={styles.Text_5_3448}>Time</Text>
        </View>
        <View style={styles.View_5_1940}>
          <View style={styles.View_5_3742}>
            <View style={styles.View_5_3743}>
              <View style={styles.View_5_3744}>
                <Text style={styles.Text_5_3744}>Light / Default</Text>
              </View>
              <View style={styles.View_5_3745}>
                <Text style={styles.Text_5_3745}>Dark / Green</Text>
              </View>
              <View style={styles.View_5_3746}>
                <Text style={styles.Text_5_3746}>Light / Blue</Text>
              </View>
              <View style={styles.View_5_3747}>
                <Text style={styles.Text_5_3747}>Light / Red</Text>
              </View>
              <View style={styles.View_5_3748}>
                <Text style={styles.Text_5_3748}>Dark / Default</Text>
              </View>
              <View style={styles.View_5_3749}>
                <Text style={styles.Text_5_3749}>Dark / Green</Text>
              </View>
              <View style={styles.View_5_3750}>
                <Text style={styles.Text_5_3750}>Dark / Blue</Text>
              </View>
              <View style={styles.View_5_3751}>
                <Text style={styles.Text_5_3751}>Dark / Red</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_5_2983}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
              }}
              style={styles.ImageBackground_5_2984}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0090/5351/251fe5844490cad68c62990553336231"
              }}
              style={styles.ImageBackground_5_2986}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/73d1/b3ccff95bcedf2a5a1877adabb4fa356"
              }}
              style={styles.ImageBackground_5_2988}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf39/e5b2/3eb1c97daa3f90b882f8993f9af0c142"
              }}
              style={styles.ImageBackground_5_2990}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
              }}
              style={styles.ImageBackground_5_2992}
            />
            <View style={styles.View_5_2994}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59cd/39fc/1bdd49ac37cf4f7a6b6266e0d89db377"
                }}
                style={styles.ImageBackground_5_3550}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6565/9814/ecb97984d065ff21745a35a5f8f06f7a"
              }}
              style={styles.ImageBackground_5_2996}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa13/99c0/cae7a5788894f22f81541d5e5cc3a06c"
              }}
              style={styles.ImageBackground_5_2998}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10_2337}>
        <View style={styles.View_I10_2337_10_2311}>
          <Text style={styles.Text_I10_2337_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I10_2337_10_2312} />
      </View>
      <View style={styles.View_5_3753}>
        <View style={styles.View_5_3924}>
          <Text style={styles.Text_5_3924}>
            Status Bar / iPhone X (or newer)
          </Text>
        </View>
        <View style={styles.View_5_3755}>
          <View style={styles.View_5_3756}>
            <View style={styles.View_5_3757}>
              <View style={styles.View_5_3758}>
                <Text style={styles.Text_5_3758}>Light / Default</Text>
              </View>
              <View style={styles.View_5_3759}>
                <Text style={styles.Text_5_3759}>Light / Phone (green)</Text>
              </View>
              <View style={styles.View_5_3760}>
                <Text style={styles.Text_5_3760}>
                  Light / Navigation (blue)
                </Text>
              </View>
              <View style={styles.View_5_3761}>
                <Text style={styles.Text_5_3761}>Light / Recording (red)</Text>
              </View>
              <View style={styles.View_5_3762}>
                <Text style={styles.Text_5_3762}>Light / Mic Active</Text>
              </View>
              <View style={styles.View_5_3763}>
                <Text style={styles.Text_5_3763}>Light / Video Active</Text>
              </View>
              <View style={styles.View_71_8849}>
                <Text style={styles.Text_71_8849}>Dark / Default</Text>
              </View>
              <View style={styles.View_71_8850}>
                <Text style={styles.Text_71_8850}>Dark / Phone (green)</Text>
              </View>
              <View style={styles.View_71_8851}>
                <Text style={styles.Text_71_8851}>
                  Dark / Navigation (blue)
                </Text>
              </View>
              <View style={styles.View_71_8852}>
                <Text style={styles.Text_71_8852}>Dark / Recording (red)</Text>
              </View>
              <View style={styles.View_71_8853}>
                <Text style={styles.Text_71_8853}>Dark / Mic Active</Text>
              </View>
              <View style={styles.View_71_8854}>
                <Text style={styles.Text_71_8854}>Dark / Video Active</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_5_3001}>
            <View style={styles.View_5_3002}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_5_3003}
              />
              <View style={styles.View_5_3008}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                  }}
                  style={styles.ImageBackground_5_3009}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                  }}
                  style={styles.ImageBackground_140_7963}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                  }}
                  style={styles.ImageBackground_140_8168}
                />
              </View>
              <View style={styles.View_5_3024}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                  }}
                  style={styles.ImageBackground_5_3025}
                />
              </View>
            </View>
            <View style={styles.View_5_3026}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_36_8829}
              />
              <View style={styles.View_36_8834}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                  }}
                  style={styles.ImageBackground_36_8835}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                  }}
                  style={styles.ImageBackground_140_8407}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                  }}
                  style={styles.ImageBackground_140_8420}
                />
              </View>
              <View style={styles.View_36_8850}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0090/5351/251fe5844490cad68c62990553336231"
                  }}
                  style={styles.ImageBackground_36_8851}
                />
              </View>
            </View>
            <View style={styles.View_5_3028}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_36_8929}
              />
              <View style={styles.View_36_8934}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                  }}
                  style={styles.ImageBackground_36_8935}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ec9/d1a9/26e3d3c84389bc4553d81f36e8c06405"
                  }}
                  style={styles.ImageBackground_140_8456}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                  }}
                  style={styles.ImageBackground_140_8457}
                />
              </View>
              <View style={styles.View_36_8950}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/73d1/b3ccff95bcedf2a5a1877adabb4fa356"
                  }}
                  style={styles.ImageBackground_36_8951}
                />
              </View>
            </View>
            <View style={styles.View_5_3030}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_36_8954}
              />
              <View style={styles.View_36_8959}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                  }}
                  style={styles.ImageBackground_36_8960}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                  }}
                  style={styles.ImageBackground_140_8458}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                  }}
                  style={styles.ImageBackground_140_8459}
                />
              </View>
              <View style={styles.View_36_8975}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf39/e5b2/3eb1c97daa3f90b882f8993f9af0c142"
                  }}
                  style={styles.ImageBackground_36_8976}
                />
              </View>
            </View>
            <View style={styles.View_5_3032}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_36_8904}
              />
              <View style={styles.View_36_8909}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                  }}
                  style={styles.ImageBackground_36_8910}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                  }}
                  style={styles.ImageBackground_36_8914}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                  }}
                  style={styles.ImageBackground_36_8918}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87f9/aa13/253400e6e68ef625430d00f998f3bd68"
                  }}
                  style={styles.ImageBackground_36_8923}
                />
              </View>
              <View style={styles.View_36_8925}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                  }}
                  style={styles.ImageBackground_36_8926}
                />
              </View>
            </View>
            <View style={styles.View_5_3034}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_36_8979}
              />
              <View style={styles.View_36_8984}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
                  }}
                  style={styles.ImageBackground_36_8985}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                  }}
                  style={styles.ImageBackground_36_8989}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                  }}
                  style={styles.ImageBackground_36_8993}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7556/bc71/95db167f619e561a3694d8169ca8abf2"
                  }}
                  style={styles.ImageBackground_36_8998}
                />
              </View>
              <View style={styles.View_36_9000}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
                  }}
                  style={styles.ImageBackground_36_9001}
                />
              </View>
            </View>
            <View style={styles.View_71_8855}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_71_8856}
              />
              <View style={styles.View_71_8861}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                  }}
                  style={styles.ImageBackground_71_8862}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                  }}
                  style={styles.ImageBackground_140_8460}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                  }}
                  style={styles.ImageBackground_140_8569}
                />
              </View>
              <View style={styles.View_71_8877}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                  }}
                  style={styles.ImageBackground_71_8878}
                />
              </View>
            </View>
            <View style={styles.View_71_8879}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_71_8880}
              />
              <View style={styles.View_71_8885}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                  }}
                  style={styles.ImageBackground_71_8886}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                  }}
                  style={styles.ImageBackground_140_8697}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                  }}
                  style={styles.ImageBackground_140_8696}
                />
              </View>
              <View style={styles.View_71_8901}>
                <View style={styles.View_71_8902}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59cd/39fc/1bdd49ac37cf4f7a6b6266e0d89db377"
                    }}
                    style={styles.ImageBackground_I71_8902_5_3550}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_71_8903}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_71_8904}
              />
              <View style={styles.View_71_8909}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                  }}
                  style={styles.ImageBackground_71_8910}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                  }}
                  style={styles.ImageBackground_140_8699}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                  }}
                  style={styles.ImageBackground_140_8698}
                />
              </View>
              <View style={styles.View_71_8925}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6565/9814/ecb97984d065ff21745a35a5f8f06f7a"
                  }}
                  style={styles.ImageBackground_71_8926}
                />
              </View>
            </View>
            <View style={styles.View_71_8927}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_71_8928}
              />
              <View style={styles.View_71_8933}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                  }}
                  style={styles.ImageBackground_71_8934}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                  }}
                  style={styles.ImageBackground_140_8700}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                  }}
                  style={styles.ImageBackground_140_8701}
                />
              </View>
              <View style={styles.View_71_8949}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa13/99c0/cae7a5788894f22f81541d5e5cc3a06c"
                  }}
                  style={styles.ImageBackground_71_8950}
                />
              </View>
            </View>
            <View style={styles.View_71_8951}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_71_8952}
              />
              <View style={styles.View_71_8957}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                  }}
                  style={styles.ImageBackground_71_8958}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                  }}
                  style={styles.ImageBackground_140_8702}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                  }}
                  style={styles.ImageBackground_140_8703}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65b5/4198/2461dcf99ddccc8c21c63c3202e06cb8"
                  }}
                  style={styles.ImageBackground_71_8971}
                />
              </View>
              <View style={styles.View_71_8973}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                  }}
                  style={styles.ImageBackground_71_8974}
                />
              </View>
            </View>
            <View style={styles.View_71_8975}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                }}
                style={styles.ImageBackground_71_8976}
              />
              <View style={styles.View_71_8981}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                  }}
                  style={styles.ImageBackground_71_8982}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                  }}
                  style={styles.ImageBackground_140_8705}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                  }}
                  style={styles.ImageBackground_140_8704}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edf2/9632/879956f175753bb2a79d5008755ce0fd"
                  }}
                  style={styles.ImageBackground_71_8995}
                />
              </View>
              <View style={styles.View_71_8997}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                  }}
                  style={styles.ImageBackground_71_8998}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_4591}>
        <View style={styles.View_5_4258}>
          <Text style={styles.Text_5_4258}>
            Status Bar / iPhone 6, 7, 8, SE
          </Text>
        </View>
        <View style={styles.View_5_4259}>
          <View style={styles.View_5_4260}>
            <View style={styles.View_5_4261}>
              <View style={styles.View_5_4262}>
                <Text style={styles.Text_5_4262}>Light</Text>
              </View>
              <View style={styles.View_5_4263}>
                <Text style={styles.Text_5_4263}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_5_4274}>
            <View style={styles.View_5_3052}>
              <View style={styles.View_5_3053}>
                <Text style={styles.Text_5_3053}>9:41 AM</Text>
              </View>
              <View style={styles.View_5_3054}>
                <View style={styles.View_5_3055}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
                    }}
                    style={styles.ImageBackground_5_3056}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
                    }}
                    style={styles.ImageBackground_5_3059}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
                    }}
                    style={styles.ImageBackground_5_3060}
                  />
                </View>
                <View style={styles.View_5_3061}>
                  <Text style={styles.Text_5_3061}>100%</Text>
                </View>
                <View style={styles.View_5_3062}>
                  <View style={styles.View_5_3063}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                      }}
                      style={styles.ImageBackground_5_3064}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                      }}
                      style={styles.ImageBackground_5_3067}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                      }}
                      style={styles.ImageBackground_5_3068}
                    />
                  </View>
                </View>
                <View style={styles.View_5_3069}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
                    }}
                    style={styles.ImageBackground_5_3070}
                  />
                </View>
              </View>
              <View style={styles.View_5_3074}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/186d/3095/62bf1f3b41ecb59529b6acb78931ae13"
                  }}
                  style={styles.ImageBackground_5_3075}
                />
                <View style={styles.View_5_3081}>
                  <Text style={styles.Text_5_3081}>Figma</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21d/6aa1/93671107ace7e7340c5bb378b49ee691"
                  }}
                  style={styles.ImageBackground_5_3082}
                />
              </View>
            </View>
            <View style={styles.View_5_3087}>
              <View style={styles.View_36_9152}>
                <Text style={styles.Text_36_9152}>9:41 AM</Text>
              </View>
              <View style={styles.View_36_9153}>
                <View style={styles.View_36_9154}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                    }}
                    style={styles.ImageBackground_36_9155}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                    }}
                    style={styles.ImageBackground_36_9158}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                    }}
                    style={styles.ImageBackground_36_9159}
                  />
                </View>
                <View style={styles.View_36_9160}>
                  <Text style={styles.Text_36_9160}>100%</Text>
                </View>
                <View style={styles.View_36_9161}>
                  <View style={styles.View_36_9162}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                      }}
                      style={styles.ImageBackground_36_9163}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                      }}
                      style={styles.ImageBackground_36_9166}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                      }}
                      style={styles.ImageBackground_36_9167}
                    />
                  </View>
                </View>
                <View style={styles.View_36_9168}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                    }}
                    style={styles.ImageBackground_36_9169}
                  />
                </View>
              </View>
              <View style={styles.View_36_9173}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ca/c392/93507333b2830d532141b471263f3b49"
                  }}
                  style={styles.ImageBackground_36_9174}
                />
                <View style={styles.View_36_9180}>
                  <Text style={styles.Text_36_9180}>Figma</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f47/86cc/82c0eba82d2286b450d596c19d33b521"
                  }}
                  style={styles.ImageBackground_36_9181}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_4592}>
        <View style={styles.View_5_4593}>
          <Text style={styles.Text_5_4593}>Home Indicator</Text>
        </View>
        <View style={styles.View_5_4594}>
          <View style={styles.View_5_4595}>
            <View style={styles.View_5_4596}>
              <View style={styles.View_5_4597}>
                <Text style={styles.Text_5_4597}>Light</Text>
              </View>
              <View style={styles.View_5_4598}>
                <Text style={styles.Text_5_4598}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_5_4599}>
            <View style={styles.View_5_3092}>
              <View style={styles.View_5_3093} />
            </View>
            <View style={styles.View_5_3094}>
              <View style={styles.View_36_10050} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("361.88524590163934%") },
  View_140_5506: {
    width: wp("89.2436974789916%"),
    minWidth: wp("89.2436974789916%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504202%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1939: {
    flexGrow: 1,
    width: wp("89.2436974789916%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1939_5_19: {
    flexGrow: 1,
    width: wp("89.2436974789916%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1939_5_20: {
    width: wp("56.97478991596638%"),
    minWidth: wp("56.97478991596638%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1939_5_21: {
    width: wp("4.705882352941177%"),
    minWidth: wp("4.705882352941177%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1939_5_22: {
    width: wp("49.57983193277311%"),
    minWidth: wp("49.57983193277311%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.394957983193276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_1939_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1939_5_23: {
    width: wp("29.57983193277311%"),
    minWidth: wp("29.57983193277311%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.66386554621848%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I5_1939_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_1939_5_24: {
    flexGrow: 1,
    width: wp("89.2436974789916%"),
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
  ImageBackground_140_5528: {
    width: wp("4.705882352941177%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_2332: {
    width: wp("89.2436974789916%"),
    minWidth: wp("89.2436974789916%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504202%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2332_10_2304: {
    flexGrow: 1,
    width: wp("5.966386554621849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2332_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2332_10_2303: {
    flexGrow: 1,
    width: wp("89.2436974789916%"),
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
  View_5_3752: {
    width: wp("24.03361344537815%"),
    minWidth: wp("24.03361344537815%"),
    height: hp("69.94535519125684%"),
    minHeight: hp("69.94535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504202%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_3448: {
    width: wp("3.865546218487395%"),
    minWidth: wp("3.865546218487395%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_3448: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_1940: {
    width: wp("24.03361344537815%"),
    minWidth: wp("24.03361344537815%"),
    height: hp("62.295081967213115%"),
    minHeight: hp("62.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_5_3742: {
    width: wp("11.428571428571429%"),
    minWidth: wp("11.428571428571429%"),
    height: hp("53.96174863387978%"),
    minHeight: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.605042016806722%"),
    top: hp("4.234972677595621%")
  },
  View_5_3743: {
    width: wp("11.428571428571429%"),
    minWidth: wp("11.428571428571429%"),
    height: hp("53.96174863387978%"),
    minHeight: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3744: {
    width: wp("11.428571428571429%"),
    minWidth: wp("11.428571428571429%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_3744: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3745: {
    width: wp("9.159663865546218%"),
    minWidth: wp("9.159663865546218%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    justifyContent: "center"
  },
  Text_5_3745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3746: {
    width: wp("9.159663865546218%"),
    minWidth: wp("9.159663865546218%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.480874316939904%"),
    justifyContent: "center"
  },
  Text_5_3746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3747: {
    width: wp("8.319327731092436%"),
    minWidth: wp("8.319327731092436%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.721311475409834%"),
    justifyContent: "center"
  },
  Text_5_3747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3748: {
    width: wp("10.672268907563025%"),
    minWidth: wp("10.672268907563025%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.96174863387978%"),
    justifyContent: "center"
  },
  Text_5_3748: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3749: {
    width: wp("9.159663865546218%"),
    minWidth: wp("9.159663865546218%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.20218579234974%"),
    justifyContent: "center"
  },
  Text_5_3749: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3750: {
    width: wp("8.319327731092436%"),
    minWidth: wp("8.319327731092436%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.44262295081968%"),
    justifyContent: "center"
  },
  Text_5_3750: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3751: {
    width: wp("7.563025210084033%"),
    minWidth: wp("7.563025210084033%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.68306010928961%"),
    justifyContent: "center"
  },
  Text_5_3751: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_2983: {
    width: wp("9.915966386554622%"),
    minWidth: wp("9.915966386554622%"),
    height: hp("62.295081967213115%"),
    minHeight: hp("62.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_2984: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("4.371584699453557%")
  },
  ImageBackground_5_2986: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("11.612021857923494%")
  },
  ImageBackground_5_2988: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("18.85245901639344%")
  },
  ImageBackground_5_2990: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("26.092896174863384%")
  },
  ImageBackground_5_2992: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("33.33333333333333%")
  },
  View_5_2994: {
    width: wp("4.53781512605042%"),
    minWidth: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("40.57377049180327%"),
    backgroundColor: "rgba(50, 215, 75, 1)"
  },
  ImageBackground_5_3550: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_2996: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("47.81420765027323%")
  },
  ImageBackground_5_2998: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("55.05464480874316%")
  },
  View_10_2337: {
    width: wp("89.2436974789916%"),
    minWidth: wp("89.2436974789916%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504202%"),
    top: hp("125.5464480874317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2337_10_2311: {
    flexGrow: 1,
    width: wp("9.411764705882353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2337_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2337_10_2312: {
    flexGrow: 1,
    width: wp("89.2436974789916%"),
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
  View_5_3753: {
    width: wp("58.57142857142858%"),
    minWidth: wp("58.57142857142858%"),
    height: hp("136.61202185792348%"),
    minHeight: hp("136.61202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504202%"),
    top: hp("142.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_3924: {
    width: wp("30.92436974789916%"),
    minWidth: wp("30.92436974789916%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_3924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3755: {
    width: wp("58.57142857142858%"),
    minWidth: wp("58.57142857142858%"),
    height: hp("128.96174863387978%"),
    minHeight: hp("128.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_5_3756: {
    width: wp("18.991596638655462%"),
    minWidth: wp("18.991596638655462%"),
    height: hp("117.4863387978142%"),
    minHeight: hp("117.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.57983193277311%"),
    top: hp("5.73770491803279%")
  },
  View_5_3757: {
    width: wp("18.991596638655462%"),
    minWidth: wp("18.991596638655462%"),
    height: hp("117.4863387978142%"),
    minHeight: hp("117.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3758: {
    width: wp("11.428571428571429%"),
    minWidth: wp("11.428571428571429%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_3758: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3759: {
    width: wp("15.966386554621847%"),
    minWidth: wp("15.966386554621847%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.38251366120221%"),
    justifyContent: "center"
  },
  Text_5_3759: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3760: {
    width: wp("18.991596638655462%"),
    minWidth: wp("18.991596638655462%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.765027322404364%"),
    justifyContent: "center"
  },
  Text_5_3760: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3761: {
    width: wp("17.478991596638654%"),
    minWidth: wp("17.478991596638654%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606575%"),
    justifyContent: "center"
  },
  Text_5_3761: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3762: {
    width: wp("13.69747899159664%"),
    minWidth: wp("13.69747899159664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480876%"),
    justifyContent: "center"
  },
  Text_5_3762: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3763: {
    width: wp("15.210084033613445%"),
    minWidth: wp("15.210084033613445%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.91256830601094%"),
    justifyContent: "center"
  },
  Text_5_3763: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8849: {
    width: wp("10.672268907563025%"),
    minWidth: wp("10.672268907563025%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.29508196721312%"),
    justifyContent: "center"
  },
  Text_71_8849: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8850: {
    width: wp("15.210084033613445%"),
    minWidth: wp("15.210084033613445%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72.6775956284153%"),
    justifyContent: "center"
  },
  Text_71_8850: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8851: {
    width: wp("18.235294117647058%"),
    minWidth: wp("18.235294117647058%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.06010928961751%"),
    justifyContent: "center"
  },
  Text_71_8851: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8852: {
    width: wp("16.72268907563025%"),
    minWidth: wp("16.72268907563025%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.4426229508197%"),
    justifyContent: "center"
  },
  Text_71_8852: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8853: {
    width: wp("12.941176470588237%"),
    minWidth: wp("12.941176470588237%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.82513661202185%"),
    justifyContent: "center"
  },
  Text_71_8853: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8854: {
    width: wp("14.453781512605044%"),
    minWidth: wp("14.453781512605044%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114.20765027322406%"),
    justifyContent: "center"
  },
  Text_71_8854: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_3001: {
    width: wp("36.89075630252101%"),
    minWidth: wp("36.89075630252101%"),
    height: hp("128.96174863387978%"),
    minHeight: hp("128.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3002: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_3003: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158282%")
  },
  View_5_3008: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.367580392973025%")
  },
  ImageBackground_5_3009: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_140_7963: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8168: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_5_3024: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_5_3025: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3026: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("14.754098360655746%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_8829: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158282%")
  },
  View_36_8834: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.367580392973025%")
  },
  ImageBackground_36_8835: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003668779883696516%")
  },
  ImageBackground_140_8407: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8420: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_36_8850: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_36_8851: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3028: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("25.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_8929: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_36_8934: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_36_8935: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_140_8456: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8457: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.045859748548508605%")
  },
  View_36_8950: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_36_8951: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3030: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_8954: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158282%")
  },
  View_36_8959: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_36_8960: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003335254440059998%")
  },
  ImageBackground_140_8458: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8459: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.045859748548508605%")
  },
  View_36_8975: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_36_8976: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3032: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("45.90163934426232%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_8904: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_36_8909: {
    flexGrow: 1,
    width: wp("5.601796382615546%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677857471113448%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_36_8910: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.55743664653361%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_36_8914: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("1.274667541837431%")
  },
  ImageBackground_36_8918: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  ImageBackground_36_8923: {
    width: wp("0.5042016806722689%"),
    minWidth: wp("0.5042016806722689%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3641593356092372%"),
    top: hp("0%")
  },
  View_36_8925: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_36_8926: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3034: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("56.284153005464475%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_8979: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_36_8984: {
    flexGrow: 1,
    width: wp("5.601796382615546%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677857471113448%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_36_8985: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.55743664653361%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_36_8989: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("1.2746675418374593%")
  },
  ImageBackground_36_8993: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  ImageBackground_36_8998: {
    width: wp("0.5042016806722689%"),
    minWidth: wp("0.5042016806722689%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3641593356092372%"),
    top: hp("0%")
  },
  View_36_9000: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.6393442622951113%")
  },
  ImageBackground_36_9001: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8855: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("66.66666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_8856: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_71_8861: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.3675970692452495%")
  },
  ImageBackground_71_8862: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_140_8460: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8569: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_71_8877: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.6393442622951113%")
  },
  ImageBackground_71_8878: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8879: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("77.04918032786887%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_8880: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_71_8885: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_71_8886: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003335254439775781%")
  },
  ImageBackground_140_8697: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8696: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109290068%")
  },
  View_71_8901: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  View_71_8902: {
    width: wp("4.53781512605042%"),
    minWidth: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(50, 215, 75, 1)"
  },
  ImageBackground_I71_8902_5_3550: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8903: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("87.43169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_8904: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_71_8909: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.367597069245221%")
  },
  ImageBackground_71_8910: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003335254439775781%")
  },
  ImageBackground_140_8699: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8698: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109287226%")
  },
  View_71_8925: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.6393442622950545%")
  },
  ImageBackground_71_8926: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8927: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("97.81420765027323%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_8928: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_71_8933: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("1.5486197393448626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("2.3675970692451926%")
  },
  ImageBackground_71_8934: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("0.0003668779883980733%")
  },
  ImageBackground_140_8700: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("0%")
  },
  ImageBackground_140_8701: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109295752%")
  },
  View_71_8949: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.6393442622951113%")
  },
  ImageBackground_71_8950: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8951: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("108.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_8952: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_71_8957: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_71_8958: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_140_8702: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("1.2746675418374593%")
  },
  ImageBackground_140_8703: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  ImageBackground_71_8971: {
    width: wp("0.5042016806722689%"),
    minWidth: wp("0.5042016806722689%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3641183035714235%"),
    top: hp("0%")
  },
  View_71_8973: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_71_8974: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_8975: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("118.57923497267763%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_8976: {
    flexGrow: 1,
    width: wp("31.512605042016805%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437158566%")
  },
  View_71_8981: {
    flexGrow: 1,
    width: wp("5.601783560103729%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.677898503151262%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_71_8982: {
    width: wp("2.0443728791565454%"),
    minWidth: wp("2.0443728791565454%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.557395614495796%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_140_8705: {
    width: wp("1.2833929462593143%"),
    minWidth: wp("1.2833929462593143%"),
    height: hp("1.4980290105434062%"),
    minHeight: hp("1.4980290105434062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8509962578781511%"),
    top: hp("1.2746675418374025%")
  },
  ImageBackground_140_8704: {
    width: wp("1.4285714285714286%"),
    minWidth: wp("1.4285714285714286%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  ImageBackground_71_8995: {
    width: wp("0.5042016806722689%"),
    minWidth: wp("0.5042016806722689%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3641183035714235%"),
    top: hp("0%")
  },
  View_71_8997: {
    flexGrow: 1,
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.764705882352942%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_71_8998: {
    width: wp("4.53781512605042%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_4591: {
    width: wp("43.36134453781513%"),
    minWidth: wp("43.36134453781513%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504202%"),
    top: hp("288.11475409836066%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_4258: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_4258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_4259: {
    width: wp("43.36134453781513%"),
    minWidth: wp("43.36134453781513%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_5_4260: {
    width: wp("3.7815126050420167%"),
    minWidth: wp("3.7815126050420167%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.57983193277311%"),
    top: hp("4.098360655737736%")
  },
  View_5_4261: {
    width: wp("3.7815126050420167%"),
    minWidth: wp("3.7815126050420167%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_4262: {
    width: wp("3.7815126050420167%"),
    minWidth: wp("3.7815126050420167%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_4262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_4263: {
    width: wp("3.0252100840336134%"),
    minWidth: wp("3.0252100840336134%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136611988%"),
    justifyContent: "center"
  },
  Text_5_4263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_4274: {
    width: wp("36.89075886702337%"),
    minWidth: wp("36.89075886702337%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3052: {
    width: wp("31.512607606519172%"),
    minWidth: wp("31.512607606519172%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_3053: {
    flexGrow: 1,
    width: wp("4.117647058823529%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.69747899159664%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_5_3053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_3054: {
    flexGrow: 1,
    width: wp("7.605042016806722%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.445378151260503%"),
    top: hp("0.4098360655737565%")
  },
  View_5_3055: {
    width: wp("2.226890756302521%"),
    minWidth: wp("2.226890756302521%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504207%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_5_3056: {
    width: wp("2.0168067226890756%"),
    minWidth: wp("2.0168067226890756%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_3059: {
    width: wp("0.12605042016806722%"),
    minWidth: wp("0.12605042016806722%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1008403361344534%"),
    top: hp("0.4507929900956924%")
  },
  ImageBackground_5_3060: {
    width: wp("1.680672268907563%"),
    minWidth: wp("1.680672268907563%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1680672268907557%"),
    top: hp("0.2732240437158566%")
  },
  View_5_3061: {
    width: wp("2.689075630252101%"),
    minWidth: wp("2.689075630252101%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4369747899159684%"),
    top: hp("0.04099027706632796%"),
    justifyContent: "flex-start"
  },
  Text_5_3061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_3062: {
    width: wp("1.1764705882352942%"),
    minWidth: wp("1.1764705882352942%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_3063: {
    width: wp("0.8403361344537815%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1680672268907557%")
  },
  ImageBackground_5_3064: {
    width: wp("0.7352941176470588%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908475288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052110688025216234%")
  },
  ImageBackground_5_3067: {
    width: wp("0.17772963067062764%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_3068: {
    width: wp("0.17814778480209223%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6621750262605026%")
  },
  View_5_3069: {
    width: wp("1.1764705882352942%"),
    minWidth: wp("1.1764705882352942%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2605042016806713%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_3070: {
    width: wp("0.5840008198714056%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686134265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25575269170168724%")
  },
  View_5_3074: {
    flexGrow: 1,
    width: wp("6.5546218487394965%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3361344537815132%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_3075: {
    width: wp("1.7647058823529411%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_3081: {
    width: wp("2.857142857142857%"),
    minWidth: wp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1008403361344534%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_3081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_5_3082: {
    width: wp("1.2605042016806722%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.294117647058824%")
  },
  View_5_3087: {
    width: wp("31.512607606519172%"),
    minWidth: wp("31.512607606519172%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_9152: {
    flexGrow: 1,
    width: wp("4.117647058823529%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.69747899159664%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_36_9152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_9153: {
    flexGrow: 1,
    width: wp("7.605042016806722%"),
    height: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.445378151260503%"),
    top: hp("0.4098360655737565%")
  },
  View_36_9154: {
    width: wp("2.226890756302521%"),
    minWidth: wp("2.226890756302521%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504207%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_36_9155: {
    width: wp("2.0168067226890756%"),
    minWidth: wp("2.0168067226890756%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_36_9158: {
    width: wp("0.12605042016806722%"),
    minWidth: wp("0.12605042016806722%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1008403361344534%"),
    top: hp("0.45079299009563556%")
  },
  ImageBackground_36_9159: {
    width: wp("1.680672268907563%"),
    minWidth: wp("1.680672268907563%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1680672268907557%"),
    top: hp("0.2732240437158566%")
  },
  View_36_9160: {
    width: wp("2.689075630252101%"),
    minWidth: wp("2.689075630252101%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4369747899159684%"),
    top: hp("0.04099027706627112%"),
    justifyContent: "flex-start"
  },
  Text_36_9160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_9161: {
    width: wp("1.1764705882352942%"),
    minWidth: wp("1.1764705882352942%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_9162: {
    width: wp("0.8403361344537815%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1680672268907557%")
  },
  ImageBackground_36_9163: {
    width: wp("0.7352941176470588%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908469604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052110688025216234%")
  },
  ImageBackground_36_9166: {
    width: wp("0.17772963067062764%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_9167: {
    width: wp("0.17814778480209223%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6621750262605026%")
  },
  View_36_9168: {
    width: wp("1.1764705882352942%"),
    minWidth: wp("1.1764705882352942%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2605042016806713%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_36_9169: {
    width: wp("0.5840008198714056%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.1529547686134265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25575269170168724%")
  },
  View_36_9173: {
    flexGrow: 1,
    width: wp("6.5546218487394965%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3361344537815132%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_9174: {
    width: wp("1.7647058823529411%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_36_9180: {
    width: wp("2.857142857142857%"),
    minWidth: wp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1008403361344534%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_9180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  ImageBackground_36_9181: {
    width: wp("1.2605042016806722%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.294117647058824%")
  },
  View_5_4592: {
    width: wp("43.36134453781513%"),
    minWidth: wp("43.36134453781513%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.378151260504202%"),
    top: hp("323.08743169398906%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_4593: {
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
  Text_5_4593: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_4594: {
    width: wp("43.36134453781513%"),
    minWidth: wp("43.36134453781513%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%")
  },
  View_5_4595: {
    width: wp("3.7815126050420167%"),
    minWidth: wp("3.7815126050420167%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.57983193277311%"),
    top: hp("4.644808743169335%")
  },
  View_5_4596: {
    width: wp("3.7815126050420167%"),
    minWidth: wp("3.7815126050420167%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_4597: {
    width: wp("3.7815126050420167%"),
    minWidth: wp("3.7815126050420167%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_4597: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_4598: {
    width: wp("3.0252100840336134%"),
    minWidth: wp("3.0252100840336134%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "center"
  },
  Text_5_4598: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_4599: {
    width: wp("36.89075630252101%"),
    minWidth: wp("36.89075630252101%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_3092: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("4.371584699453479%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_3093: {
    flexGrow: 1,
    width: wp("11.260504201680673%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.168067226890756%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_5_3094: {
    width: wp("31.512605042016805%"),
    minWidth: wp("31.512605042016805%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6890756302521%"),
    top: hp("13.387978142076463%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_10050: {
    flexGrow: 1,
    width: wp("11.260504201680673%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.168067226890756%"),
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
