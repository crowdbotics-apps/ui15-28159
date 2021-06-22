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
      <View style={styles.View_140_5508}>
        <View style={styles.View_15_2947}>
          <View style={styles.View_I15_2947_5_19}>
            <View style={styles.View_I15_2947_5_20}>
              <View style={styles.View_I15_2947_5_21} />
              <View style={styles.View_I15_2947_5_22}>
                <Text style={styles.Text_I15_2947_5_22}>Table Views</Text>
              </View>
            </View>
            <View style={styles.View_I15_2947_5_23}>
              <Text style={styles.Text_I15_2947_5_23}>
                Human Interface Guidelines: Table Rows
              </Text>
            </View>
          </View>
          <View style={styles.View_I15_2947_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71ba/0c73/c6a5893d92b2864a6f063c51dfd18a4d"
          }}
          style={styles.ImageBackground_140_5532}
        />
      </View>
      <View style={styles.View_15_2948}>
        <View style={styles.View_I15_2948_10_2311}>
          <Text style={styles.Text_I15_2948_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I15_2948_10_2312} />
      </View>
      <View style={styles.View_38_2308}>
        <View style={styles.View_38_2309}>
          <Text style={styles.Text_38_2309}>Table Row Group</Text>
        </View>
        <View style={styles.View_38_2310}>
          <View style={styles.View_38_2311}>
            <View style={styles.View_38_2312}>
              <View style={styles.View_38_2313}>
                <Text style={styles.Text_38_2313}>Dark</Text>
              </View>
              <View style={styles.View_38_2314}>
                <Text style={styles.Text_38_2314}>Light</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_38_2317}>
            <View style={styles.View_38_2303}>
              <View style={styles.View_38_2297}>
                <View style={styles.View_I38_2297_15_9730}>
                  <View style={styles.View_I38_2297_15_9731}>
                    <View style={styles.View_I38_2297_15_9732}>
                      <Text style={styles.Text_I38_2297_15_9732}>Title</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                  }}
                  style={styles.ImageBackground_I38_2297_15_66}
                />
              </View>
              <View style={styles.View_38_2330}>
                <View style={styles.View_I38_2330_15_9730}>
                  <View style={styles.View_I38_2330_15_9731}>
                    <View style={styles.View_I38_2330_15_9732}>
                      <Text style={styles.Text_I38_2330_15_9732}>Title</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                  }}
                  style={styles.ImageBackground_I38_2330_15_66}
                />
              </View>
              <View style={styles.View_38_2340}>
                <View style={styles.View_I38_2340_15_9730}>
                  <View style={styles.View_I38_2340_15_9731}>
                    <View style={styles.View_I38_2340_15_9732}>
                      <Text style={styles.Text_I38_2340_15_9732}>Title</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                  }}
                  style={styles.ImageBackground_I38_2340_15_66}
                />
              </View>
            </View>
            <View style={styles.View_38_2402}>
              <View style={styles.View_38_2403}>
                <View style={styles.View_I38_2403_125_5568}>
                  <View style={styles.View_I38_2403_125_5569}>
                    <View style={styles.View_I38_2403_125_5570}>
                      <Text style={styles.Text_I38_2403_125_5570}>Title</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                  }}
                  style={styles.ImageBackground_I38_2403_125_5571}
                />
              </View>
              <View style={styles.View_38_2404}>
                <View style={styles.View_I38_2404_125_5568}>
                  <View style={styles.View_I38_2404_125_5569}>
                    <View style={styles.View_I38_2404_125_5570}>
                      <Text style={styles.Text_I38_2404_125_5570}>Title</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                  }}
                  style={styles.ImageBackground_I38_2404_125_5571}
                />
              </View>
              <View style={styles.View_38_2405}>
                <View style={styles.View_I38_2405_125_5568}>
                  <View style={styles.View_I38_2405_125_5569}>
                    <View style={styles.View_I38_2405_125_5570}>
                      <Text style={styles.Text_I38_2405_125_5570}>Title</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                  }}
                  style={styles.ImageBackground_I38_2405_125_5571}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_15_2949}>
        <View style={styles.View_15_2950}>
          <Text style={styles.Text_15_2950}>Table Row</Text>
        </View>
        <View style={styles.View_15_2951}>
          <View style={styles.View_15_2952}>
            <View style={styles.View_15_2953}>
              <View style={styles.View_15_2954}>
                <Text style={styles.Text_15_2954}>Light / None</Text>
              </View>
              <View style={styles.View_21_5}>
                <Text style={styles.Text_21_5}>Light / Label</Text>
              </View>
              <View style={styles.View_21_6}>
                <Text style={styles.Text_21_6}>Light / Chevron</Text>
              </View>
              <View style={styles.View_21_7}>
                <Text style={styles.Text_21_7}>Light / Label + Chevron</Text>
              </View>
              <View style={styles.View_21_8}>
                <Text style={styles.Text_21_8}>Light / Icon</Text>
              </View>
              <View style={styles.View_21_9}>
                <Text style={styles.Text_21_9}>Light / Switch</Text>
              </View>
              <View style={styles.View_21_10}>
                <Text style={styles.Text_21_10}>Light / Icon + Chevron</Text>
              </View>
              <View style={styles.View_21_11}>
                <Text style={styles.Text_21_11}>Light / None / Delete</Text>
              </View>
              <View style={styles.View_21_12}>
                <Text style={styles.Text_21_12}>Light / Chevron / Delete</Text>
              </View>
              <View style={styles.View_21_13}>
                <Text style={styles.Text_21_13}>Light / Label / Delete</Text>
              </View>
              <View style={styles.View_125_5086}>
                <Text style={styles.Text_125_5086}>
                  Light / Label + Chevron / Delete
                </Text>
              </View>
              <View style={styles.View_21_14}>
                <Text style={styles.Text_21_14}>Light / Icon / Delete</Text>
              </View>
              <View style={styles.View_21_15}>
                <Text style={styles.Text_21_15}>Light / Switch / Delete</Text>
              </View>
              <View style={styles.View_21_16}>
                <Text style={styles.Text_21_16}>
                  Light / Icon + Chevron / Delete
                </Text>
              </View>
              <View style={styles.View_23_0}>
                <Text style={styles.Text_23_0}>
                  Light / None / Delete + Action
                </Text>
              </View>
              <View style={styles.View_23_1}>
                <Text style={styles.Text_23_1}>
                  Light / Chevron / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_5087}>
                <Text style={styles.Text_125_5087}>
                  Light / Label / Delete + Action
                </Text>
              </View>
              <View style={styles.View_23_2}>
                <Text style={styles.Text_23_2}>
                  Light / Label + Chevron / Delete + Action
                </Text>
              </View>
              <View style={styles.View_23_3}>
                <Text style={styles.Text_23_3}>
                  Light / Switch / Delete + Action
                </Text>
              </View>
              <View style={styles.View_23_4}>
                <Text style={styles.Text_23_4}>
                  Light / Icon / Delete + Action
                </Text>
              </View>
              <View style={styles.View_23_5}>
                <Text style={styles.Text_23_5}>
                  Light / Icon + Chevron / Delete + Action
                </Text>
              </View>
              <View style={styles.View_23_6}>
                <Text style={styles.Text_23_6}>Light / Destructive</Text>
              </View>
              <View style={styles.View_23_7}>
                <Text style={styles.Text_23_7}>
                  Light / Destructive / Grabber
                </Text>
              </View>
              <View style={styles.View_125_6058}>
                <Text style={styles.Text_125_6058}>Dark / None</Text>
              </View>
              <View style={styles.View_125_6059}>
                <Text style={styles.Text_125_6059}>Dark / Label</Text>
              </View>
              <View style={styles.View_125_6060}>
                <Text style={styles.Text_125_6060}>Dark / Chevron</Text>
              </View>
              <View style={styles.View_125_6061}>
                <Text style={styles.Text_125_6061}>Dark / Label + Chevron</Text>
              </View>
              <View style={styles.View_125_6062}>
                <Text style={styles.Text_125_6062}>Dark / Icon</Text>
              </View>
              <View style={styles.View_125_6063}>
                <Text style={styles.Text_125_6063}>Dark / Switch</Text>
              </View>
              <View style={styles.View_125_6064}>
                <Text style={styles.Text_125_6064}>Dark / Icon + Chevron</Text>
              </View>
              <View style={styles.View_125_6065}>
                <Text style={styles.Text_125_6065}>Dark / None / Delete</Text>
              </View>
              <View style={styles.View_125_6066}>
                <Text style={styles.Text_125_6066}>
                  Dark / Chevron / Delete
                </Text>
              </View>
              <View style={styles.View_125_6067}>
                <Text style={styles.Text_125_6067}>Dark / Label / Delete</Text>
              </View>
              <View style={styles.View_125_6068}>
                <Text style={styles.Text_125_6068}>
                  Dark / Label + Chevron / Delete
                </Text>
              </View>
              <View style={styles.View_125_6069}>
                <Text style={styles.Text_125_6069}>Dark / Icon / Delete</Text>
              </View>
              <View style={styles.View_125_6070}>
                <Text style={styles.Text_125_6070}>Dark / Switch / Delete</Text>
              </View>
              <View style={styles.View_125_6071}>
                <Text style={styles.Text_125_6071}>
                  Dark / Icon + Chevron / Delete
                </Text>
              </View>
              <View style={styles.View_125_6072}>
                <Text style={styles.Text_125_6072}>
                  Dark / None / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_6073}>
                <Text style={styles.Text_125_6073}>
                  Dark / Chevron / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_6074}>
                <Text style={styles.Text_125_6074}>
                  Dark / Label / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_6075}>
                <Text style={styles.Text_125_6075}>
                  Dark / Label + Chevron / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_6076}>
                <Text style={styles.Text_125_6076}>
                  Dark / Switch / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_6077}>
                <Text style={styles.Text_125_6077}>
                  Dark / Icon / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_6078}>
                <Text style={styles.Text_125_6078}>
                  Dark / Icon + Chevron / Delete + Action
                </Text>
              </View>
              <View style={styles.View_125_6079}>
                <Text style={styles.Text_125_6079}>Dark / Destructive</Text>
              </View>
              <View style={styles.View_125_6080}>
                <Text style={styles.Text_125_6080}>
                  Dark / Destructive / Grabber
                </Text>
              </View>
            </View>
            <View style={styles.View_21_1}>
              <View style={styles.View_21_0}>
                <Text style={styles.Text_21_0}>Label</Text>
              </View>
              <View style={styles.View_21_4}>
                <Text style={styles.Text_21_4}>Action</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_15_2958}>
            <View style={styles.View_15_64}>
              <View style={styles.View_15_9730}>
                <View style={styles.View_15_9731}>
                  <View style={styles.View_15_9732}>
                    <Text style={styles.Text_15_9732}>Title</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_66}
              />
            </View>
            <View style={styles.View_15_12446}>
              <View style={styles.View_15_12447}>
                <View style={styles.View_15_12448}>
                  <View style={styles.View_15_12449}>
                    <Text style={styles.Text_15_12449}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_15_12450}>
                  <View style={styles.View_16_7434}>
                    <Text style={styles.Text_16_7434}>Label</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_12457}
              />
            </View>
            <View style={styles.View_16_7421}>
              <View style={styles.View_16_7422}>
                <View style={styles.View_16_7423}>
                  <View style={styles.View_16_7424}>
                    <Text style={styles.Text_16_7424}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                  }}
                  style={styles.ImageBackground_16_7425}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7432}
              />
            </View>
            <View style={styles.View_16_7435}>
              <View style={styles.View_16_7436}>
                <View style={styles.View_16_7437}>
                  <View style={styles.View_16_7438}>
                    <Text style={styles.Text_16_7438}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7439}>
                  <View style={styles.View_16_7440}>
                    <Text style={styles.Text_16_7440}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                    }}
                    style={styles.ImageBackground_16_7447}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7446}
              />
            </View>
            <View style={styles.View_15_9692}>
              <View style={styles.View_15_9693}>
                <View style={styles.View_15_9694}>
                  <View style={styles.View_15_9695}>
                    <Text style={styles.Text_15_9695}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99b/c476/8e4a29d9bab50f497f6a001721f23df6"
                  }}
                  style={styles.ImageBackground_15_9696}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_9703}
              />
            </View>
            <View style={styles.View_16_6920}>
              <View style={styles.View_16_6921}>
                <View style={styles.View_16_6922}>
                  <View style={styles.View_16_6923}>
                    <Text style={styles.Text_16_6923}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_6924}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cc/28a5/3a8b44fbfc53c0fe51682fad6c4d3699"
                    }}
                    style={styles.TouchableOpacity_16_6932}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2586")
                      )
                    }
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_6931}
              />
            </View>
            <View style={styles.View_15_9254}>
              <View style={styles.View_15_9255}>
                <View style={styles.View_15_9256}>
                  <View style={styles.View_15_9257}>
                    <Text style={styles.Text_15_9257}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ac/71ef/014d99f7d41179a9416c26aecc20ba5e"
                  }}
                  style={styles.ImageBackground_15_9258}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_9260}
              />
            </View>
            <View style={styles.View_15_12354}>
              <View style={styles.View_15_12355}>
                <View style={styles.View_15_12356}>
                  <View style={styles.View_15_12357}>
                    <Text style={styles.Text_15_12357}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_15_12358}>
                  <View style={styles.View_15_12361}>
                    <View style={styles.View_15_12362}>
                      <Text style={styles.Text_15_12362}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_12363}
              />
            </View>
            <View style={styles.View_15_12458}>
              <View style={styles.View_15_12459}>
                <View style={styles.View_15_12460}>
                  <View style={styles.View_15_12461}>
                    <Text style={styles.Text_15_12461}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                  }}
                  style={styles.ImageBackground_15_12462}
                />
                <View style={styles.View_15_12464}>
                  <View style={styles.View_15_12467}>
                    <View style={styles.View_15_12468}>
                      <Text style={styles.Text_15_12468}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_12469}
              />
            </View>
            <View style={styles.View_125_5072}>
              <View style={styles.View_125_5073}>
                <View style={styles.View_125_5074}>
                  <View style={styles.View_125_5075}>
                    <Text style={styles.Text_125_5075}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5076}>
                  <View style={styles.View_125_5077}>
                    <View style={styles.View_125_5078}>
                      <Text style={styles.Text_125_5078}>Label</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_125_5080}>
                  <View style={styles.View_125_5083}>
                    <View style={styles.View_125_5084}>
                      <Text style={styles.Text_125_5084}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_125_5085}
              />
            </View>
            <View style={styles.View_16_7449}>
              <View style={styles.View_16_7450}>
                <View style={styles.View_16_7451}>
                  <View style={styles.View_16_7452}>
                    <Text style={styles.Text_16_7452}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7453}>
                  <View style={styles.View_16_7455}>
                    <View style={styles.View_16_7454}>
                      <Text style={styles.Text_16_7454}>Label</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bd5/783e/c714df5047ad94ca231996e33c2c0d6a"
                      }}
                      style={styles.ImageBackground_140_9683}
                    />
                  </View>
                </View>
                <View style={styles.View_16_7457}>
                  <View style={styles.View_16_7460}>
                    <View style={styles.View_16_7461}>
                      <Text style={styles.Text_16_7461}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7462}
              />
            </View>
            <View style={styles.View_15_9704}>
              <View style={styles.View_15_9705}>
                <View style={styles.View_15_9706}>
                  <View style={styles.View_15_9707}>
                    <Text style={styles.Text_15_9707}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99b/c476/8e4a29d9bab50f497f6a001721f23df6"
                  }}
                  style={styles.ImageBackground_15_9708}
                />
                <View style={styles.View_15_9710}>
                  <View style={styles.View_15_9713}>
                    <View style={styles.View_15_9714}>
                      <Text style={styles.Text_15_9714}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_9715}
              />
            </View>
            <View style={styles.View_16_6935}>
              <View style={styles.View_16_6936}>
                <View style={styles.View_16_6937}>
                  <View style={styles.View_16_6938}>
                    <Text style={styles.Text_16_6938}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_6939}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cc/28a5/3a8b44fbfc53c0fe51682fad6c4d3699"
                    }}
                    style={styles.TouchableOpacity_16_6940}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2586")
                      )
                    }
                  />
                </View>
                <View style={styles.View_16_6941}>
                  <View style={styles.View_16_6944}>
                    <View style={styles.View_16_6945}>
                      <Text style={styles.Text_16_6945}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_6946}
              />
            </View>
            <View style={styles.View_15_12420}>
              <View style={styles.View_15_12421}>
                <View style={styles.View_15_12422}>
                  <View style={styles.View_15_12423}>
                    <Text style={styles.Text_15_12423}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ac/71ef/014d99f7d41179a9416c26aecc20ba5e"
                  }}
                  style={styles.ImageBackground_15_12424}
                />
                <View style={styles.View_15_12436}>
                  <View style={styles.View_15_12439}>
                    <View style={styles.View_15_12440}>
                      <Text style={styles.Text_15_12440}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_12427}
              />
            </View>
            <View style={styles.View_15_12344}>
              <View style={styles.View_15_12345}>
                <View style={styles.View_15_12346}>
                  <View style={styles.View_15_12347}>
                    <Text style={styles.Text_15_12347}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_15_12348}>
                  <View style={styles.View_15_12349}>
                    <View style={styles.View_15_12350}>
                      <Text style={styles.Text_15_12350}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_15_12351}>
                    <View style={styles.View_15_12352}>
                      <Text style={styles.Text_15_12352}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_12353}
              />
            </View>
            <View style={styles.View_15_12470}>
              <View style={styles.View_15_12471}>
                <View style={styles.View_15_12472}>
                  <View style={styles.View_15_12473}>
                    <Text style={styles.Text_15_12473}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                  }}
                  style={styles.ImageBackground_15_12474}
                />
                <View style={styles.View_15_12476}>
                  <View style={styles.View_15_12477}>
                    <View style={styles.View_15_12478}>
                      <Text style={styles.Text_15_12478}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_15_12479}>
                    <View style={styles.View_15_12480}>
                      <Text style={styles.Text_15_12480}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_12481}
              />
            </View>
            <View style={styles.View_16_7463}>
              <View style={styles.View_16_7464}>
                <View style={styles.View_16_7465}>
                  <View style={styles.View_16_7466}>
                    <Text style={styles.Text_16_7466}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7467}>
                  <View style={styles.View_16_7469}>
                    <View style={styles.View_16_7468}>
                      <Text style={styles.Text_16_7468}>Label</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bd5/783e/c714df5047ad94ca231996e33c2c0d6a"
                      }}
                      style={styles.ImageBackground_140_9692}
                    />
                  </View>
                </View>
                <View style={styles.View_16_7471}>
                  <View style={styles.View_16_7472}>
                    <View style={styles.View_16_7473}>
                      <Text style={styles.Text_16_7473}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_7474}>
                    <View style={styles.View_16_7475}>
                      <Text style={styles.Text_16_7475}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7476}
              />
            </View>
            <View style={styles.View_125_5058}>
              <View style={styles.View_125_5059}>
                <View style={styles.View_125_5060}>
                  <View style={styles.View_125_5061}>
                    <Text style={styles.Text_125_5061}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5062}>
                  <View style={styles.View_125_5064}>
                    <View style={styles.View_125_5063}>
                      <Text style={styles.Text_125_5063}>Label</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_125_5066}>
                  <View style={styles.View_125_5067}>
                    <View style={styles.View_125_5068}>
                      <Text style={styles.Text_125_5068}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5069}>
                    <View style={styles.View_125_5070}>
                      <Text style={styles.Text_125_5070}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_125_5071}
              />
            </View>
            <View style={styles.View_16_6949}>
              <View style={styles.View_16_6950}>
                <View style={styles.View_16_6951}>
                  <View style={styles.View_16_6952}>
                    <Text style={styles.Text_16_6952}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_6953}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cc/28a5/3a8b44fbfc53c0fe51682fad6c4d3699"
                    }}
                    style={styles.TouchableOpacity_16_6954}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2586")
                      )
                    }
                  />
                </View>
                <View style={styles.View_16_6955}>
                  <View style={styles.View_16_6956}>
                    <View style={styles.View_16_6957}>
                      <Text style={styles.Text_16_6957}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_6958}>
                    <View style={styles.View_16_6959}>
                      <Text style={styles.Text_16_6959}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_6960}
              />
            </View>
            <View style={styles.View_15_9373}>
              <View style={styles.View_15_9374}>
                <View style={styles.View_15_9375}>
                  <View style={styles.View_15_9376}>
                    <Text style={styles.Text_15_9376}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99b/c476/8e4a29d9bab50f497f6a001721f23df6"
                  }}
                  style={styles.ImageBackground_15_9377}
                />
                <View style={styles.View_15_9639}>
                  <View style={styles.View_15_9559}>
                    <View style={styles.View_15_9593}>
                      <Text style={styles.Text_15_9593}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_15_9621}>
                    <View style={styles.View_15_9622}>
                      <Text style={styles.Text_15_9622}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_9380}
              />
            </View>
            <View style={styles.View_15_12428}>
              <View style={styles.View_15_12429}>
                <View style={styles.View_15_12430}>
                  <View style={styles.View_15_12431}>
                    <Text style={styles.Text_15_12431}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ac/71ef/014d99f7d41179a9416c26aecc20ba5e"
                  }}
                  style={styles.ImageBackground_15_12432}
                />
                <View style={styles.View_15_12441}>
                  <View style={styles.View_15_12442}>
                    <View style={styles.View_15_12443}>
                      <Text style={styles.Text_15_12443}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_15_12444}>
                    <View style={styles.View_15_12445}>
                      <Text style={styles.Text_15_12445}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_15_12435}
              />
            </View>
            <View style={styles.View_16_7045}>
              <View style={styles.View_16_7046}>
                <View style={styles.View_16_7047}>
                  <View style={styles.View_16_7048}>
                    <Text style={styles.Text_16_7048}>Title</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7054}
              />
            </View>
            <View style={styles.View_16_7911}>
              <View style={styles.View_16_7912}>
                <View style={styles.View_16_7913}>
                  <View style={styles.View_16_7921}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/028e/4b67/3ff2ce4a0c5c63e0b50ddfea29e87e0f"
                      }}
                      style={styles.ImageBackground_16_7922}
                    />
                    <View style={styles.View_16_7923} />
                  </View>
                  <View style={styles.View_16_7914}>
                    <Text style={styles.Text_16_7914}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408a/2697/c78a461a5a4d47cdf75089332be0e10b"
                  }}
                  style={styles.ImageBackground_16_7935}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7920}
              />
            </View>
            <View style={styles.View_16_7895}>
              <View style={styles.View_16_7896}>
                <View style={styles.View_16_7897}>
                  <View style={styles.View_16_7898}>
                    <Text style={styles.Text_16_7898}>Title</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7904}
              />
            </View>
            <View style={styles.View_16_7883}>
              <View style={styles.View_16_7884}>
                <View style={styles.View_16_7885}>
                  <View style={styles.View_16_7886}>
                    <Text style={styles.Text_16_7886}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7887}>
                  <View style={styles.View_16_7888}>
                    <Text style={styles.Text_16_7888}>Label</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7894}
              />
            </View>
            <View style={styles.View_16_7859}>
              <View style={styles.View_16_7860}>
                <View style={styles.View_16_7861}>
                  <View style={styles.View_16_7862}>
                    <Text style={styles.Text_16_7862}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                  }}
                  style={styles.ImageBackground_16_7863}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7870}
              />
            </View>
            <View style={styles.View_16_7831}>
              <View style={styles.View_16_7832}>
                <View style={styles.View_16_7833}>
                  <View style={styles.View_16_7834}>
                    <Text style={styles.Text_16_7834}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7835}>
                  <View style={styles.View_16_7836}>
                    <Text style={styles.Text_16_7836}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                    }}
                    style={styles.ImageBackground_16_7837}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7844}
              />
            </View>
            <View style={styles.View_16_7871}>
              <View style={styles.View_16_7872}>
                <View style={styles.View_16_7873}>
                  <View style={styles.View_16_7874}>
                    <Text style={styles.Text_16_7874}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99b/c476/8e4a29d9bab50f497f6a001721f23df6"
                  }}
                  style={styles.ImageBackground_16_7875}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7882}
              />
            </View>
            <View style={styles.View_16_7819}>
              <View style={styles.View_16_7820}>
                <View style={styles.View_16_7821}>
                  <View style={styles.View_16_7822}>
                    <Text style={styles.Text_16_7822}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7823}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cc/28a5/3a8b44fbfc53c0fe51682fad6c4d3699"
                    }}
                    style={styles.TouchableOpacity_16_7824}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2586")
                      )
                    }
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7830}
              />
            </View>
            <View style={styles.View_16_7787}>
              <View style={styles.View_16_7788}>
                <View style={styles.View_16_7789}>
                  <View style={styles.View_16_7790}>
                    <Text style={styles.Text_16_7790}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ac/71ef/014d99f7d41179a9416c26aecc20ba5e"
                  }}
                  style={styles.ImageBackground_16_7791}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7794}
              />
            </View>
            <View style={styles.View_16_7777}>
              <View style={styles.View_16_7778}>
                <View style={styles.View_16_7779}>
                  <View style={styles.View_16_7780}>
                    <Text style={styles.Text_16_7780}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7781}>
                  <View style={styles.View_16_7784}>
                    <View style={styles.View_16_7785}>
                      <Text style={styles.Text_16_7785}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7786}
              />
            </View>
            <View style={styles.View_16_7807}>
              <View style={styles.View_16_7808}>
                <View style={styles.View_16_7809}>
                  <View style={styles.View_16_7810}>
                    <Text style={styles.Text_16_7810}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                  }}
                  style={styles.ImageBackground_16_7811}
                />
                <View style={styles.View_16_7813}>
                  <View style={styles.View_16_7816}>
                    <View style={styles.View_16_7817}>
                      <Text style={styles.Text_16_7817}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7818}
              />
            </View>
            <View style={styles.View_125_5031}>
              <View style={styles.View_125_5032}>
                <View style={styles.View_125_5033}>
                  <View style={styles.View_125_5034}>
                    <Text style={styles.Text_125_5034}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5035}>
                  <View style={styles.View_125_5036}>
                    <Text style={styles.Text_125_5036}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_125_5039}>
                  <View style={styles.View_125_5042}>
                    <View style={styles.View_125_5043}>
                      <Text style={styles.Text_125_5043}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_125_5044}
              />
            </View>
            <View style={styles.View_16_7845}>
              <View style={styles.View_16_7846}>
                <View style={styles.View_16_7847}>
                  <View style={styles.View_16_7848}>
                    <Text style={styles.Text_16_7848}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7849}>
                  <View style={styles.View_16_7850}>
                    <Text style={styles.Text_16_7850}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                    }}
                    style={styles.ImageBackground_16_7851}
                  />
                </View>
                <View style={styles.View_16_7853}>
                  <View style={styles.View_16_7856}>
                    <View style={styles.View_16_7857}>
                      <Text style={styles.Text_16_7857}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7858}
              />
            </View>
            <View style={styles.View_16_7765}>
              <View style={styles.View_16_7766}>
                <View style={styles.View_16_7767}>
                  <View style={styles.View_16_7768}>
                    <Text style={styles.Text_16_7768}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99b/c476/8e4a29d9bab50f497f6a001721f23df6"
                  }}
                  style={styles.ImageBackground_16_7769}
                />
                <View style={styles.View_16_7771}>
                  <View style={styles.View_16_7774}>
                    <View style={styles.View_16_7775}>
                      <Text style={styles.Text_16_7775}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7776}
              />
            </View>
            <View style={styles.View_16_7753}>
              <View style={styles.View_16_7754}>
                <View style={styles.View_16_7755}>
                  <View style={styles.View_16_7756}>
                    <Text style={styles.Text_16_7756}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7757}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cc/28a5/3a8b44fbfc53c0fe51682fad6c4d3699"
                    }}
                    style={styles.TouchableOpacity_16_7758}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2586")
                      )
                    }
                  />
                </View>
                <View style={styles.View_16_7759}>
                  <View style={styles.View_16_7762}>
                    <View style={styles.View_16_7763}>
                      <Text style={styles.Text_16_7763}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7764}
              />
            </View>
            <View style={styles.View_16_7728}>
              <View style={styles.View_16_7729}>
                <View style={styles.View_16_7730}>
                  <View style={styles.View_16_7731}>
                    <Text style={styles.Text_16_7731}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ac/71ef/014d99f7d41179a9416c26aecc20ba5e"
                  }}
                  style={styles.ImageBackground_16_7732}
                />
                <View style={styles.View_16_7735}>
                  <View style={styles.View_16_7738}>
                    <View style={styles.View_16_7739}>
                      <Text style={styles.Text_16_7739}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7740}
              />
            </View>
            <View style={styles.View_16_7718}>
              <View style={styles.View_16_7719}>
                <View style={styles.View_16_7720}>
                  <View style={styles.View_16_7721}>
                    <Text style={styles.Text_16_7721}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7722}>
                  <View style={styles.View_16_7723}>
                    <View style={styles.View_16_7724}>
                      <Text style={styles.Text_16_7724}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_7725}>
                    <View style={styles.View_16_7726}>
                      <Text style={styles.Text_16_7726}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7727}
              />
            </View>
            <View style={styles.View_16_7693}>
              <View style={styles.View_16_7694}>
                <View style={styles.View_16_7695}>
                  <View style={styles.View_16_7696}>
                    <Text style={styles.Text_16_7696}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                  }}
                  style={styles.ImageBackground_16_7697}
                />
                <View style={styles.View_16_7699}>
                  <View style={styles.View_16_7700}>
                    <View style={styles.View_16_7701}>
                      <Text style={styles.Text_16_7701}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_7702}>
                    <View style={styles.View_16_7703}>
                      <Text style={styles.Text_16_7703}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7704}
              />
            </View>
            <View style={styles.View_125_5045}>
              <View style={styles.View_125_5046}>
                <View style={styles.View_125_5047}>
                  <View style={styles.View_125_5048}>
                    <Text style={styles.Text_125_5048}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5049}>
                  <View style={styles.View_125_5057}>
                    <Text style={styles.Text_125_5057}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_125_5051}>
                  <View style={styles.View_125_5052}>
                    <View style={styles.View_125_5053}>
                      <Text style={styles.Text_125_5053}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5054}>
                    <View style={styles.View_125_5055}>
                      <Text style={styles.Text_125_5055}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_125_5056}
              />
            </View>
            <View style={styles.View_16_7679}>
              <View style={styles.View_16_7680}>
                <View style={styles.View_16_7681}>
                  <View style={styles.View_16_7682}>
                    <Text style={styles.Text_16_7682}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7683}>
                  <View style={styles.View_16_7684}>
                    <Text style={styles.Text_16_7684}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b268/bec8/3a073b5ea0e6cb3a816d7c1f8d4bf660"
                    }}
                    style={styles.ImageBackground_16_7685}
                  />
                </View>
                <View style={styles.View_16_7687}>
                  <View style={styles.View_16_7688}>
                    <View style={styles.View_16_7689}>
                      <Text style={styles.Text_16_7689}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_7690}>
                    <View style={styles.View_16_7691}>
                      <Text style={styles.Text_16_7691}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7692}
              />
            </View>
            <View style={styles.View_16_7741}>
              <View style={styles.View_16_7742}>
                <View style={styles.View_16_7743}>
                  <View style={styles.View_16_7744}>
                    <Text style={styles.Text_16_7744}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_16_7745}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cc/28a5/3a8b44fbfc53c0fe51682fad6c4d3699"
                    }}
                    style={styles.TouchableOpacity_16_7746}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2586")
                      )
                    }
                  />
                </View>
                <View style={styles.View_16_7747}>
                  <View style={styles.View_16_7748}>
                    <View style={styles.View_16_7749}>
                      <Text style={styles.Text_16_7749}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_7750}>
                    <View style={styles.View_16_7751}>
                      <Text style={styles.Text_16_7751}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7752}
              />
            </View>
            <View style={styles.View_16_7795}>
              <View style={styles.View_16_7796}>
                <View style={styles.View_16_7797}>
                  <View style={styles.View_16_7798}>
                    <Text style={styles.Text_16_7798}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99b/c476/8e4a29d9bab50f497f6a001721f23df6"
                  }}
                  style={styles.ImageBackground_16_7799}
                />
                <View style={styles.View_16_7801}>
                  <View style={styles.View_16_7802}>
                    <View style={styles.View_16_7803}>
                      <Text style={styles.Text_16_7803}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_7804}>
                    <View style={styles.View_16_7805}>
                      <Text style={styles.Text_16_7805}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7806}
              />
            </View>
            <View style={styles.View_16_7705}>
              <View style={styles.View_16_7706}>
                <View style={styles.View_16_7707}>
                  <View style={styles.View_16_7708}>
                    <Text style={styles.Text_16_7708}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ac/71ef/014d99f7d41179a9416c26aecc20ba5e"
                  }}
                  style={styles.ImageBackground_16_7709}
                />
                <View style={styles.View_16_7712}>
                  <View style={styles.View_16_7713}>
                    <View style={styles.View_16_7714}>
                      <Text style={styles.Text_16_7714}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_16_7715}>
                    <View style={styles.View_16_7716}>
                      <Text style={styles.Text_16_7716}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25d/fe0b/18ef34eed4076104b2d7d0d75aec03cd"
                }}
                style={styles.ImageBackground_16_7717}
              />
            </View>
            <View style={styles.View_125_5567}>
              <View style={styles.View_125_5568}>
                <View style={styles.View_125_5569}>
                  <View style={styles.View_125_5570}>
                    <Text style={styles.Text_125_5570}>Title</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5571}
              />
            </View>
            <View style={styles.View_125_5572}>
              <View style={styles.View_125_5573}>
                <View style={styles.View_125_5574}>
                  <View style={styles.View_125_5575}>
                    <Text style={styles.Text_125_5575}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5576}>
                  <View style={styles.View_125_5577}>
                    <Text style={styles.Text_125_5577}>Label</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5578}
              />
            </View>
            <View style={styles.View_125_5579}>
              <View style={styles.View_125_5580}>
                <View style={styles.View_125_5581}>
                  <View style={styles.View_125_5582}>
                    <Text style={styles.Text_125_5582}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                  }}
                  style={styles.ImageBackground_125_5583}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5585}
              />
            </View>
            <View style={styles.View_125_5586}>
              <View style={styles.View_125_5587}>
                <View style={styles.View_125_5588}>
                  <View style={styles.View_125_5589}>
                    <Text style={styles.Text_125_5589}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5590}>
                  <View style={styles.View_125_5591}>
                    <Text style={styles.Text_125_5591}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                    }}
                    style={styles.ImageBackground_125_5592}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5594}
              />
            </View>
            <View style={styles.View_125_5595}>
              <View style={styles.View_125_5596}>
                <View style={styles.View_125_5597}>
                  <View style={styles.View_125_5598}>
                    <Text style={styles.Text_125_5598}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b9/d42d/89955dcbeb8dde3878596c818a77890c"
                  }}
                  style={styles.ImageBackground_125_5599}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5601}
              />
            </View>
            <View style={styles.View_125_5602}>
              <View style={styles.View_125_5603}>
                <View style={styles.View_125_5604}>
                  <View style={styles.View_125_5605}>
                    <Text style={styles.Text_125_5605}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5606}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0338/1ef5/bf24dc48546f3e8e6e1d655c5d3e1f46"
                    }}
                    style={styles.TouchableOpacity_125_5607}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2591")
                      )
                    }
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5613}
              />
            </View>
            <View style={styles.View_125_5614}>
              <View style={styles.View_125_5615}>
                <View style={styles.View_125_5616}>
                  <View style={styles.View_125_5617}>
                    <Text style={styles.Text_125_5617}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/c41f/e56324017a997e043a0165aa02926275"
                  }}
                  style={styles.ImageBackground_125_5618}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5621}
              />
            </View>
            <View style={styles.View_125_5622}>
              <View style={styles.View_125_5623}>
                <View style={styles.View_125_5624}>
                  <View style={styles.View_125_5625}>
                    <Text style={styles.Text_125_5625}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5626}>
                  <View style={styles.View_125_5629}>
                    <View style={styles.View_125_5630}>
                      <Text style={styles.Text_125_5630}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5631}
              />
            </View>
            <View style={styles.View_125_5632}>
              <View style={styles.View_125_5633}>
                <View style={styles.View_125_5634}>
                  <View style={styles.View_125_5635}>
                    <Text style={styles.Text_125_5635}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                  }}
                  style={styles.ImageBackground_125_5636}
                />
                <View style={styles.View_125_5638}>
                  <View style={styles.View_125_5641}>
                    <View style={styles.View_125_5642}>
                      <Text style={styles.Text_125_5642}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5643}
              />
            </View>
            <View style={styles.View_125_5644}>
              <View style={styles.View_125_5645}>
                <View style={styles.View_125_5646}>
                  <View style={styles.View_125_5647}>
                    <Text style={styles.Text_125_5647}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5648}>
                  <View style={styles.View_125_5649}>
                    <View style={styles.View_125_5650}>
                      <Text style={styles.Text_125_5650}>Label</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_125_5651}>
                  <View style={styles.View_125_5654}>
                    <View style={styles.View_125_5655}>
                      <Text style={styles.Text_125_5655}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5656}
              />
            </View>
            <View style={styles.View_125_5657}>
              <View style={styles.View_125_5658}>
                <View style={styles.View_125_5659}>
                  <View style={styles.View_125_5660}>
                    <Text style={styles.Text_125_5660}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5661}>
                  <View style={styles.View_125_5662}>
                    <View style={styles.View_125_5663}>
                      <Text style={styles.Text_125_5663}>Label</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2d/dbcf/73f55ca328f919ec1ba8eb5658df3a49"
                      }}
                      style={styles.ImageBackground_140_9717}
                    />
                  </View>
                </View>
                <View style={styles.View_125_5665}>
                  <View style={styles.View_125_5668}>
                    <View style={styles.View_125_5669}>
                      <Text style={styles.Text_125_5669}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5670}
              />
            </View>
            <View style={styles.View_125_5671}>
              <View style={styles.View_125_5672}>
                <View style={styles.View_125_5673}>
                  <View style={styles.View_125_5674}>
                    <Text style={styles.Text_125_5674}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b9/d42d/89955dcbeb8dde3878596c818a77890c"
                  }}
                  style={styles.ImageBackground_125_5675}
                />
                <View style={styles.View_125_5677}>
                  <View style={styles.View_125_5680}>
                    <View style={styles.View_125_5681}>
                      <Text style={styles.Text_125_5681}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5682}
              />
            </View>
            <View style={styles.View_125_5683}>
              <View style={styles.View_125_5684}>
                <View style={styles.View_125_5685}>
                  <View style={styles.View_125_5686}>
                    <Text style={styles.Text_125_5686}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5687}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0338/1ef5/bf24dc48546f3e8e6e1d655c5d3e1f46"
                    }}
                    style={styles.TouchableOpacity_125_5688}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2591")
                      )
                    }
                  />
                </View>
                <View style={styles.View_125_5689}>
                  <View style={styles.View_125_5692}>
                    <View style={styles.View_125_5693}>
                      <Text style={styles.Text_125_5693}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5694}
              />
            </View>
            <View style={styles.View_125_5695}>
              <View style={styles.View_125_5696}>
                <View style={styles.View_125_5697}>
                  <View style={styles.View_125_5698}>
                    <Text style={styles.Text_125_5698}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/c41f/e56324017a997e043a0165aa02926275"
                  }}
                  style={styles.ImageBackground_125_5699}
                />
                <View style={styles.View_125_5702}>
                  <View style={styles.View_125_5705}>
                    <View style={styles.View_125_5706}>
                      <Text style={styles.Text_125_5706}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5707}
              />
            </View>
            <View style={styles.View_125_5708}>
              <View style={styles.View_125_5709}>
                <View style={styles.View_125_5710}>
                  <View style={styles.View_125_5711}>
                    <Text style={styles.Text_125_5711}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5712}>
                  <View style={styles.View_125_5713}>
                    <View style={styles.View_125_5714}>
                      <Text style={styles.Text_125_5714}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5715}>
                    <View style={styles.View_125_5716}>
                      <Text style={styles.Text_125_5716}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5717}
              />
            </View>
            <View style={styles.View_125_5718}>
              <View style={styles.View_125_5719}>
                <View style={styles.View_125_5720}>
                  <View style={styles.View_125_5721}>
                    <Text style={styles.Text_125_5721}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                  }}
                  style={styles.ImageBackground_125_5722}
                />
                <View style={styles.View_125_5724}>
                  <View style={styles.View_125_5725}>
                    <View style={styles.View_125_5726}>
                      <Text style={styles.Text_125_5726}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5727}>
                    <View style={styles.View_125_5728}>
                      <Text style={styles.Text_125_5728}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5729}
              />
            </View>
            <View style={styles.View_125_5730}>
              <View style={styles.View_125_5731}>
                <View style={styles.View_125_5732}>
                  <View style={styles.View_125_5733}>
                    <Text style={styles.Text_125_5733}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5734}>
                  <View style={styles.View_125_5735}>
                    <View style={styles.View_125_5736}>
                      <Text style={styles.Text_125_5736}>Label</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd2d/dbcf/73f55ca328f919ec1ba8eb5658df3a49"
                      }}
                      style={styles.ImageBackground_140_9727}
                    />
                  </View>
                </View>
                <View style={styles.View_125_5738}>
                  <View style={styles.View_125_5739}>
                    <View style={styles.View_125_5740}>
                      <Text style={styles.Text_125_5740}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5741}>
                    <View style={styles.View_125_5742}>
                      <Text style={styles.Text_125_5742}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5743}
              />
            </View>
            <View style={styles.View_125_5744}>
              <View style={styles.View_125_5745}>
                <View style={styles.View_125_5746}>
                  <View style={styles.View_125_5747}>
                    <Text style={styles.Text_125_5747}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5748}>
                  <View style={styles.View_125_5749}>
                    <View style={styles.View_125_5750}>
                      <Text style={styles.Text_125_5750}>Label</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_125_5751}>
                  <View style={styles.View_125_5752}>
                    <View style={styles.View_125_5753}>
                      <Text style={styles.Text_125_5753}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5754}>
                    <View style={styles.View_125_5755}>
                      <Text style={styles.Text_125_5755}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5756}
              />
            </View>
            <View style={styles.View_125_5757}>
              <View style={styles.View_125_5758}>
                <View style={styles.View_125_5759}>
                  <View style={styles.View_125_5760}>
                    <Text style={styles.Text_125_5760}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5761}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0338/1ef5/bf24dc48546f3e8e6e1d655c5d3e1f46"
                    }}
                    style={styles.TouchableOpacity_125_5762}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2591")
                      )
                    }
                  />
                </View>
                <View style={styles.View_125_5763}>
                  <View style={styles.View_125_5764}>
                    <View style={styles.View_125_5765}>
                      <Text style={styles.Text_125_5765}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5766}>
                    <View style={styles.View_125_5767}>
                      <Text style={styles.Text_125_5767}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5768}
              />
            </View>
            <View style={styles.View_125_5769}>
              <View style={styles.View_125_5770}>
                <View style={styles.View_125_5771}>
                  <View style={styles.View_125_5772}>
                    <Text style={styles.Text_125_5772}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b9/d42d/89955dcbeb8dde3878596c818a77890c"
                  }}
                  style={styles.ImageBackground_125_5773}
                />
                <View style={styles.View_125_5775}>
                  <View style={styles.View_125_5776}>
                    <View style={styles.View_125_5777}>
                      <Text style={styles.Text_125_5777}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5778}>
                    <View style={styles.View_125_5779}>
                      <Text style={styles.Text_125_5779}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5780}
              />
            </View>
            <View style={styles.View_125_5781}>
              <View style={styles.View_125_5782}>
                <View style={styles.View_125_5783}>
                  <View style={styles.View_125_5784}>
                    <Text style={styles.Text_125_5784}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/c41f/e56324017a997e043a0165aa02926275"
                  }}
                  style={styles.ImageBackground_125_5785}
                />
                <View style={styles.View_125_5788}>
                  <View style={styles.View_125_5789}>
                    <View style={styles.View_125_5790}>
                      <Text style={styles.Text_125_5790}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5791}>
                    <View style={styles.View_125_5792}>
                      <Text style={styles.Text_125_5792}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5793}
              />
            </View>
            <View style={styles.View_125_5794}>
              <View style={styles.View_125_5795}>
                <View style={styles.View_125_5796}>
                  <View style={styles.View_125_5797}>
                    <Text style={styles.Text_125_5797}>Title</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5798}
              />
            </View>
            <View style={styles.View_125_5799}>
              <View style={styles.View_125_5800}>
                <View style={styles.View_125_5801}>
                  <View style={styles.View_125_5802}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe9/7775/c72e9051f53b9829be593ebf957f7d5c"
                      }}
                      style={styles.ImageBackground_125_5803}
                    />
                    <View style={styles.View_125_5804} />
                  </View>
                  <View style={styles.View_125_5805}>
                    <Text style={styles.Text_125_5805}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af8a/6659/9ab915e0167bb9cf09887c624a7ba20e"
                  }}
                  style={styles.ImageBackground_125_5806}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5808}
              />
            </View>
            <View style={styles.View_125_5809}>
              <View style={styles.View_125_5810}>
                <View style={styles.View_125_5811}>
                  <View style={styles.View_125_5812}>
                    <Text style={styles.Text_125_5812}>Title</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5813}
              />
            </View>
            <View style={styles.View_125_5814}>
              <View style={styles.View_125_5815}>
                <View style={styles.View_125_5816}>
                  <View style={styles.View_125_5817}>
                    <Text style={styles.Text_125_5817}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5818}>
                  <View style={styles.View_125_5819}>
                    <Text style={styles.Text_125_5819}>Label</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5820}
              />
            </View>
            <View style={styles.View_125_5821}>
              <View style={styles.View_125_5822}>
                <View style={styles.View_125_5823}>
                  <View style={styles.View_125_5824}>
                    <Text style={styles.Text_125_5824}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                  }}
                  style={styles.ImageBackground_125_5825}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5827}
              />
            </View>
            <View style={styles.View_125_5828}>
              <View style={styles.View_125_5829}>
                <View style={styles.View_125_5830}>
                  <View style={styles.View_125_5831}>
                    <Text style={styles.Text_125_5831}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5832}>
                  <View style={styles.View_125_5833}>
                    <Text style={styles.Text_125_5833}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                    }}
                    style={styles.ImageBackground_125_5834}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5836}
              />
            </View>
            <View style={styles.View_125_5837}>
              <View style={styles.View_125_5838}>
                <View style={styles.View_125_5839}>
                  <View style={styles.View_125_5840}>
                    <Text style={styles.Text_125_5840}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b9/d42d/89955dcbeb8dde3878596c818a77890c"
                  }}
                  style={styles.ImageBackground_125_5841}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5843}
              />
            </View>
            <View style={styles.View_125_5844}>
              <View style={styles.View_125_5845}>
                <View style={styles.View_125_5846}>
                  <View style={styles.View_125_5847}>
                    <Text style={styles.Text_125_5847}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5848}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0338/1ef5/bf24dc48546f3e8e6e1d655c5d3e1f46"
                    }}
                    style={styles.TouchableOpacity_125_5849}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2591")
                      )
                    }
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5855}
              />
            </View>
            <View style={styles.View_125_5856}>
              <View style={styles.View_125_5857}>
                <View style={styles.View_125_5858}>
                  <View style={styles.View_125_5859}>
                    <Text style={styles.Text_125_5859}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/c41f/e56324017a997e043a0165aa02926275"
                  }}
                  style={styles.ImageBackground_125_5860}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5863}
              />
            </View>
            <View style={styles.View_125_5864}>
              <View style={styles.View_125_5865}>
                <View style={styles.View_125_5866}>
                  <View style={styles.View_125_5867}>
                    <Text style={styles.Text_125_5867}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5868}>
                  <View style={styles.View_125_5871}>
                    <View style={styles.View_125_5872}>
                      <Text style={styles.Text_125_5872}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5873}
              />
            </View>
            <View style={styles.View_125_5874}>
              <View style={styles.View_125_5875}>
                <View style={styles.View_125_5876}>
                  <View style={styles.View_125_5877}>
                    <Text style={styles.Text_125_5877}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                  }}
                  style={styles.ImageBackground_125_5878}
                />
                <View style={styles.View_125_5880}>
                  <View style={styles.View_125_5883}>
                    <View style={styles.View_125_5884}>
                      <Text style={styles.Text_125_5884}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5885}
              />
            </View>
            <View style={styles.View_125_5886}>
              <View style={styles.View_125_5887}>
                <View style={styles.View_125_5888}>
                  <View style={styles.View_125_5889}>
                    <Text style={styles.Text_125_5889}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5890}>
                  <View style={styles.View_125_5891}>
                    <Text style={styles.Text_125_5891}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_125_5892}>
                  <View style={styles.View_125_5895}>
                    <View style={styles.View_125_5896}>
                      <Text style={styles.Text_125_5896}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5897}
              />
            </View>
            <View style={styles.View_125_5898}>
              <View style={styles.View_125_5899}>
                <View style={styles.View_125_5900}>
                  <View style={styles.View_125_5901}>
                    <Text style={styles.Text_125_5901}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5902}>
                  <View style={styles.View_125_5903}>
                    <Text style={styles.Text_125_5903}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                    }}
                    style={styles.ImageBackground_125_5904}
                  />
                </View>
                <View style={styles.View_125_5906}>
                  <View style={styles.View_125_5909}>
                    <View style={styles.View_125_5910}>
                      <Text style={styles.Text_125_5910}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5911}
              />
            </View>
            <View style={styles.View_125_5912}>
              <View style={styles.View_125_5913}>
                <View style={styles.View_125_5914}>
                  <View style={styles.View_125_5915}>
                    <Text style={styles.Text_125_5915}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b9/d42d/89955dcbeb8dde3878596c818a77890c"
                  }}
                  style={styles.ImageBackground_125_5916}
                />
                <View style={styles.View_125_5918}>
                  <View style={styles.View_125_5921}>
                    <View style={styles.View_125_5922}>
                      <Text style={styles.Text_125_5922}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5923}
              />
            </View>
            <View style={styles.View_125_5924}>
              <View style={styles.View_125_5925}>
                <View style={styles.View_125_5926}>
                  <View style={styles.View_125_5927}>
                    <Text style={styles.Text_125_5927}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5928}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0338/1ef5/bf24dc48546f3e8e6e1d655c5d3e1f46"
                    }}
                    style={styles.TouchableOpacity_125_5929}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2591")
                      )
                    }
                  />
                </View>
                <View style={styles.View_125_5930}>
                  <View style={styles.View_125_5933}>
                    <View style={styles.View_125_5934}>
                      <Text style={styles.Text_125_5934}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5935}
              />
            </View>
            <View style={styles.View_125_5936}>
              <View style={styles.View_125_5937}>
                <View style={styles.View_125_5938}>
                  <View style={styles.View_125_5939}>
                    <Text style={styles.Text_125_5939}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/c41f/e56324017a997e043a0165aa02926275"
                  }}
                  style={styles.ImageBackground_125_5940}
                />
                <View style={styles.View_125_5943}>
                  <View style={styles.View_125_5946}>
                    <View style={styles.View_125_5947}>
                      <Text style={styles.Text_125_5947}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5948}
              />
            </View>
            <View style={styles.View_125_5949}>
              <View style={styles.View_125_5950}>
                <View style={styles.View_125_5951}>
                  <View style={styles.View_125_5952}>
                    <Text style={styles.Text_125_5952}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5953}>
                  <View style={styles.View_125_5954}>
                    <View style={styles.View_125_5955}>
                      <Text style={styles.Text_125_5955}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5956}>
                    <View style={styles.View_125_5957}>
                      <Text style={styles.Text_125_5957}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5958}
              />
            </View>
            <View style={styles.View_125_5959}>
              <View style={styles.View_125_5960}>
                <View style={styles.View_125_5961}>
                  <View style={styles.View_125_5962}>
                    <Text style={styles.Text_125_5962}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                  }}
                  style={styles.ImageBackground_125_5963}
                />
                <View style={styles.View_125_5965}>
                  <View style={styles.View_125_5966}>
                    <View style={styles.View_125_5967}>
                      <Text style={styles.Text_125_5967}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5968}>
                    <View style={styles.View_125_5969}>
                      <Text style={styles.Text_125_5969}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5970}
              />
            </View>
            <View style={styles.View_125_5971}>
              <View style={styles.View_125_5972}>
                <View style={styles.View_125_5973}>
                  <View style={styles.View_125_5974}>
                    <Text style={styles.Text_125_5974}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5975}>
                  <View style={styles.View_125_5976}>
                    <Text style={styles.Text_125_5976}>Label</Text>
                  </View>
                </View>
                <View style={styles.View_125_5977}>
                  <View style={styles.View_125_5978}>
                    <View style={styles.View_125_5979}>
                      <Text style={styles.Text_125_5979}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5980}>
                    <View style={styles.View_125_5981}>
                      <Text style={styles.Text_125_5981}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5982}
              />
            </View>
            <View style={styles.View_125_5983}>
              <View style={styles.View_125_5984}>
                <View style={styles.View_125_5985}>
                  <View style={styles.View_125_5986}>
                    <Text style={styles.Text_125_5986}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_5987}>
                  <View style={styles.View_125_5988}>
                    <Text style={styles.Text_125_5988}>Label</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c4/0822/5c387b88ed2247c30d70395ea010d1e3"
                    }}
                    style={styles.ImageBackground_125_5989}
                  />
                </View>
                <View style={styles.View_125_5991}>
                  <View style={styles.View_125_5992}>
                    <View style={styles.View_125_5993}>
                      <Text style={styles.Text_125_5993}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_5994}>
                    <View style={styles.View_125_5995}>
                      <Text style={styles.Text_125_5995}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_5996}
              />
            </View>
            <View style={styles.View_125_5997}>
              <View style={styles.View_125_5998}>
                <View style={styles.View_125_5999}>
                  <View style={styles.View_125_6000}>
                    <Text style={styles.Text_125_6000}>Title</Text>
                  </View>
                </View>
                <View style={styles.View_125_6001}>
                  <TouchableOpacity
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0338/1ef5/bf24dc48546f3e8e6e1d655c5d3e1f46"
                    }}
                    style={styles.TouchableOpacity_125_6002}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("10_2591")
                      )
                    }
                  />
                </View>
                <View style={styles.View_125_6003}>
                  <View style={styles.View_125_6004}>
                    <View style={styles.View_125_6005}>
                      <Text style={styles.Text_125_6005}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_6006}>
                    <View style={styles.View_125_6007}>
                      <Text style={styles.Text_125_6007}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_6008}
              />
            </View>
            <View style={styles.View_125_6009}>
              <View style={styles.View_125_6010}>
                <View style={styles.View_125_6011}>
                  <View style={styles.View_125_6012}>
                    <Text style={styles.Text_125_6012}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b9/d42d/89955dcbeb8dde3878596c818a77890c"
                  }}
                  style={styles.ImageBackground_125_6013}
                />
                <View style={styles.View_125_6015}>
                  <View style={styles.View_125_6016}>
                    <View style={styles.View_125_6017}>
                      <Text style={styles.Text_125_6017}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_6018}>
                    <View style={styles.View_125_6019}>
                      <Text style={styles.Text_125_6019}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_6020}
              />
            </View>
            <View style={styles.View_125_6021}>
              <View style={styles.View_125_6022}>
                <View style={styles.View_125_6023}>
                  <View style={styles.View_125_6024}>
                    <Text style={styles.Text_125_6024}>Title</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/c41f/e56324017a997e043a0165aa02926275"
                  }}
                  style={styles.ImageBackground_125_6025}
                />
                <View style={styles.View_125_6028}>
                  <View style={styles.View_125_6029}>
                    <View style={styles.View_125_6030}>
                      <Text style={styles.Text_125_6030}>Action</Text>
                    </View>
                  </View>
                  <View style={styles.View_125_6031}>
                    <View style={styles.View_125_6032}>
                      <Text style={styles.Text_125_6032}>Delete</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4dd/1170/2cec75c59464112fa3afc87730a52e95"
                }}
                style={styles.ImageBackground_125_6033}
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
  View_2: { height: hp("618.4426229508197%") },
  View_140_5508: {
    width: wp("90.7044299201162%"),
    minWidth: wp("90.7044299201162%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.647785039941903%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_2947: {
    flexGrow: 1,
    width: wp("90.7044299201162%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_2947_5_19: {
    flexGrow: 1,
    width: wp("90.7044299201162%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_2947_5_20: {
    width: wp("63.471314451706604%"),
    minWidth: wp("63.471314451706604%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_2947_5_21: {
    width: wp("4.066811909949164%"),
    minWidth: wp("4.066811909949164%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I15_2947_5_22: {
    width: wp("57.08061002178649%"),
    minWidth: wp("57.08061002178649%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.390704429920115%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I15_2947_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I15_2947_5_23: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.79520697167756%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I15_2947_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I15_2947_5_24: {
    flexGrow: 1,
    width: wp("90.7044299201162%"),
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
  ImageBackground_140_5532: {
    width: wp("4.066811909949164%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2948: {
    width: wp("90.7044299201162%"),
    minWidth: wp("90.7044299201162%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.647785039941903%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_2948_10_2311: {
    flexGrow: 1,
    width: wp("8.133623819898329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I15_2948_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I15_2948_10_2312: {
    flexGrow: 1,
    width: wp("90.7044299201162%"),
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
  View_38_2308: {
    width: wp("37.47276688453159%"),
    minWidth: wp("37.47276688453159%"),
    height: hp("56.830601092896174%"),
    minHeight: hp("56.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.647785039941903%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_38_2309: {
    width: wp("12.563543936092955%"),
    minWidth: wp("12.563543936092955%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_38_2309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_38_2310: {
    width: wp("37.47276688453159%"),
    minWidth: wp("37.47276688453159%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_38_2311: {
    width: wp("3.2679738562091507%"),
    minWidth: wp("3.2679738562091507%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.20479302832244%"),
    top: hp("11.748633879781423%")
  },
  View_38_2312: {
    width: wp("3.2679738562091507%"),
    minWidth: wp("3.2679738562091507%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_38_2313: {
    width: wp("2.6143790849673203%"),
    minWidth: wp("2.6143790849673203%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.404371584699447%"),
    justifyContent: "center"
  },
  Text_38_2313: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_38_2314: {
    width: wp("3.2679738562091507%"),
    minWidth: wp("3.2679738562091507%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_38_2314: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_38_2317: {
    width: wp("31.88090050835149%"),
    minWidth: wp("31.88090050835149%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_38_2303: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_38_2297: {
    flexGrow: 1,
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_2297_15_9730: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2297_15_9731: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2297_15_9732: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I38_2297_15_9732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I38_2297_15_66: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.0109289617486255%")
  },
  View_38_2330: {
    flexGrow: 1,
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486255%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_2330_15_9730: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2330_15_9731: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2330_15_9732: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I38_2330_15_9732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I38_2330_15_66: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748633%")
  },
  View_38_2340: {
    flexGrow: 1,
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497258%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_2340_15_9730: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2340_15_9731: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2340_15_9732: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_I38_2340_15_9732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I38_2340_15_66: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748633%")
  },
  View_38_2402: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("26.775956284152997%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_38_2403: {
    flexGrow: 1,
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I38_2403_125_5568: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2403_125_5569: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2403_125_5570: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_I38_2403_125_5570: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I38_2403_125_5571: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748647%")
  },
  View_38_2404: {
    flexGrow: 1,
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748647%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I38_2404_125_5568: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2404_125_5569: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2404_125_5570: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I38_2404_125_5570: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I38_2404_125_5571: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_38_2405: {
    flexGrow: 1,
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497265%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I38_2405_125_5568: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2405_125_5569: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2405_125_5570: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "flex-start"
  },
  Text_I38_2405_125_5570: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I38_2405_125_5571: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748647%")
  },
  View_15_2949: {
    width: wp("90.7044299201162%"),
    minWidth: wp("90.7044299201162%"),
    height: hp("497.2677595628415%"),
    minHeight: hp("497.2677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.647785039941903%"),
    top: hp("112.43169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_2950: {
    width: wp("7.552650689905592%"),
    minWidth: wp("7.552650689905592%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_15_2950: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_15_2951: {
    width: wp("90.7044299201162%"),
    minWidth: wp("90.7044299201162%"),
    height: hp("489.61748633879785%"),
    minHeight: hp("489.61748633879785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_15_2952: {
    width: wp("88.38053740014524%"),
    minWidth: wp("88.38053740014524%"),
    height: hp("483.879781420765%"),
    minHeight: hp("483.879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("0%")
  },
  View_15_2953: {
    width: wp("26.94262890341322%"),
    minWidth: wp("26.94262890341322%"),
    height: hp("470.4918032786885%"),
    minHeight: hp("470.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.43790849673203%"),
    top: hp("13.387978142076491%")
  },
  View_15_2954: {
    width: wp("7.915758896151052%"),
    minWidth: wp("7.915758896151052%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_15_2954: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_5: {
    width: wp("8.569353667392884%"),
    minWidth: wp("8.569353667392884%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.38251366120221%"),
    justifyContent: "center"
  },
  Text_21_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_6: {
    width: wp("9.876543209876543%"),
    minWidth: wp("9.876543209876543%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.765027322404393%"),
    justifyContent: "center"
  },
  Text_21_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_7: {
    width: wp("15.105301379811184%"),
    minWidth: wp("15.105301379811184%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606575%"),
    justifyContent: "center"
  },
  Text_21_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_8: {
    width: wp("7.915758896151052%"),
    minWidth: wp("7.915758896151052%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.25683060109293%"),
    justifyContent: "center"
  },
  Text_21_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_9: {
    width: wp("9.222948438634713%"),
    minWidth: wp("9.222948438634713%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.63934426229508%"),
    justifyContent: "center"
  },
  Text_21_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_10: {
    width: wp("14.451706608569353%"),
    minWidth: wp("14.451706608569353%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.29508196721312%"),
    justifyContent: "center"
  },
  Text_21_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_11: {
    width: wp("13.798111837327523%"),
    minWidth: wp("13.798111837327523%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72.67759562841533%"),
    justifyContent: "center"
  },
  Text_21_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_12: {
    width: wp("15.758896151053015%"),
    minWidth: wp("15.758896151053015%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.06010928961751%"),
    justifyContent: "center"
  },
  Text_21_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_13: {
    width: wp("14.451706608569353%"),
    minWidth: wp("14.451706608569353%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.44262295081967%"),
    justifyContent: "center"
  },
  Text_21_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_5086: {
    width: wp("20.98765432098765%"),
    minWidth: wp("20.98765432098765%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.82513661202185%"),
    justifyContent: "center"
  },
  Text_125_5086: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_14: {
    width: wp("13.798111837327523%"),
    minWidth: wp("13.798111837327523%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114.20765027322406%"),
    justifyContent: "center"
  },
  Text_21_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_15: {
    width: wp("15.105301379811184%"),
    minWidth: wp("15.105301379811184%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("124.59016393442627%"),
    justifyContent: "center"
  },
  Text_21_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_16: {
    width: wp("20.334059549745824%"),
    minWidth: wp("20.334059549745824%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("134.97267759562843%"),
    justifyContent: "center"
  },
  Text_21_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_0: {
    width: wp("19.680464778503996%"),
    minWidth: wp("19.680464778503996%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("145.35519125683058%"),
    justifyContent: "center"
  },
  Text_23_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_1: {
    width: wp("21.641249092229483%"),
    minWidth: wp("21.641249092229483%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("155.7377049180328%"),
    justifyContent: "center"
  },
  Text_23_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_5087: {
    width: wp("20.334059549745824%"),
    minWidth: wp("20.334059549745824%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("166.120218579235%"),
    justifyContent: "center"
  },
  Text_125_5087: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_2: {
    width: wp("26.94262890341322%"),
    minWidth: wp("26.94262890341322%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("176.50273224043715%"),
    justifyContent: "center"
  },
  Text_23_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_3: {
    width: wp("20.98765432098765%"),
    minWidth: wp("20.98765432098765%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("186.88524590163937%"),
    justifyContent: "center"
  },
  Text_23_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_4: {
    width: wp("19.680464778503996%"),
    minWidth: wp("19.680464778503996%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("197.26775956284158%"),
    justifyContent: "center"
  },
  Text_23_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_5: {
    width: wp("26.2164124909223%"),
    minWidth: wp("26.2164124909223%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("207.65027322404373%"),
    justifyContent: "center"
  },
  Text_23_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_6: {
    width: wp("12.490922294843863%"),
    minWidth: wp("12.490922294843863%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("218.03278688524588%"),
    justifyContent: "center"
  },
  Text_23_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_7: {
    width: wp("19.026870007262165%"),
    minWidth: wp("19.026870007262165%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("228.4153005464481%"),
    justifyContent: "center"
  },
  Text_23_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6058: {
    width: wp("7.18954248366013%"),
    minWidth: wp("7.18954248366013%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("238.7978142076503%"),
    justifyContent: "center"
  },
  Text_125_6058: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6059: {
    width: wp("7.915758896151052%"),
    minWidth: wp("7.915758896151052%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249.18032786885246%"),
    justifyContent: "center"
  },
  Text_125_6059: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6060: {
    width: wp("9.222948438634713%"),
    minWidth: wp("9.222948438634713%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("259.5628415300547%"),
    justifyContent: "center"
  },
  Text_125_6060: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6061: {
    width: wp("14.451706608569353%"),
    minWidth: wp("14.451706608569353%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("269.9453551912569%"),
    justifyContent: "center"
  },
  Text_125_6061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6062: {
    width: wp("7.18954248366013%"),
    minWidth: wp("7.18954248366013%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("280.0546448087431%"),
    justifyContent: "center"
  },
  Text_125_6062: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6063: {
    width: wp("8.569353667392884%"),
    minWidth: wp("8.569353667392884%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("290.4371584699454%"),
    justifyContent: "center"
  },
  Text_125_6063: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6064: {
    width: wp("13.798111837327523%"),
    minWidth: wp("13.798111837327523%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("301.0928961748634%"),
    justifyContent: "center"
  },
  Text_125_6064: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6065: {
    width: wp("13.144517066085692%"),
    minWidth: wp("13.144517066085692%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("311.4754098360655%"),
    justifyContent: "center"
  },
  Text_125_6065: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6066: {
    width: wp("15.105301379811184%"),
    minWidth: wp("15.105301379811184%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("321.85792349726773%"),
    justifyContent: "center"
  },
  Text_125_6066: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6067: {
    width: wp("13.798111837327523%"),
    minWidth: wp("13.798111837327523%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("332.24043715846994%"),
    justifyContent: "center"
  },
  Text_125_6067: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6068: {
    width: wp("20.334059549745824%"),
    minWidth: wp("20.334059549745824%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("342.62295081967216%"),
    justifyContent: "center"
  },
  Text_125_6068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6069: {
    width: wp("13.144517066085692%"),
    minWidth: wp("13.144517066085692%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("353.00546448087437%"),
    justifyContent: "center"
  },
  Text_125_6069: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6070: {
    width: wp("14.451706608569353%"),
    minWidth: wp("14.451706608569353%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("363.3879781420766%"),
    justifyContent: "center"
  },
  Text_125_6070: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6071: {
    width: wp("19.680464778503996%"),
    minWidth: wp("19.680464778503996%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("373.7704918032787%"),
    justifyContent: "center"
  },
  Text_125_6071: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6072: {
    width: wp("19.026870007262165%"),
    minWidth: wp("19.026870007262165%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("384.1530054644809%"),
    justifyContent: "center"
  },
  Text_125_6072: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6073: {
    width: wp("20.98765432098765%"),
    minWidth: wp("20.98765432098765%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("394.535519125683%"),
    justifyContent: "center"
  },
  Text_125_6073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6074: {
    width: wp("19.680464778503996%"),
    minWidth: wp("19.680464778503996%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("404.9180327868852%"),
    justifyContent: "center"
  },
  Text_125_6074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6075: {
    width: wp("26.2164124909223%"),
    minWidth: wp("26.2164124909223%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("415.3005464480874%"),
    justifyContent: "center"
  },
  Text_125_6075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6076: {
    width: wp("20.334059549745824%"),
    minWidth: wp("20.334059549745824%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("425.6830601092896%"),
    justifyContent: "center"
  },
  Text_125_6076: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6077: {
    width: wp("19.026870007262165%"),
    minWidth: wp("19.026870007262165%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("436.0655737704918%"),
    justifyContent: "center"
  },
  Text_125_6077: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6078: {
    width: wp("25.562817719680464%"),
    minWidth: wp("25.562817719680464%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("446.44808743169403%"),
    justifyContent: "center"
  },
  Text_125_6078: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6079: {
    width: wp("11.837327523602033%"),
    minWidth: wp("11.837327523602033%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("456.83060109289613%"),
    justifyContent: "center"
  },
  Text_125_6079: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_125_6080: {
    width: wp("18.373275236020334%"),
    minWidth: wp("18.373275236020334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("467.21311475409834%"),
    justifyContent: "center"
  },
  Text_125_6080: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_1: {
    width: wp("33.47857661583152%"),
    minWidth: wp("33.47857661583152%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_21_0: {
    width: wp("3.2679738562091507%"),
    minWidth: wp("3.2679738562091507%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_21_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_21_4: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.55700798838054%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_21_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_15_2958: {
    width: wp("61.43790849673203%"),
    minWidth: wp("61.43790849673203%"),
    height: hp("481.96721311475403%"),
    minHeight: hp("481.96721311475403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_15_64: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_9730: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9731: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9732: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_9732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_66: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_12446: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_12447: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12448: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12449: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_12449: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_15_12450: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.85911401597676%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7434: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7434: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12457: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748647%")
  },
  View_16_7421: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("25.136612021857943%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7422: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7423: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7424: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7424: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7425: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.31966855029049%")
  },
  ImageBackground_16_7432: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_16_7435: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("35.519125683060096%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7436: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7437: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7438: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7439: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.398099922839506%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7440: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7440: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7447: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509842%")
  },
  ImageBackground_16_7446: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748647%")
  },
  View_15_9692: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("45.90163934426231%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_9693: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9694: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9695: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_9695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_9696: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.87053490377632%")
  },
  ImageBackground_15_9703: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_16_6920: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("56.28415300546449%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_6921: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6922: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6923: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_6923: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_6924: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.205519244734933%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_16_6932: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420764914%")
  },
  ImageBackground_16_6931: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748647%")
  },
  View_15_9254: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("66.66666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_9255: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9256: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9257: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_9257: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_9258: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.409591730210604%")
  },
  ImageBackground_15_9260: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_12354: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("77.04918032786885%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_12355: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12356: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12357: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_12357: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_15_12358: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12361: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_12362: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_12362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12363: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_12458: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("87.43169398907104%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_12459: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12460: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12461: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_12461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12462: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.5266402278504%")
  },
  View_15_12464: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12467: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_12468: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_12468: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12469: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748647%")
  },
  View_125_5072: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("97.81420765027322%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_125_5073: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5074: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5075: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5076: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066085693536674%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5077: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5078: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5078: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5080: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5083: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_125_5084: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5084: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5085: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748647%")
  },
  View_16_7449: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("108.19672131147543%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7450: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7451: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7452: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7453: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.60507160039942%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7455: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7454: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7454: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_9683: {
    width: wp("0.5895543981481481%"),
    height: hp("1.9686005806010927%"),
    top: hp("2.0211641905737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_16_7457: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7460: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_16_7461: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7462: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_9704: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("118.57923497267761%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_9705: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9706: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9707: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_9707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_9708: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.077506581336237%")
  },
  View_15_9710: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9713: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_9714: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_15_9714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_9715: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_16_6935: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("128.96174863387978%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_6936: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6937: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6938: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_6938: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_6939: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.412490922294843%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_16_6940: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765198%")
  },
  View_16_6941: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6944: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_16_6945: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_6945: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_6946: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748675%")
  },
  View_15_12420: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("139.344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_12421: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12422: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12423: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_12423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12424: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.616563407770517%")
  },
  View_15_12436: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12439: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_12440: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_12440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12427: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_12344: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("149.7267759562842%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_12345: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12346: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12347: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_15_12347: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_15_12348: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12349: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_15_12350: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_15_12350: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_15_12351: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_12352: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_15_12352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12353: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_12470: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("160.10928961748635%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_12471: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12472: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12473: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_12473: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12474: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.152638775417575%")
  },
  View_15_12476: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12477: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_15_12478: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_12478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_15_12479: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_12480: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_12480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12481: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_16_7463: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("180.87431693989072%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7464: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7465: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7466: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7467: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.231070147966594%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7469: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7468: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7468: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_9692: {
    width: wp("0.5895543981481481%"),
    height: hp("1.9686005806010927%"),
    top: hp("2.0211641905738134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_16_7471: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7472: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_7473: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7473: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7474: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_16_7475: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7475: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7476: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748675%")
  },
  View_125_5058: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("170.4918032786885%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_125_5059: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5060: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5061: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5062: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.69208424110385%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5064: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5063: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5063: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5066: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5067: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_125_5068: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5069: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_125_5070: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5070: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5071: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748675%")
  },
  View_16_6949: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("191.25683060109293%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_6950: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6951: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6952: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_6952: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_6953: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.038489469862018%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_16_6954: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.887978142076463%")
  },
  View_16_6955: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_6956: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_6957: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_6957: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_6958: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_16_6959: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_6959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_6960: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_9373: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("201.63934426229508%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_9374: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9375: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9376: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_9376: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_9377: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.703505128903412%")
  },
  View_15_9639: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_9559: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_15_9593: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_9593: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_15_9621: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_9622: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_15_9622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_9380: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_15_12428: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("212.0218579234973%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_12429: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12430: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12431: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_15_12431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12432: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.242561955337692%")
  },
  View_15_12441: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_12442: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_15_12443: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_15_12443: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_15_12444: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_15_12445: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_15_12445: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_15_12435: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_16_7045: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("222.40437158469945%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7046: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7047: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7048: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7048: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7054: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748675%")
  },
  View_16_7911: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("232.78688524590166%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7912: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7913: {
    width: wp("23.16630355846042%"),
    minWidth: wp("23.16630355846042%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7921: {
    width: wp("1.597676107480029%"),
    minWidth: wp("1.597676107480029%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%")
  },
  ImageBackground_16_7922: {
    width: wp("1.597676107480029%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_16_7923: {
    width: wp("0.7262164124909223%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.4344262295081762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4357298474945548%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7914: {
    width: wp("19.825708061002178%"),
    minWidth: wp("19.825708061002178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.178649237472767%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7914: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7935: {
    width: wp("1.1619462599854757%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.747276688453162%")
  },
  ImageBackground_16_7920: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_16_7895: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7896: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7897: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7898: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7898: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7904: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7883: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7884: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7885: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7886: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7886: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7887: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.859114015976765%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7888: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7888: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7894: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748647%")
  },
  View_16_7859: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("25.136612021857943%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7860: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7861: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7862: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7862: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7863: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.319668550290494%")
  },
  ImageBackground_16_7870: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7831: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("35.519125683060096%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7832: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7833: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7834: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7834: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7835: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.398099922839506%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7836: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7836: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7837: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509878%")
  },
  ImageBackground_16_7844: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748647%")
  },
  View_16_7871: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("45.90163934426231%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7872: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7873: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7874: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7874: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7875: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.870534903776324%")
  },
  ImageBackground_16_7882: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7819: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("56.28415300546449%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7820: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7821: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7822: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7822: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7823: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.205519244734937%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_16_7824: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420764914%")
  },
  ImageBackground_16_7830: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748647%")
  },
  View_16_7787: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("66.66666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7788: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7789: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7790: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7790: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7791: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.409591730210607%")
  },
  ImageBackground_16_7794: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7777: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("77.04918032786885%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7778: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7779: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7780: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7780: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7781: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7784: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    overflow: "hidden"
  },
  View_16_7785: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7785: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7786: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7807: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("87.43169398907104%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7808: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7809: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7810: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7810: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7811: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.5266402278504%")
  },
  View_16_7813: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7816: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7817: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7817: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7818: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748647%")
  },
  View_125_5031: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("97.81420765027322%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_125_5032: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5033: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5034: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5034: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5035: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066085693536678%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5036: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5036: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5039: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5042: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5043: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5043: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5044: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748647%")
  },
  View_16_7845: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("108.19672131147543%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7846: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7847: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7848: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7848: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7849: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.60507160039942%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7850: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7850: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7851: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_16_7853: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7856: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7857: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7857: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7858: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7765: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("118.57923497267761%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7766: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7767: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7768: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7768: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7769: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.077506581336245%")
  },
  View_16_7771: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7774: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7775: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_16_7775: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7776: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7753: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("128.96174863387978%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7754: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7755: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7756: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7756: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7757: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.41249092229485%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_16_7758: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765198%")
  },
  View_16_7759: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7762: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7763: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7763: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7764: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748675%")
  },
  View_16_7728: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("139.344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7729: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7730: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7731: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7731: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7732: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.61656340777052%")
  },
  View_16_7735: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7738: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7739: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7739: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7740: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7718: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("149.7267759562842%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7719: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7720: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7721: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7721: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7722: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7723: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_7724: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7724: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7725: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7726: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7727: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7693: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("160.10928961748635%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7694: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7695: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7696: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7696: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7697: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.152638775417579%")
  },
  View_16_7699: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7700: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_7701: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7702: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7703: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7703: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7704: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5045: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73565722585331%"),
    top: hp("170.4918032786885%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_125_5046: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5047: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5048: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5048: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5049: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.69208424110385%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5057: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5057: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5051: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5052: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_125_5053: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136417%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5053: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5054: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432829%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5055: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949890918%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5055: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5056: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748675%")
  },
  View_16_7679: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("180.87431693989072%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7680: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7681: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7682: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7682: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7683: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.231070147966598%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7684: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_7684: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7685: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_16_7687: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7688: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_7689: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7689: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7690: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7691: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7691: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7692: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748675%")
  },
  View_16_7741: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("191.25683060109293%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7742: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7743: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7744: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7744: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7745: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.038489469862022%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_16_7746: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.887978142076463%")
  },
  View_16_7747: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7748: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_7749: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7749: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7750: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7751: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7752: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7795: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("201.63934426229508%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7796: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7797: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7798: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7798: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7799: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.703505128903409%")
  },
  View_16_7801: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7802: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_7803: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7803: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7804: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7805: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_16_7805: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7806: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_16_7705: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("212.0218579234973%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_7706: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7707: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7708: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7708: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7709: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.242561955337692%")
  },
  View_16_7712: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_7713: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    overflow: "hidden"
  },
  View_16_7714: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_16_7715: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_16_7716: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_16_7716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_16_7717: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5567: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("243.16939890710387%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5568: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5569: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5570: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5570: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5571: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5572: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("253.55191256830602%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5573: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5574: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5575: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5575: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5576: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.85911401597676%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5577: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5577: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5578: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5579: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("263.9344262295082%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5580: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5581: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5582: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5582: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5583: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.31966855029049%")
  },
  ImageBackground_125_5585: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748675%")
  },
  View_125_5586: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("274.31693989071044%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5587: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5588: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5589: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5589: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5590: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.398099922839506%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5591: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5591: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5592: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509842%")
  },
  ImageBackground_125_5594: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5595: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("284.6994535519126%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5596: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5597: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5598: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5598: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5599: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.87053490377632%")
  },
  ImageBackground_125_5601: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5602: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("295.08196721311475%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5603: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5604: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5605: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5605: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5606: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.205519244734933%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_125_5607: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765198%")
  },
  ImageBackground_125_5613: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5614: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("305.46448087431696%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5615: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5616: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5617: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5617: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5618: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.409591730210604%")
  },
  ImageBackground_125_5621: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5622: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("315.8469945355191%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5623: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5624: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5625: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5625: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5626: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5629: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5630: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5631: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5632: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("326.22950819672127%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5633: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5634: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5635: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5635: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5636: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.5266402278504%")
  },
  View_125_5638: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5641: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5642: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5643: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748732%")
  },
  View_125_5644: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("336.61202185792354%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5645: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5646: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5647: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5647: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5648: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066085693536674%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5649: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5650: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5650: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5651: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5654: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5655: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5655: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5656: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5657: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("346.99453551912575%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5658: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5659: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5660: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5660: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5661: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.60507160039942%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5662: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5663: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5663: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_9717: {
    width: wp("0.5895543981481481%"),
    height: hp("1.9686005806010927%"),
    top: hp("2.0211641905736997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_125_5665: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5668: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5669: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5669: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5670: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5671: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("357.3770491803279%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5672: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5673: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5674: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5675: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.077506581336237%")
  },
  View_125_5677: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5680: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5681: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5681: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5682: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5683: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("367.75956284153006%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5684: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5685: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5686: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5686: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5687: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.412490922294843%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_125_5688: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765198%")
  },
  View_125_5689: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5692: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5693: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5693: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5694: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5695: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("378.14207650273227%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5696: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5697: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5698: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5698: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5699: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.616563407770517%")
  },
  View_125_5702: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.697167755991284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5705: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5706: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5706: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5707: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5708: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("388.5245901639345%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5709: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5710: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5711: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5711: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5712: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5713: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5714: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5715: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5716: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5717: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5718: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("398.9071038251366%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5719: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5720: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5721: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5721: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5722: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.152638775417575%")
  },
  View_125_5724: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5725: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5726: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5727: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5728: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5728: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5729: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5730: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("419.672131147541%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5731: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5732: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5733: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5733: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5734: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.231070147966594%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5735: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5736: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404372399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5736: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_9727: {
    width: wp("0.5895543981481481%"),
    height: hp("1.9686005806010927%"),
    top: hp("2.0211641905738134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_125_5738: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5739: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5740: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5740: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5741: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5742: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5742: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5743: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5744: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("409.2896174863388%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5745: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5746: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5747: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5747: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5748: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.69208424110385%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5749: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5750: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5750: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5751: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5752: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5753: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5753: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5754: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5755: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5756: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748732%")
  },
  View_125_5757: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("430.0546448087432%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5758: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5759: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5760: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5760: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5761: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.038489469862018%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_125_5762: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.887978142076463%")
  },
  View_125_5763: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5764: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5765: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5765: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5766: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5767: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5767: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5768: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5769: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("440.4371584699454%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5770: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5771: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5772: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5772: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5773: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.703505128903412%")
  },
  View_125_5775: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5776: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5777: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5777: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5778: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5779: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5779: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5780: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5781: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("450.8196721311476%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5782: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5783: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5784: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5785: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.242561955337692%")
  },
  View_125_5788: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5789: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5790: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907770515613656%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5791: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432825%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5792: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891096%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5792: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5793: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5794: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("461.2021857923497%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5795: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5796: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5797: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5797: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5798: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5799: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3238925199709515%"),
    top: hp("471.58469945355193%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5800: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5801: {
    width: wp("23.16630355846042%"),
    minWidth: wp("23.16630355846042%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5802: {
    width: wp("1.597676107480029%"),
    minWidth: wp("1.597676107480029%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%")
  },
  ImageBackground_125_5803: {
    width: wp("1.597676107480029%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_125_5804: {
    width: wp("0.7262164124909223%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.4344262295081762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4357298474945548%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_125_5805: {
    width: wp("19.825708061002178%"),
    minWidth: wp("19.825708061002178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.178649237472767%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5805: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5806: {
    width: wp("1.1619462599854757%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.747276688453162%")
  },
  ImageBackground_125_5808: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854744%"),
    top: hp("6.010928961748618%")
  },
  View_125_5809: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("243.16939890710387%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5810: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5811: {
    width: wp("26.07116920842411%"),
    minWidth: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5812: {
    width: wp("24.909222948438632%"),
    minWidth: wp("24.909222948438632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5812: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5813: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5814: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("253.55191256830602%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5815: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5816: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5817: {
    width: wp("21.278140885984023%"),
    minWidth: wp("21.278140885984023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5817: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5818: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.859114015976765%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5819: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5819: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5820: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5821: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("263.9344262295082%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5822: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5823: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5824: {
    width: wp("23.73869542029775%"),
    minWidth: wp("23.73869542029775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5824: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5825: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.319668550290494%")
  },
  ImageBackground_125_5827: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748675%")
  },
  View_125_5828: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("274.31693989071044%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5829: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5830: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5831: {
    width: wp("19.817126792846768%"),
    minWidth: wp("19.817126792846768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5831: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5832: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.398099922839506%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5833: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5833: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5834: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509878%")
  },
  ImageBackground_125_5836: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5837: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("284.6994535519126%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5838: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5839: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5840: {
    width: wp("23.289597233569353%"),
    minWidth: wp("23.289597233569353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5840: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5841: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.870534903776324%")
  },
  ImageBackground_125_5843: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5844: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("295.08196721311475%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5845: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5846: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5847: {
    width: wp("20.62454611474219%"),
    minWidth: wp("20.62454611474219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5847: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5848: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.205519244734937%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_125_5849: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765198%")
  },
  ImageBackground_125_5855: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5856: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("305.46448087431696%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5857: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5858: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5859: {
    width: wp("21.828583140432098%"),
    minWidth: wp("21.828583140432098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5859: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5860: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.409591730210607%")
  },
  ImageBackground_125_5863: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5864: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("315.8469945355191%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5865: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5866: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5867: {
    width: wp("20.11619462599855%"),
    minWidth: wp("20.11619462599855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5867: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5868: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5871: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5872: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5872: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5873: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5874: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("326.22950819672127%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5875: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5876: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5877: {
    width: wp("18.945667097857662%"),
    minWidth: wp("18.945667097857662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5877: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5878: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.5266402278504%")
  },
  View_125_5880: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5883: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5884: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5884: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5885: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748732%")
  },
  View_125_5886: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("336.61202185792354%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5887: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5888: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5889: {
    width: wp("16.485112563543936%"),
    minWidth: wp("16.485112563543936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5889: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5890: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066085693536678%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5891: {
    width: wp("3.0501089324618738%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5891: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5892: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5895: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5896: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5896: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5897: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5898: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("346.99453551912575%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5899: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5900: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5901: {
    width: wp("15.02409847040668%"),
    minWidth: wp("15.02409847040668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5901: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5902: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.60507160039942%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5903: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5903: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5904: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_125_5906: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5909: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5910: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5910: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5911: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5912: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("357.3770491803279%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5913: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5914: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5915: {
    width: wp("18.496568911129266%"),
    minWidth: wp("18.496568911129266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5915: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5916: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.077506581336245%")
  },
  View_125_5918: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5921: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5922: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5922: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5923: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5924: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("367.75956284153006%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5925: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5926: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5927: {
    width: wp("15.831517792302105%"),
    minWidth: wp("15.831517792302105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5927: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5928: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.41249092229485%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_125_5929: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765198%")
  },
  View_125_5930: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5933: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5934: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.502732240437183%"),
    justifyContent: "flex-start"
  },
  Text_125_5934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5935: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5936: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("378.14207650273227%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5937: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5938: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5939: {
    width: wp("17.03555481799201%"),
    minWidth: wp("17.03555481799201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5939: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5940: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.61656340777052%")
  },
  View_125_5943: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.69716775599128%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5946: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5947: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5947: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5948: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5949: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("388.5245901639345%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5950: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5951: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5952: {
    width: wp("14.742193173565724%"),
    minWidth: wp("14.742193173565724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5952: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5953: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5954: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5955: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5956: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5957: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5957: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5958: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5959: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("398.9071038251366%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5960: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5961: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5962: {
    width: wp("13.571665645424835%"),
    minWidth: wp("13.571665645424835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5962: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5963: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.152638775417579%")
  },
  View_125_5965: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5966: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5967: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5967: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5968: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5969: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5969: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5970: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5971: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73565722585331%"),
    top: hp("409.2896174863388%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5972: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5973: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5974: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5974: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5975: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.69208424110385%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5976: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5976: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5977: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5978: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5979: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136417%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5979: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5980: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432829%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5981: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949890918%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_5981: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5982: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748732%")
  },
  View_125_5983: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("419.672131147541%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5984: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5985: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5986: {
    width: wp("9.650097017973856%"),
    minWidth: wp("9.650097017973856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5986: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5987: {
    width: wp("4.511123025599129%"),
    minWidth: wp("4.511123025599129%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.231070147966598%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5988: {
    width: wp("3.0501089324618738%"),
    top: hp("1.5027322404372399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_5988: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5989: {
    width: wp("0.5895543981481481%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9215686274509807%")
  },
  View_125_5991: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5992: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_5993: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5993: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_5994: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_5995: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404372399%"),
    justifyContent: "flex-start"
  },
  Text_125_5995: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_5996: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_5997: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("430.0546448087432%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_5998: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_5999: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6000: {
    width: wp("10.457516339869281%"),
    minWidth: wp("10.457516339869281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6000: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_6001: {
    width: wp("3.7037037037037033%"),
    minWidth: wp("3.7037037037037033%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.038489469862022%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_125_6002: {
    width: wp("3.7037037037037033%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.887978142076463%")
  },
  View_125_6003: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6004: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_6005: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_6006: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_6007: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6007: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_6008: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_6009: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("440.4371584699454%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_6010: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6011: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6012: {
    width: wp("13.122567458696441%"),
    minWidth: wp("13.122567458696441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6012: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_6013: {
    width: wp("1.038652584876543%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.703505128903409%")
  },
  View_125_6015: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6016: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_6017: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6017: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_6018: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_6019: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6019: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_6020: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  },
  View_125_6021: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.880900508351495%"),
    top: hp("450.8196721311476%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_125_6022: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6023: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6024: {
    width: wp("11.661553365559186%"),
    minWidth: wp("11.661553365559186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6024: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_6025: {
    width: wp("2.4996666780137984%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.242561955337692%")
  },
  View_125_6028: {
    width: wp("10.74800290486565%"),
    minWidth: wp("10.74800290486565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_6029: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    overflow: "hidden"
  },
  View_125_6030: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9077705156136489%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6030: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_125_6031: {
    width: wp("5.374001452432825%"),
    minWidth: wp("5.374001452432825%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.374001452432815%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    overflow: "hidden"
  },
  View_125_6032: {
    width: wp("3.631082062454612%"),
    minWidth: wp("3.631082062454612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.5027322404371262%"),
    justifyContent: "flex-start"
  },
  Text_125_6032: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_125_6033: {
    flexGrow: 1,
    width: wp("26.07116920842411%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("6.010928961748618%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
