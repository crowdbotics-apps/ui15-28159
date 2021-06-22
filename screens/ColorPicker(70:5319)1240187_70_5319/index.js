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
      <View style={styles.View_140_5521}>
        <View style={styles.View_70_5320}>
          <View style={styles.View_I70_5320_36_10245}>
            <View style={styles.View_I70_5320_36_10246}>
              <View style={styles.View_I70_5320_36_10247} />
              <View style={styles.View_I70_5320_36_10248}>
                <Text style={styles.Text_I70_5320_36_10248}>Color Picker</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I70_5320_36_10250} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c053/a0d5/875cfdeed58e21831416140deaa4af5b"
          }}
          style={styles.ImageBackground_140_5558}
        />
      </View>
      <View style={styles.View_70_5321}>
        <View style={styles.View_I70_5321_10_2311}>
          <Text style={styles.Text_I70_5321_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I70_5321_10_2312} />
      </View>
      <View style={styles.View_70_5327}>
        <View style={styles.View_70_5328}>
          <Text style={styles.Text_70_5328}>Color Picker</Text>
        </View>
        <View style={styles.View_70_5329}>
          <View style={styles.View_70_5330}>
            <View style={styles.View_76_3019}>
              <View style={styles.View_76_3020}>
                <Text style={styles.Text_76_3020}>Light / Grid</Text>
              </View>
              <View style={styles.View_76_3187}>
                <Text style={styles.Text_76_3187}>Light / Spectrum</Text>
              </View>
              <View style={styles.View_76_3188}>
                <Text style={styles.Text_76_3188}>Light / Slider</Text>
              </View>
              <View style={styles.View_76_3192}>
                <Text style={styles.Text_76_3192}>Dark / Grid</Text>
              </View>
              <View style={styles.View_76_3193}>
                <Text style={styles.Text_76_3193}>Dark / Spectrum</Text>
              </View>
              <View style={styles.View_76_3194}>
                <Text style={styles.Text_76_3194}>Dark / Slider</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_70_5334}>
            <View style={styles.View_70_4514}>
              <View style={styles.View_71_5560}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72f1/cd69/fc0cb427a6e467ef05fd54e55e244007"
                  }}
                  style={styles.ImageBackground_140_11742}
                />
                <View style={styles.View_70_4515}>
                  <Text style={styles.Text_70_4515}>Colors</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bc/3aed/23eff08ca77002d73f54887e305dc643"
                  }}
                  style={styles.ImageBackground_71_6272}
                />
              </View>
              <View style={styles.View_71_3078}>
                <View style={styles.View_I71_3078_6_838}>
                  <View style={styles.View_I71_3078_6_838_6_807}>
                    <Text style={styles.Text_I71_3078_6_838_6_807}>Grid</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I71_3078_6_839}
                  onPress={() =>
                    this.props.navigation.navigate(getNavigationScreen("6_833"))
                  }
                >
                  <View style={styles.View_I71_3078_6_839_6_810} />
                  <View style={styles.View_I71_3078_6_839_6_811}>
                    <Text style={styles.Text_I71_3078_6_839_6_811}>
                      Spectrum
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I71_3078_6_840}
                  onPress={() =>
                    this.props.navigation.navigate(getNavigationScreen("6_829"))
                  }
                >
                  <View style={styles.View_I71_3078_6_840_6_811}>
                    <Text style={styles.Text_I71_3078_6_840_6_811}>Slider</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.View_142_5034}>
                <View style={styles.View_142_5035}>
                  <View style={styles.View_142_5036} />
                  <View style={styles.View_142_5037} />
                  <View style={styles.View_142_5038} />
                  <View style={styles.View_142_5039} />
                  <View style={styles.View_142_5040} />
                  <View style={styles.View_142_5041} />
                  <View style={styles.View_142_5042} />
                  <View style={styles.View_142_5043} />
                  <View style={styles.View_142_5044} />
                  <View style={styles.View_142_5045} />
                  <View style={styles.View_142_5046} />
                  <View style={styles.View_142_5047} />
                  <View style={styles.View_142_5048} />
                  <View style={styles.View_142_5049} />
                  <View style={styles.View_142_5050} />
                  <View style={styles.View_142_5051} />
                  <View style={styles.View_142_5052} />
                  <View style={styles.View_142_5053} />
                  <View style={styles.View_142_5054} />
                  <View style={styles.View_142_5055} />
                  <View style={styles.View_142_5056} />
                  <View style={styles.View_142_5057} />
                  <View style={styles.View_142_5058} />
                  <View style={styles.View_142_5059} />
                  <View style={styles.View_142_5060} />
                  <View style={styles.View_142_5061} />
                  <View style={styles.View_142_5062} />
                  <View style={styles.View_142_5063} />
                  <View style={styles.View_142_5064} />
                  <View style={styles.View_142_5065} />
                  <View style={styles.View_142_5066} />
                  <View style={styles.View_142_5067} />
                  <View style={styles.View_142_5068} />
                  <View style={styles.View_142_5069} />
                  <View style={styles.View_142_5070} />
                  <View style={styles.View_142_5071} />
                  <View style={styles.View_142_5072} />
                  <View style={styles.View_142_5073} />
                  <View style={styles.View_142_5074} />
                  <View style={styles.View_142_5075} />
                  <View style={styles.View_142_5076} />
                  <View style={styles.View_142_5077} />
                  <View style={styles.View_142_5078} />
                  <View style={styles.View_142_5079} />
                  <View style={styles.View_142_5080} />
                  <View style={styles.View_142_5081} />
                  <View style={styles.View_142_5082} />
                  <View style={styles.View_142_5083} />
                  <View style={styles.View_142_5084} />
                  <View style={styles.View_142_5085} />
                  <View style={styles.View_142_5086} />
                  <View style={styles.View_142_5087} />
                  <View style={styles.View_142_5088} />
                  <View style={styles.View_142_5089} />
                  <View style={styles.View_142_5090} />
                  <View style={styles.View_142_5091} />
                  <View style={styles.View_142_5092} />
                  <View style={styles.View_142_5093} />
                  <View style={styles.View_142_5094} />
                  <View style={styles.View_142_5095} />
                  <View style={styles.View_142_5096} />
                  <View style={styles.View_142_5097} />
                  <View style={styles.View_142_5098} />
                  <View style={styles.View_142_5099} />
                  <View style={styles.View_142_5100} />
                  <View style={styles.View_142_5101} />
                  <View style={styles.View_142_5102} />
                  <View style={styles.View_142_5103} />
                  <View style={styles.View_142_5104} />
                  <View style={styles.View_142_5105} />
                  <View style={styles.View_142_5106} />
                  <View style={styles.View_142_5107} />
                  <View style={styles.View_142_5108} />
                  <View style={styles.View_142_5109} />
                  <View style={styles.View_142_5110} />
                  <View style={styles.View_142_5111} />
                  <View style={styles.View_142_5112} />
                  <View style={styles.View_142_5113} />
                  <View style={styles.View_142_5114} />
                  <View style={styles.View_142_5115} />
                  <View style={styles.View_142_5116} />
                  <View style={styles.View_142_5117} />
                  <View style={styles.View_142_5118} />
                  <View style={styles.View_142_5119} />
                  <View style={styles.View_142_5120} />
                  <View style={styles.View_142_5121} />
                  <View style={styles.View_142_5122} />
                  <View style={styles.View_142_5123} />
                  <View style={styles.View_142_5124} />
                  <View style={styles.View_142_5125} />
                  <View style={styles.View_142_5126} />
                  <View style={styles.View_142_5127} />
                  <View style={styles.View_142_5128} />
                  <View style={styles.View_142_5129} />
                  <View style={styles.View_142_5130} />
                  <View style={styles.View_142_5131} />
                  <View style={styles.View_142_5132} />
                  <View style={styles.View_142_5133} />
                  <View style={styles.View_142_5134} />
                  <View style={styles.View_142_5135} />
                  <View style={styles.View_142_5136} />
                  <View style={styles.View_142_5137} />
                  <View style={styles.View_142_5138} />
                  <View style={styles.View_142_5139} />
                  <View style={styles.View_142_5140} />
                  <View style={styles.View_142_5141} />
                  <View style={styles.View_142_5142} />
                  <View style={styles.View_142_5143} />
                  <View style={styles.View_142_5144} />
                  <View style={styles.View_142_5145} />
                  <View style={styles.View_142_5146} />
                  <View style={styles.View_142_5147} />
                  <View style={styles.View_142_5148} />
                  <View style={styles.View_142_5149} />
                  <View style={styles.View_142_5150} />
                  <View style={styles.View_142_5151} />
                  <View style={styles.View_142_5152} />
                  <View style={styles.View_142_5153} />
                  <View style={styles.View_142_5154} />
                  <View style={styles.View_142_5155} />
                  <View style={styles.View_142_5156} />
                </View>
              </View>
              <View style={styles.View_71_3121}>
                <View style={styles.View_71_3123}>
                  <View style={styles.View_71_3124}>
                    <Text style={styles.Text_71_3124}>100%</Text>
                  </View>
                </View>
                <View style={styles.View_71_3125} />
                <View style={styles.View_76_3915}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                    }}
                    style={styles.ImageBackground_76_3916}
                  />
                  <View style={styles.View_76_3917} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c348/96d3/fffce8cec46fa0a2972c678e5a637a8c"
                    }}
                    style={styles.ImageBackground_76_3918}
                  />
                </View>
                <View style={styles.View_71_3127}>
                  <Text style={styles.Text_71_3127}>OPACITY</Text>
                </View>
              </View>
              <View style={styles.View_71_3103}>
                <View style={styles.View_71_3104} />
                <View style={styles.View_71_3105}>
                  <View style={styles.View_71_4057}>
                    <View style={styles.View_76_6541} />
                    <View style={styles.View_71_4059} />
                  </View>
                  <View style={styles.View_71_3973} />
                  <View style={styles.View_71_3987} />
                  <View style={styles.View_71_3959} />
                  <View style={styles.View_71_4001} />
                  <View style={styles.View_71_4015} />
                  <View style={styles.View_71_4029} />
                  <View style={styles.View_71_4043} />
                  <View style={styles.View_71_3945} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/818b/5c6b/7e176337c51594886e255d8fe818851c"
                    }}
                    style={styles.ImageBackground_71_3119}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d41b/4277/5735bcec551138930026de1db820ce32"
                }}
                style={styles.ImageBackground_70_4643}
              />
            </View>
            <View style={styles.View_76_3022}>
              <View style={styles.View_76_3023}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5722/1b79/832295c68b6cf6325ea0c02f49ada995"
                  }}
                  style={styles.ImageBackground_140_11743}
                />
                <View style={styles.View_76_3025}>
                  <Text style={styles.Text_76_3025}>Colors</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bc/3aed/23eff08ca77002d73f54887e305dc643"
                  }}
                  style={styles.ImageBackground_76_3026}
                />
              </View>
              <View style={styles.View_76_3028}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_3028_6_834}
                  onPress={() =>
                    this.props.navigation.navigate(getNavigationScreen("6_837"))
                  }
                >
                  <View style={styles.View_I76_3028_6_834_6_811}>
                    <Text style={styles.Text_I76_3028_6_834_6_811}>Grid</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.View_I76_3028_6_835}>
                  <View style={styles.View_I76_3028_6_835_6_807}>
                    <Text style={styles.Text_I76_3028_6_835_6_807}>
                      Spectrum
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_3028_6_836}
                  onPress={() =>
                    this.props.navigation.navigate(getNavigationScreen("6_829"))
                  }
                >
                  <View style={styles.View_I76_3028_6_836_6_811}>
                    <Text style={styles.Text_I76_3028_6_836_6_811}>Slider</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.View_105_3015}>
                <View style={styles.View_105_3016}>
                  <View style={styles.View_105_3017} />
                  <View style={styles.View_105_3018} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c348/96d3/fffce8cec46fa0a2972c678e5a637a8c"
                  }}
                  style={styles.ImageBackground_105_3019}
                />
              </View>
              <View style={styles.View_76_3152}>
                <View style={styles.View_76_3153}>
                  <View style={styles.View_76_3154}>
                    <Text style={styles.Text_76_3154}>100%</Text>
                  </View>
                </View>
                <View style={styles.View_76_3155} />
                <View style={styles.View_76_3919}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                    }}
                    style={styles.ImageBackground_76_3920}
                  />
                  <View style={styles.View_76_3921} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c348/96d3/fffce8cec46fa0a2972c678e5a637a8c"
                    }}
                    style={styles.ImageBackground_76_3922}
                  />
                </View>
                <View style={styles.View_76_3157}>
                  <Text style={styles.Text_76_3157}>OPACITY</Text>
                </View>
              </View>
              <View style={styles.View_76_3158}>
                <View style={styles.View_76_3159} />
                <View style={styles.View_76_3160}>
                  <View style={styles.View_76_3161}>
                    <View style={styles.View_76_6538} />
                    <View style={styles.View_76_3163} />
                  </View>
                  <View style={styles.View_76_3164} />
                  <View style={styles.View_76_3165} />
                  <View style={styles.View_76_3166} />
                  <View style={styles.View_76_3167} />
                  <View style={styles.View_76_3168} />
                  <View style={styles.View_76_3169} />
                  <View style={styles.View_76_3170} />
                  <View style={styles.View_76_3171} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/818b/5c6b/7e176337c51594886e255d8fe818851c"
                    }}
                    style={styles.ImageBackground_76_3172}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d41b/4277/5735bcec551138930026de1db820ce32"
                }}
                style={styles.ImageBackground_76_3174}
              />
            </View>
            <View style={styles.View_76_3360}>
              <View style={styles.View_76_3361}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72f1/cd69/fc0cb427a6e467ef05fd54e55e244007"
                  }}
                  style={styles.ImageBackground_140_11744}
                />
                <View style={styles.View_76_3363}>
                  <Text style={styles.Text_76_3363}>Colors</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bc/3aed/23eff08ca77002d73f54887e305dc643"
                  }}
                  style={styles.ImageBackground_76_3364}
                />
              </View>
              <View style={styles.View_76_3366}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_3366_6_830}
                  onPress={() =>
                    this.props.navigation.navigate(getNavigationScreen("6_837"))
                  }
                >
                  <View style={styles.View_I76_3366_6_830_6_810} />
                  <View style={styles.View_I76_3366_6_830_6_811}>
                    <Text style={styles.Text_I76_3366_6_830_6_811}>Grid</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_3366_6_831}
                  onPress={() =>
                    this.props.navigation.navigate(getNavigationScreen("6_833"))
                  }
                >
                  <View style={styles.View_I76_3366_6_831_6_811}>
                    <Text style={styles.Text_I76_3366_6_831_6_811}>
                      Spectrum
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.View_I76_3366_6_832}>
                  <View style={styles.View_I76_3366_6_832_6_807}>
                    <Text style={styles.Text_I76_3366_6_832_6_807}>Slider</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_76_3490}>
                <View style={styles.View_76_3491}>
                  <View style={styles.View_76_3492}>
                    <Text style={styles.Text_76_3492}>100%</Text>
                  </View>
                </View>
                <View style={styles.View_76_3493} />
                <View style={styles.View_76_3923}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                    }}
                    style={styles.ImageBackground_76_3924}
                  />
                  <View style={styles.View_76_3925} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                    }}
                    style={styles.ImageBackground_76_3926}
                  />
                </View>
                <View style={styles.View_76_3495}>
                  <Text style={styles.Text_76_3495}>OPACITY</Text>
                </View>
              </View>
              <View style={styles.View_76_3884}>
                <View style={styles.View_76_3866}>
                  <View style={styles.View_76_3867}>
                    <View style={styles.View_76_3868}>
                      <Text style={styles.Text_76_3868}>0</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_3902}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                      }}
                      style={styles.ImageBackground_76_3903}
                    />
                    <View style={styles.View_76_3904} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                      }}
                      style={styles.ImageBackground_76_3905}
                    />
                  </View>
                  <View style={styles.View_76_3871}>
                    <Text style={styles.Text_76_3871}>RED</Text>
                  </View>
                </View>
                <View style={styles.View_76_3875}>
                  <View style={styles.View_76_3876}>
                    <View style={styles.View_76_3877}>
                      <Text style={styles.Text_76_3877}>0</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_3894}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                      }}
                      style={styles.ImageBackground_76_3895}
                    />
                    <View style={styles.View_76_3896} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                      }}
                      style={styles.ImageBackground_76_3897}
                    />
                  </View>
                  <View style={styles.View_76_3880}>
                    <Text style={styles.Text_76_3880}>GREEN</Text>
                  </View>
                </View>
                <View style={styles.View_76_3885}>
                  <View style={styles.View_76_3886}>
                    <View style={styles.View_76_3887}>
                      <Text style={styles.Text_76_3887}>0</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_3898}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                      }}
                      style={styles.ImageBackground_76_3899}
                    />
                    <View style={styles.View_76_3900} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                      }}
                      style={styles.ImageBackground_76_3901}
                    />
                  </View>
                  <View style={styles.View_76_3889}>
                    <Text style={styles.Text_76_3889}>BLUE</Text>
                  </View>
                </View>
                <View style={styles.View_76_3927}>
                  <View style={styles.View_76_3928}>
                    <View style={styles.View_76_3929}>
                      <Text style={styles.Text_76_3929}>000000</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_3937}>
                    <Text style={styles.Text_76_3937}>
                      Display P3 Hex Color #
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_76_3496}>
                <View style={styles.View_76_3497} />
                <View style={styles.View_76_3498}>
                  <View style={styles.View_76_3499}>
                    <View style={styles.View_76_6537} />
                    <View style={styles.View_76_3501} />
                  </View>
                  <View style={styles.View_76_3502} />
                  <View style={styles.View_76_3503} />
                  <View style={styles.View_76_3504} />
                  <View style={styles.View_76_3505} />
                  <View style={styles.View_76_3506} />
                  <View style={styles.View_76_3507} />
                  <View style={styles.View_76_3508} />
                  <View style={styles.View_76_3509} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/818b/5c6b/7e176337c51594886e255d8fe818851c"
                    }}
                    style={styles.ImageBackground_76_3510}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d41b/4277/5735bcec551138930026de1db820ce32"
                }}
                style={styles.ImageBackground_76_3512}
              />
            </View>
            <View style={styles.View_71_4093}>
              <View style={styles.View_71_5890}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fa9/1d21/6602d7bc33f928312a15bf8544ab42b3"
                  }}
                  style={styles.ImageBackground_140_11745}
                />
                <View style={styles.View_71_5892}>
                  <Text style={styles.Text_71_5892}>Colors</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce57/3e3b/a9f3f4cb2c8cca3bfb4008e2e57d4c97"
                  }}
                  style={styles.ImageBackground_71_6260}
                />
              </View>
              <View style={styles.View_71_4096}>
                <View style={styles.View_I71_4096_38_2895}>
                  <View style={styles.View_I71_4096_38_2895_6_815}>
                    <Text style={styles.Text_I71_4096_38_2895_6_815}>Grid</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I71_4096_38_2896}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("38_2890")
                    )
                  }
                >
                  <View style={styles.View_I71_4096_38_2896_6_818} />
                  <View style={styles.View_I71_4096_38_2896_6_819}>
                    <Text style={styles.Text_I71_4096_38_2896_6_819}>
                      Spectrum
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I71_4096_38_2897}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("38_2886")
                    )
                  }
                >
                  <View style={styles.View_I71_4096_38_2897_6_819}>
                    <Text style={styles.Text_I71_4096_38_2897_6_819}>
                      Slider
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.View_71_4097}>
                <View style={styles.View_71_4098}>
                  <View style={styles.View_71_4218} />
                  <View style={styles.View_71_4217} />
                  <View style={styles.View_71_4216} />
                  <View style={styles.View_71_4215} />
                  <View style={styles.View_71_4214} />
                  <View style={styles.View_71_4213} />
                  <View style={styles.View_71_4212} />
                  <View style={styles.View_71_4211} />
                  <View style={styles.View_71_4210} />
                  <View style={styles.View_71_4209} />
                  <View style={styles.View_71_4208} />
                  <View style={styles.View_71_4207} />
                  <View style={styles.View_71_4206} />
                  <View style={styles.View_71_4205} />
                  <View style={styles.View_71_4204} />
                  <View style={styles.View_71_4203} />
                  <View style={styles.View_71_4202} />
                  <View style={styles.View_71_4201} />
                  <View style={styles.View_71_4200} />
                  <View style={styles.View_71_4199} />
                  <View style={styles.View_71_4198} />
                  <View style={styles.View_71_4197} />
                  <View style={styles.View_71_4196} />
                  <View style={styles.View_71_4195} />
                  <View style={styles.View_71_4194} />
                  <View style={styles.View_71_4193} />
                  <View style={styles.View_71_4192} />
                  <View style={styles.View_71_4191} />
                  <View style={styles.View_71_4190} />
                  <View style={styles.View_71_4189} />
                  <View style={styles.View_71_4188} />
                  <View style={styles.View_71_4187} />
                  <View style={styles.View_71_4186} />
                  <View style={styles.View_71_4185} />
                  <View style={styles.View_71_4184} />
                  <View style={styles.View_71_4183} />
                  <View style={styles.View_71_4182} />
                  <View style={styles.View_71_4181} />
                  <View style={styles.View_71_4180} />
                  <View style={styles.View_71_4179} />
                  <View style={styles.View_71_4178} />
                  <View style={styles.View_71_4177} />
                  <View style={styles.View_71_4176} />
                  <View style={styles.View_71_4175} />
                  <View style={styles.View_71_4174} />
                  <View style={styles.View_71_4173} />
                  <View style={styles.View_71_4172} />
                  <View style={styles.View_71_4171} />
                  <View style={styles.View_71_4170} />
                  <View style={styles.View_71_4169} />
                  <View style={styles.View_71_4168} />
                  <View style={styles.View_71_4167} />
                  <View style={styles.View_71_4166} />
                  <View style={styles.View_71_4165} />
                  <View style={styles.View_71_4164} />
                  <View style={styles.View_71_4163} />
                  <View style={styles.View_71_4162} />
                  <View style={styles.View_71_4161} />
                  <View style={styles.View_71_4160} />
                  <View style={styles.View_71_4159} />
                  <View style={styles.View_71_4158} />
                  <View style={styles.View_71_4157} />
                  <View style={styles.View_71_4156} />
                  <View style={styles.View_71_4155} />
                  <View style={styles.View_71_4154} />
                  <View style={styles.View_71_4153} />
                  <View style={styles.View_71_4152} />
                  <View style={styles.View_71_4151} />
                  <View style={styles.View_71_4150} />
                  <View style={styles.View_71_4149} />
                  <View style={styles.View_71_4148} />
                  <View style={styles.View_71_4147} />
                  <View style={styles.View_71_4146} />
                  <View style={styles.View_71_4145} />
                  <View style={styles.View_71_4144} />
                  <View style={styles.View_71_4143} />
                  <View style={styles.View_71_4142} />
                  <View style={styles.View_71_4141} />
                  <View style={styles.View_71_4140} />
                  <View style={styles.View_71_4139} />
                  <View style={styles.View_71_4138} />
                  <View style={styles.View_71_4137} />
                  <View style={styles.View_71_4136} />
                  <View style={styles.View_71_4135} />
                  <View style={styles.View_71_4134} />
                  <View style={styles.View_71_4133} />
                  <View style={styles.View_71_4132} />
                  <View style={styles.View_71_4131} />
                  <View style={styles.View_71_4130} />
                  <View style={styles.View_71_4129} />
                  <View style={styles.View_71_4128} />
                  <View style={styles.View_71_4127} />
                  <View style={styles.View_71_4126} />
                  <View style={styles.View_71_4125} />
                  <View style={styles.View_71_4124} />
                  <View style={styles.View_71_4123} />
                  <View style={styles.View_71_4122} />
                  <View style={styles.View_71_4120} />
                  <View style={styles.View_71_4118} />
                  <View style={styles.View_71_4116} />
                  <View style={styles.View_71_4114} />
                  <View style={styles.View_71_4112} />
                  <View style={styles.View_71_4110} />
                  <View style={styles.View_71_4108} />
                  <View style={styles.View_71_4106} />
                  <View style={styles.View_71_4104} />
                  <View style={styles.View_71_4102} />
                  <View style={styles.View_71_4100} />
                  <View style={styles.View_71_4121} />
                  <View style={styles.View_71_4119} />
                  <View style={styles.View_71_4117} />
                  <View style={styles.View_71_4115} />
                  <View style={styles.View_71_4113} />
                  <View style={styles.View_71_4111} />
                  <View style={styles.View_71_4109} />
                  <View style={styles.View_71_4107} />
                  <View style={styles.View_71_4105} />
                  <View style={styles.View_71_4103} />
                  <View style={styles.View_71_4101} />
                  <View style={styles.View_71_4099} />
                  <View style={styles.View_71_4219} />
                </View>
              </View>
              <View style={styles.View_71_4220}>
                <View style={styles.View_71_4221}>
                  <View style={styles.View_71_4222}>
                    <Text style={styles.Text_71_4222}>100%</Text>
                  </View>
                </View>
                <View style={styles.View_71_4223} />
                <View style={styles.View_71_4224}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                    }}
                    style={styles.ImageBackground_I71_4224_70_4470}
                  />
                  <View style={styles.View_I71_4224_70_4471} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c348/96d3/fffce8cec46fa0a2972c678e5a637a8c"
                    }}
                    style={styles.ImageBackground_I71_4224_70_4472}
                  />
                </View>
                <View style={styles.View_71_4225}>
                  <Text style={styles.Text_71_4225}>OPACITY</Text>
                </View>
              </View>
              <View style={styles.View_71_4226}>
                <View style={styles.View_71_4227} />
                <View style={styles.View_71_4228}>
                  <View style={styles.View_71_4229}>
                    <View style={styles.View_76_6534} />
                    <View style={styles.View_71_4231} />
                  </View>
                  <View style={styles.View_71_4232} />
                  <View style={styles.View_71_4234} />
                  <View style={styles.View_71_4235} />
                  <View style={styles.View_71_4236} />
                  <View style={styles.View_71_4237} />
                  <View style={styles.View_71_4238} />
                  <View style={styles.View_71_4239} />
                  <View style={styles.View_71_4240} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ff8/f700/0191b396fbddea7a3d624b00f574def0"
                    }}
                    style={styles.ImageBackground_71_4241}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82fb/af10/7c07b2f501f80f02e3563a6543e3ed26"
                }}
                style={styles.ImageBackground_71_4243}
              />
            </View>
            <View style={styles.View_76_4103}>
              <View style={styles.View_76_4104}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72f1/cd69/fc0cb427a6e467ef05fd54e55e244007"
                  }}
                  style={styles.ImageBackground_140_11746}
                />
                <View style={styles.View_76_4106}>
                  <Text style={styles.Text_76_4106}>Colors</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce57/3e3b/a9f3f4cb2c8cca3bfb4008e2e57d4c97"
                  }}
                  style={styles.ImageBackground_76_4107}
                />
              </View>
              <View style={styles.View_76_4109}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_4109_38_2891}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("38_2894")
                    )
                  }
                >
                  <View style={styles.View_I76_4109_38_2891_6_819}>
                    <Text style={styles.Text_I76_4109_38_2891_6_819}>Grid</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.View_I76_4109_38_2892}>
                  <View style={styles.View_I76_4109_38_2892_6_815}>
                    <Text style={styles.Text_I76_4109_38_2892_6_815}>
                      Spectrum
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_4109_38_2893}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("38_2886")
                    )
                  }
                >
                  <View style={styles.View_I76_4109_38_2893_6_819}>
                    <Text style={styles.Text_I76_4109_38_2893_6_819}>
                      Slider
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10d9/4152/361a9b19a91bf01617ded80167137db3"
                }}
                style={styles.ImageBackground_76_4110}
              />
              <View style={styles.View_105_3067}>
                <View style={styles.View_105_3068}>
                  <View style={styles.View_105_3069} />
                  <View style={styles.View_105_3070} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c348/96d3/fffce8cec46fa0a2972c678e5a637a8c"
                  }}
                  style={styles.ImageBackground_105_3071}
                />
              </View>
              <View style={styles.View_76_4111}>
                <View style={styles.View_76_4112}>
                  <View style={styles.View_76_4113}>
                    <Text style={styles.Text_76_4113}>100%</Text>
                  </View>
                </View>
                <View style={styles.View_76_4114} />
                <View style={styles.View_76_4115}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                    }}
                    style={styles.ImageBackground_76_4116}
                  />
                  <View style={styles.View_76_4117} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c348/96d3/fffce8cec46fa0a2972c678e5a637a8c"
                    }}
                    style={styles.ImageBackground_76_4118}
                  />
                </View>
                <View style={styles.View_76_4119}>
                  <Text style={styles.Text_76_4119}>OPACITY</Text>
                </View>
              </View>
              <View style={styles.View_76_4120}>
                <View style={styles.View_76_4121} />
                <View style={styles.View_76_4122}>
                  <View style={styles.View_76_4123}>
                    <View style={styles.View_76_6533} />
                    <View style={styles.View_76_4125} />
                  </View>
                  <View style={styles.View_76_4126} />
                  <View style={styles.View_76_4127} />
                  <View style={styles.View_76_4128} />
                  <View style={styles.View_76_4129} />
                  <View style={styles.View_76_4130} />
                  <View style={styles.View_76_4131} />
                  <View style={styles.View_76_4132} />
                  <View style={styles.View_76_4133} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ff8/f700/0191b396fbddea7a3d624b00f574def0"
                    }}
                    style={styles.ImageBackground_76_4134}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82fb/af10/7c07b2f501f80f02e3563a6543e3ed26"
                }}
                style={styles.ImageBackground_76_4136}
              />
            </View>
            <View style={styles.View_76_4137}>
              <View style={styles.View_76_4138}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fa9/1d21/6602d7bc33f928312a15bf8544ab42b3"
                  }}
                  style={styles.ImageBackground_140_11751}
                />
                <View style={styles.View_76_4140}>
                  <Text style={styles.Text_76_4140}>Colors</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce57/3e3b/a9f3f4cb2c8cca3bfb4008e2e57d4c97"
                  }}
                  style={styles.ImageBackground_76_4141}
                />
              </View>
              <View style={styles.View_76_4143}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_4143_38_2887}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("38_2894")
                    )
                  }
                >
                  <View style={styles.View_I76_4143_38_2887_6_818} />
                  <View style={styles.View_I76_4143_38_2887_6_819}>
                    <Text style={styles.Text_I76_4143_38_2887_6_819}>Grid</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I76_4143_38_2888}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("38_2890")
                    )
                  }
                >
                  <View style={styles.View_I76_4143_38_2888_6_819}>
                    <Text style={styles.Text_I76_4143_38_2888_6_819}>
                      Spectrum
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.View_I76_4143_38_2889}>
                  <View style={styles.View_I76_4143_38_2889_6_815}>
                    <Text style={styles.Text_I76_4143_38_2889_6_815}>
                      Slider
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_76_4144}>
                <View style={styles.View_76_4145}>
                  <View style={styles.View_76_4146}>
                    <Text style={styles.Text_76_4146}>100%</Text>
                  </View>
                </View>
                <View style={styles.View_76_4147} />
                <View style={styles.View_76_4148}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c471/6d1c/eb39aa92d7ba5d4ef66df3b26bd11a40"
                    }}
                    style={styles.ImageBackground_76_4149}
                  />
                  <View style={styles.View_76_4150} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                    }}
                    style={styles.ImageBackground_76_4151}
                  />
                </View>
                <View style={styles.View_76_4152}>
                  <Text style={styles.Text_76_4152}>OPACITY</Text>
                </View>
              </View>
              <View style={styles.View_76_4153}>
                <View style={styles.View_76_4154}>
                  <View style={styles.View_76_4155}>
                    <View style={styles.View_76_4156}>
                      <Text style={styles.Text_76_4156}>0</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_4157}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                      }}
                      style={styles.ImageBackground_76_4158}
                    />
                    <View style={styles.View_76_4159} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                      }}
                      style={styles.ImageBackground_76_4160}
                    />
                  </View>
                  <View style={styles.View_76_4161}>
                    <Text style={styles.Text_76_4161}>RED</Text>
                  </View>
                </View>
                <View style={styles.View_76_4162}>
                  <View style={styles.View_76_4163}>
                    <View style={styles.View_76_4164}>
                      <Text style={styles.Text_76_4164}>0</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_4165}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                      }}
                      style={styles.ImageBackground_76_4166}
                    />
                    <View style={styles.View_76_4167} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                      }}
                      style={styles.ImageBackground_76_4168}
                    />
                  </View>
                  <View style={styles.View_76_4169}>
                    <Text style={styles.Text_76_4169}>GREEN</Text>
                  </View>
                </View>
                <View style={styles.View_76_4170}>
                  <View style={styles.View_76_4171}>
                    <View style={styles.View_76_4172}>
                      <Text style={styles.Text_76_4172}>0</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_4173}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5000/e67c/dc625260a0e3830e39b14c5eb66d9cf4"
                      }}
                      style={styles.ImageBackground_76_4174}
                    />
                    <View style={styles.View_76_4175} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d304/1258/328cae73c9d2d8d166c7edec2cf5fb73"
                      }}
                      style={styles.ImageBackground_76_4176}
                    />
                  </View>
                  <View style={styles.View_76_4177}>
                    <Text style={styles.Text_76_4177}>BLUE</Text>
                  </View>
                </View>
                <View style={styles.View_76_4178}>
                  <View style={styles.View_76_4179}>
                    <View style={styles.View_76_4180}>
                      <Text style={styles.Text_76_4180}>000000</Text>
                    </View>
                  </View>
                  <View style={styles.View_76_4181}>
                    <Text style={styles.Text_76_4181}>
                      Display P3 Hex Color #
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_76_4182}>
                <View style={styles.View_76_4183} />
                <View style={styles.View_76_4184}>
                  <View style={styles.View_76_4185}>
                    <View style={styles.View_76_6532} />
                    <View style={styles.View_76_4187} />
                  </View>
                  <View style={styles.View_76_4188} />
                  <View style={styles.View_76_4189} />
                  <View style={styles.View_76_4190} />
                  <View style={styles.View_76_4191} />
                  <View style={styles.View_76_4192} />
                  <View style={styles.View_76_4193} />
                  <View style={styles.View_76_4194} />
                  <View style={styles.View_76_4195} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a07f/ef0e/768cf1ffe1d076996c7cb0a3323dfe06"
                    }}
                    style={styles.ImageBackground_76_4196}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82fb/af10/7c07b2f501f80f02e3563a6543e3ed26"
                }}
                style={styles.ImageBackground_76_4198}
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
  View_2: { height: hp("169.2622950819672%") },
  View_140_5521: {
    width: wp("95.08070714834741%"),
    minWidth: wp("95.08070714834741%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4596464258262873%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_5320: {
    width: wp("95.08070714834741%"),
    minWidth: wp("95.08070714834741%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_5320_36_10245: {
    flexGrow: 1,
    width: wp("95.08070714834741%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_5320_36_10246: {
    width: wp("95.08070714834741%"),
    minWidth: wp("95.08070714834741%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_5320_36_10247: {
    width: wp("2.1521906225980016%"),
    minWidth: wp("2.1521906225980016%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I70_5320_36_10248: {
    width: wp("91.69869331283628%"),
    minWidth: wp("91.69869331283628%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3820138355111453%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_5320_36_10248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_5320_36_10250: {
    flexGrow: 1,
    width: wp("95.08070714834741%"),
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
  ImageBackground_140_5558: {
    width: wp("2.1521906225980016%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_5321: {
    width: wp("95.08070714834741%"),
    minWidth: wp("95.08070714834741%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4596464258262873%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_5321_10_2311: {
    flexGrow: 1,
    width: wp("4.304381245196003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I70_5321_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I70_5321_10_2312: {
    flexGrow: 1,
    width: wp("95.08070714834741%"),
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
  View_70_5327: {
    width: wp("95.08070714834741%"),
    minWidth: wp("95.08070714834741%"),
    height: hp("113.66120218579235%"),
    minHeight: hp("113.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4596464258262873%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_70_5328: {
    width: wp("5.303612605687932%"),
    minWidth: wp("5.303612605687932%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_70_5328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_5329: {
    width: wp("95.08070714834741%"),
    minWidth: wp("95.08070714834741%"),
    height: hp("106.01092896174865%"),
    minHeight: hp("106.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_70_5330: {
    width: wp("82.74404304381245%"),
    minWidth: wp("82.74404304381245%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2298232129131437%"),
    top: hp("0%")
  },
  View_76_3019: {
    width: wp("82.74404304381245%"),
    minWidth: wp("82.74404304381245%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_76_3020: {
    width: wp("4.189085318985396%"),
    minWidth: wp("4.189085318985396%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_76_3020: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_76_3187: {
    width: wp("5.572636433512682%"),
    minWidth: wp("5.572636433512682%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.641813989239047%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_76_3187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_76_3188: {
    width: wp("4.88086087624904%"),
    minWidth: wp("4.88086087624904%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.283627978478094%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_76_3188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_76_3192: {
    width: wp("3.8047655649500385%"),
    minWidth: wp("3.8047655649500385%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.92544196771714%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_76_3192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_76_3193: {
    width: wp("5.226748654880861%"),
    minWidth: wp("5.226748654880861%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.567255956956195%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_76_3193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_76_3194: {
    width: wp("4.534973097617217%"),
    minWidth: wp("4.534973097617217%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.20906994619524%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_76_3194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_70_5334: {
    width: wp("95.08070714834741%"),
    minWidth: wp("95.08070714834741%"),
    height: hp("98.36065573770492%"),
    minHeight: hp("98.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043708%")
  },
  View_70_4514: {
    width: wp("14.411990776325903%"),
    minWidth: wp("14.411990776325903%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2298232129131437%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  View_71_5560: {
    flexGrow: 1,
    width: wp("12.874711760184473%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7686395080707156%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_11742: {
    width: wp("0.7287305469791492%"),
    minWidth: wp("0.7287305469791492%"),
    height: hp("2.5730182564323716%"),
    minHeight: hp("2.5730182564323716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7626726327697924%")
  },
  View_70_4515: {
    width: wp("2.0368946963873946%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.206782042659492%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_70_4515: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_71_6272: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.7217524980784%")
  },
  View_71_3078: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565723%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_I71_3078_6_838: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080707076%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I71_3078_6_838_6_807: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282866%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I71_3078_6_838_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I71_3078_6_839: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.41967717140661%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_3078_6_839_6_810: {
    flexGrow: 1,
    width: wp("0.02495855848941319%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.267900893543429%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I71_3078_6_839_6_811: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282866%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I71_3078_6_839_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I71_3078_6_840: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.762490392006148%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_3078_6_840_6_811: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30745580322828836%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I71_3078_6_840_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_142_5034: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565723%"),
    top: hp("17.213114754098356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_142_5035: {
    width: wp("13.182167563412758%"),
    minWidth: wp("13.182167563412758%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_142_5036: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(222, 238, 212, 1)"
  },
  View_142_5037: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(246, 250, 219, 1)"
  },
  View_142_5038: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(253, 251, 221, 1)"
  },
  View_142_5039: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(254, 241, 213, 1)"
  },
  View_142_5040: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(254, 236, 212, 1)"
  },
  View_142_5041: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(255, 226, 214, 1)"
  },
  View_142_5042: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(255, 218, 216, 1)"
  },
  View_142_5043: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(249, 211, 224, 1)"
  },
  View_142_5044: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(239, 202, 254, 1)"
  },
  View_142_5045: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  View_142_5046: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(210, 226, 254, 1)"
  },
  View_142_5047: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(203, 240, 255, 1)"
  },
  View_142_5048: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(205, 232, 181, 1)"
  },
  View_142_5049: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(241, 247, 183, 1)"
  },
  View_142_5050: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(255, 251, 185, 1)"
  },
  View_142_5051: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(253, 228, 168, 1)"
  },
  View_142_5052: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(254, 217, 168, 1)"
  },
  View_142_5053: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(255, 197, 171, 1)"
  },
  View_142_5054: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(255, 181, 175, 1)"
  },
  View_142_5055: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(244, 164, 192, 1)"
  },
  View_142_5056: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(226, 146, 254, 1)"
  },
  View_142_5057: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_142_5058: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(167, 198, 255, 1)"
  },
  View_142_5059: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(147, 227, 252, 1)"
  },
  View_142_5060: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(177, 221, 139, 1)"
  },
  View_142_5061: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(234, 242, 143, 1)"
  },
  View_142_5062: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(255, 249, 148, 1)"
  },
  View_142_5063: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(254, 217, 119, 1)"
  },
  View_142_5064: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(254, 199, 119, 1)"
  },
  View_142_5065: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(254, 165, 125, 1)"
  },
  View_142_5066: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_142_5067: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_142_5068: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(211, 87, 254, 1)"
  },
  View_142_5069: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(134, 79, 253, 1)"
  },
  View_142_5070: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(116, 167, 255, 1)"
  },
  View_142_5071: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(82, 214, 252, 1)"
  },
  View_142_5072: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(150, 211, 95, 1)"
  },
  View_142_5073: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(228, 239, 101, 1)"
  },
  View_142_5074: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(255, 247, 107, 1)"
  },
  View_142_5075: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 203, 62, 1)"
  },
  View_142_5076: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 180, 63, 1)"
  },
  View_142_5077: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 134, 72, 1)"
  },
  View_142_5078: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_142_5079: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(230, 59, 122, 1)"
  },
  View_142_5080: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(190, 56, 243, 1)"
  },
  View_142_5081: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(94, 48, 235, 1)"
  },
  View_142_5082: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(58, 135, 253, 1)"
  },
  View_142_5083: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(1, 199, 252, 1)"
  },
  View_142_5084: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(118, 187, 64, 1)"
  },
  View_142_5085: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.953112990007686%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(217, 236, 55, 1)"
  },
  View_142_5086: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(254, 251, 65, 1)"
  },
  View_142_5087: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.762490392006148%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(252, 199, 0, 1)"
  },
  View_142_5088: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_142_5089: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.571867794004612%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(255, 106, 0, 1)"
  },
  View_142_5090: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_142_5091: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(185, 45, 93, 1)"
  },
  View_142_5092: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(152, 42, 188, 1)"
  },
  View_142_5093: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_142_5094: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(0, 97, 253, 1)"
  },
  View_142_5095: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(0, 161, 216, 1)"
  },
  View_142_5096: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(102, 157, 52, 1)"
  },
  View_142_5097: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(195, 209, 23, 1)"
  },
  View_142_5098: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(245, 236, 0, 1)"
  },
  View_142_5099: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(209, 157, 1, 1)"
  },
  View_142_5100: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(211, 131, 1, 1)"
  },
  View_142_5101: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(218, 81, 0, 1)"
  },
  View_142_5102: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(226, 36, 0, 1)"
  },
  View_142_5103: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(153, 36, 79, 1)"
  },
  View_142_5104: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(122, 33, 158, 1)"
  },
  View_142_5105: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(55, 26, 148, 1)"
  },
  View_142_5106: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(0, 86, 214, 1)"
  },
  View_142_5107: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(0, 140, 180, 1)"
  },
  View_142_5108: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(78, 122, 39, 1)"
  },
  View_142_5109: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(155, 165, 14, 1)"
  },
  View_142_5110: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(196, 188, 0, 1)"
  },
  View_142_5111: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(166, 123, 1, 1)"
  },
  View_142_5112: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(169, 104, 0, 1)"
  },
  View_142_5113: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(173, 62, 0, 1)"
  },
  View_142_5114: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(181, 26, 0, 1)"
  },
  View_142_5115: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(121, 26, 61, 1)"
  },
  View_142_5116: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(97, 24, 124, 1)"
  },
  View_142_5117: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(44, 9, 119, 1)"
  },
  View_142_5118: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(0, 66, 169, 1)"
  },
  View_142_5119: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(1, 110, 143, 1)"
  },
  View_142_5120: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(56, 87, 26, 1)"
  },
  View_142_5121: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(111, 118, 10, 1)"
  },
  View_142_5122: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(141, 134, 2, 1)"
  },
  View_142_5123: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(120, 88, 0, 1)"
  },
  View_142_5124: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(122, 74, 0, 1)"
  },
  View_142_5125: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(123, 41, 0, 1)"
  },
  View_142_5126: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(131, 17, 0, 1)"
  },
  View_142_5127: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381245196003075%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(85, 16, 41, 1)"
  },
  View_142_5128: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(69, 13, 89, 1)"
  },
  View_142_5129: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(26, 10, 82, 1)"
  },
  View_142_5130: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(1, 47, 123, 1)"
  },
  View_142_5131: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 77, 101, 1)"
  },
  View_142_5132: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(38, 62, 15, 1)"
  },
  View_142_5133: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(79, 85, 4, 1)"
  },
  View_142_5134: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(102, 97, 0, 1)"
  },
  View_142_5135: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.762490392006148%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(86, 61, 0, 1)"
  },
  View_142_5136: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(88, 51, 0, 1)"
  },
  View_142_5137: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(90, 28, 0, 1)"
  },
  View_142_5138: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(92, 7, 1, 1)"
  },
  View_142_5139: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.41967717140661%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(60, 7, 27, 1)"
  },
  View_142_5140: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(46, 6, 61, 1)"
  },
  View_142_5141: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(17, 5, 59, 1)"
  },
  View_142_5142: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(1, 29, 87, 1)"
  },
  View_142_5143: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(0, 55, 74, 1)"
  },
  View_142_5144: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710224%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_142_5145: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541122%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_142_5146: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.877017678708686%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_142_5147: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800922367409683%"),
    top: hp("0%"),
    backgroundColor: "rgba(92, 92, 92, 1)"
  },
  View_142_5148: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686395080707149%"),
    top: hp("0%"),
    backgroundColor: "rgba(112, 112, 112, 1)"
  },
  View_142_5149: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408147%"),
    top: hp("0%"),
    backgroundColor: "rgba(133, 133, 133, 1)"
  },
  View_142_5150: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705611%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 153, 153, 1)"
  },
  View_142_5151: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.41967717140661%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 173, 173, 1)"
  },
  View_142_5152: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3051498847040737%"),
    top: hp("0%"),
    backgroundColor: "rgba(194, 194, 194, 1)"
  },
  View_142_5153: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015366%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_142_5154: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025362%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_142_5155: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 255, 254, 1)"
  },
  View_142_5156: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0760953112990004%"),
    top: hp("22.950819672131146%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3
  },
  View_71_3121: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565723%"),
    top: hp("59.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_3123: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.222905457340506%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_71_3124: {
    width: wp("1.80630284396618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5380476556495015%"),
    top: hp("0.9562841530054413%"),
    justifyContent: "flex-start"
  },
  Text_71_3124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_71_3125: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349738%"),
    backgroundColor: "rgba(198, 198, 200, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_76_3915: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_3916: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_3917: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_3918: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.378170637970792%"),
    top: hp("0.2732240437158566%")
  },
  View_71_3127: {
    width: wp("2.2290545734050733%"),
    minWidth: wp("2.2290545734050733%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_71_3127: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_71_3103: {
    flexGrow: 1,
    width: wp("13.066871637202151%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7302075326671789%"),
    top: hp("74.31693989071037%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_3104: {
    width: wp("2.7671022290545735%"),
    minWidth: wp("2.7671022290545735%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_71_3105: {
    flexGrow: 1,
    width: wp("9.377401998462721%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.689469638739432%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_4057: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_6541: {
    width: wp("0.8455034588777863%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1537279016141433%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_71_4059: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  },
  View_71_3973: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_71_3987: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194466%"),
    top: hp("0%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_71_3959: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194466%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_71_4001: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178323%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_71_4015: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178323%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_71_4029: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1106840891621825%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_71_4043: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1106840891621825%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_71_3945: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146042%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  ImageBackground_71_3119: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146042%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_70_4643: {
    flexGrow: 1,
    width: wp("1.80630284396618%"),
    height: hp("1.7757822255619238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.302843966179862%"),
    top: hp("89.6174863387978%")
  },
  View_76_3022: {
    width: wp("14.411990776325903%"),
    minWidth: wp("14.411990776325903%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.871637202152193%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  View_76_3023: {
    flexGrow: 1,
    width: wp("12.874711760184473%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7686395080707165%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_11743: {
    width: wp("0.7287305469791492%"),
    minWidth: wp("0.7287305469791492%"),
    height: hp("2.5730182564323716%"),
    minHeight: hp("2.5730182564323716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7626726327697924%")
  },
  View_76_3025: {
    width: wp("2.0368946963873946%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.206782042659494%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_76_3025: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_76_3026: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.721752498078398%")
  },
  View_76_3028: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565696%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_I76_3028_6_834: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080706987%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_3028_6_834_6_811: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30745580322829014%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_3028_6_834_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I76_3028_6_835: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.419677171406612%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I76_3028_6_835_6_807: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282866%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_3028_6_835_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I76_3028_6_836: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.76249039200615%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_3028_6_836_6_811: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282866%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_3028_6_836_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_105_3015: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("39.07104242043417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565696%"),
    top: hp("17.213114754098356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_105_3016: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("39.07104242043417%"),
    minHeight: hp("39.07104242043417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_105_3017: {
    width: wp("4.650269023827825%"),
    minWidth: wp("4.650269023827825%"),
    height: hp("68.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-17.076502732240442%")
  },
  View_105_3018: {
    width: wp("6.879323597232897%"),
    minWidth: wp("6.879323597232897%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2252113758647205%"),
    top: hp("-7.6502732240437155%")
  },
  ImageBackground_105_3019: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0361260568793256%"),
    top: hp("19.945355191256837%")
  },
  View_76_3152: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565696%"),
    top: hp("59.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3153: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.22290545734051%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_76_3154: {
    width: wp("1.80630284396618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5380476556494997%"),
    top: hp("0.9562841530054413%"),
    justifyContent: "flex-start"
  },
  Text_76_3154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_3155: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349738%"),
    backgroundColor: "rgba(198, 198, 200, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_76_3919: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_3920: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_3921: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_3922: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.378170637970793%"),
    top: hp("0.2732240437158566%")
  },
  View_76_3157: {
    width: wp("2.2290545734050733%"),
    minWidth: wp("2.2290545734050733%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_3157: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_3158: {
    flexGrow: 1,
    width: wp("13.066871637202151%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7302075326671762%"),
    top: hp("74.31693989071037%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3159: {
    width: wp("2.7671022290545735%"),
    minWidth: wp("2.7671022290545735%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_76_3160: {
    flexGrow: 1,
    width: wp("9.377401998462721%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.689469638739432%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3161: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061013%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_6538: {
    width: wp("0.8455034588777863%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1537279016141433%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_76_3163: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  },
  View_76_3164: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061013%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_76_3165: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194466%"),
    top: hp("0%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_76_3166: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194466%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_76_3167: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_76_3168: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_76_3169: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162184%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_76_3170: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162184%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_76_3171: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  ImageBackground_76_3172: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_76_3174: {
    flexGrow: 1,
    width: wp("1.80630284396618%"),
    height: hp("1.7757822255619238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.302843966179861%"),
    top: hp("89.6174863387978%")
  },
  View_76_3360: {
    width: wp("14.411990776325903%"),
    minWidth: wp("14.411990776325903%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.51345119139124%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  View_76_3361: {
    flexGrow: 1,
    width: wp("12.874711760184473%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7686395080707129%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_11744: {
    width: wp("0.7287305469791492%"),
    minWidth: wp("0.7287305469791492%"),
    height: hp("2.5730182564323716%"),
    minHeight: hp("2.5730182564323716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7626726327697924%")
  },
  View_76_3363: {
    width: wp("2.0368946963873946%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.206782042659498%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_76_3363: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_76_3364: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.721752498078402%")
  },
  View_76_3366: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565661%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_I76_3366_6_830: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080708053%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_3366_6_830_6_810: {
    flexGrow: 1,
    width: wp("0.02495855848941319%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.26790089354342%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I76_3366_6_830_6_811: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282795%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_3366_6_830_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I76_3366_6_831: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.419677171406612%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_3366_6_831_6_811: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282937%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_3366_6_831_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I76_3366_6_832: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.76249039200615%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I76_3366_6_832_6_807: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282866%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_3366_6_832_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_76_3490: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565661%"),
    top: hp("59.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3491: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.22290545734051%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_76_3492: {
    width: wp("1.80630284396618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5380476556495069%"),
    top: hp("0.9562841530054413%"),
    justifyContent: "flex-start"
  },
  Text_76_3492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_3493: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349738%"),
    backgroundColor: "rgba(198, 198, 200, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_76_3923: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_3924: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_3925: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_3926: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.37817063797079%"),
    top: hp("0.2732240437158566%")
  },
  View_76_3495: {
    width: wp("2.2290545734050733%"),
    minWidth: wp("2.2290545734050733%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_3495: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_3884: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565661%"),
    top: hp("17.213114754098356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3866: {
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3867: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.22290545734051%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_76_3868: {
    width: wp("0.4611837048424289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1913912375096132%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_76_3868: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_3902: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_3903: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_3904: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_3905: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080707342%"),
    top: hp("0.2732240437158566%")
  },
  View_76_3871: {
    width: wp("1.037663335895465%"),
    minWidth: wp("1.037663335895465%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_3871: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_3875: {
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3876: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.22290545734051%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_76_3877: {
    width: wp("0.4611837048424289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1913912375096132%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_76_3877: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_3894: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_3895: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_3896: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_3897: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080707342%"),
    top: hp("0.2732240437158424%")
  },
  View_76_3880: {
    width: wp("1.7294388931591083%"),
    minWidth: wp("1.7294388931591083%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_3880: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_3885: {
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3886: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.22290545734051%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_76_3887: {
    width: wp("0.4611837048424289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1913912375096132%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_76_3887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_3898: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_3899: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_3900: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_3901: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080707342%"),
    top: hp("0.2732240437158424%")
  },
  View_76_3889: {
    width: wp("1.3066871637202153%"),
    minWidth: wp("1.3066871637202153%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_3889: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_3927: {
    width: wp("13.182167563412758%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3928: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.299769408147583%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_76_3929: {
    width: wp("2.536510376633359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15372790161413974%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_76_3929: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_3937: {
    width: wp("6.072252113758648%"),
    minWidth: wp("6.072252113758648%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_76_3937: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_76_3496: {
    flexGrow: 1,
    width: wp("13.066871637202151%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7302075326671797%"),
    top: hp("74.31693989071037%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3497: {
    width: wp("2.7671022290545735%"),
    minWidth: wp("2.7671022290545735%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_76_3498: {
    flexGrow: 1,
    width: wp("9.377401998462721%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.689469638739432%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_3499: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_6537: {
    width: wp("0.8455034588777863%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15372790161413974%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_76_3501: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  },
  View_76_3502: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_76_3503: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1137586471944587%"),
    top: hp("0%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_76_3504: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1137586471944587%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_76_3505: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_76_3506: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_76_3507: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162177%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_76_3508: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162177%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_76_3509: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146036%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  ImageBackground_76_3510: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146036%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_76_3512: {
    flexGrow: 1,
    width: wp("1.80630284396618%"),
    height: hp("1.7757822255619238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.302843966179857%"),
    top: hp("89.6174863387978%")
  },
  View_71_4093: {
    width: wp("14.411990776325903%"),
    minWidth: wp("14.411990776325903%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.15526518063029%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_71_5890: {
    flexGrow: 1,
    width: wp("12.874711760184473%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7686395080707058%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_11745: {
    width: wp("0.7287305469791492%"),
    minWidth: wp("0.7287305469791492%"),
    height: hp("2.5730182564323716%"),
    minHeight: hp("2.5730182564323716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7626726327697924%")
  },
  View_71_5892: {
    width: wp("2.0368946963873946%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.206782042659498%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_71_5892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_71_6260: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.72175249807841%")
  },
  View_71_4096: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565661%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  View_I71_4096_38_2895: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080707342%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I71_4096_38_2895_6_815: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282937%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I71_4096_38_2895_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I71_4096_38_2896: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.419677171406612%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_4096_38_2896_6_818: {
    flexGrow: 1,
    width: wp("0.025102525926570904%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.292596440238285%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I71_4096_38_2896_6_819: {
    flexGrow: 1,
    width: wp("3.7663335895465027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282866%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I71_4096_38_2896_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I71_4096_38_2897: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.76249039200615%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_4096_38_2897_6_819: {
    flexGrow: 1,
    width: wp("3.7663335895465027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282866%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I71_4096_38_2897_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_71_4097: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565661%"),
    top: hp("17.213114754098356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_71_4098: {
    width: wp("13.182167563412758%"),
    minWidth: wp("13.182167563412758%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_4218: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(222, 238, 212, 1)"
  },
  View_71_4217: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(246, 250, 219, 1)"
  },
  View_71_4216: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(253, 251, 221, 1)"
  },
  View_71_4215: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(254, 241, 213, 1)"
  },
  View_71_4214: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(254, 236, 212, 1)"
  },
  View_71_4213: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(255, 226, 214, 1)"
  },
  View_71_4212: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(255, 218, 216, 1)"
  },
  View_71_4211: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(249, 211, 224, 1)"
  },
  View_71_4210: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(239, 202, 254, 1)"
  },
  View_71_4209: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  View_71_4208: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(210, 226, 254, 1)"
  },
  View_71_4207: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(203, 240, 255, 1)"
  },
  View_71_4206: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(205, 232, 181, 1)"
  },
  View_71_4205: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(241, 247, 183, 1)"
  },
  View_71_4204: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(255, 251, 185, 1)"
  },
  View_71_4203: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(253, 228, 168, 1)"
  },
  View_71_4202: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(254, 217, 168, 1)"
  },
  View_71_4201: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(255, 197, 171, 1)"
  },
  View_71_4200: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(255, 181, 175, 1)"
  },
  View_71_4199: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(244, 164, 192, 1)"
  },
  View_71_4198: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(226, 146, 254, 1)"
  },
  View_71_4197: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_71_4196: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(167, 198, 255, 1)"
  },
  View_71_4195: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(147, 227, 252, 1)"
  },
  View_71_4194: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(177, 221, 139, 1)"
  },
  View_71_4193: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(234, 242, 143, 1)"
  },
  View_71_4192: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(255, 249, 148, 1)"
  },
  View_71_4191: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(254, 217, 119, 1)"
  },
  View_71_4190: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(254, 199, 119, 1)"
  },
  View_71_4189: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(254, 165, 125, 1)"
  },
  View_71_4188: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_71_4187: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_71_4186: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(211, 87, 254, 1)"
  },
  View_71_4185: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(134, 79, 253, 1)"
  },
  View_71_4184: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(116, 167, 255, 1)"
  },
  View_71_4183: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(82, 214, 252, 1)"
  },
  View_71_4182: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(150, 211, 95, 1)"
  },
  View_71_4181: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(228, 239, 101, 1)"
  },
  View_71_4180: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(255, 247, 107, 1)"
  },
  View_71_4179: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 203, 62, 1)"
  },
  View_71_4178: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 180, 63, 1)"
  },
  View_71_4177: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 134, 72, 1)"
  },
  View_71_4176: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_71_4175: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(230, 59, 122, 1)"
  },
  View_71_4174: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(190, 56, 243, 1)"
  },
  View_71_4173: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(94, 48, 235, 1)"
  },
  View_71_4172: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(58, 135, 253, 1)"
  },
  View_71_4171: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(1, 199, 252, 1)"
  },
  View_71_4170: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(118, 187, 64, 1)"
  },
  View_71_4169: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.953112990007696%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(217, 236, 55, 1)"
  },
  View_71_4168: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(254, 251, 65, 1)"
  },
  View_71_4167: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.76249039200615%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(252, 199, 0, 1)"
  },
  View_71_4166: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_71_4165: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.571867794004618%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(255, 106, 0, 1)"
  },
  View_71_4164: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_71_4163: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(185, 45, 93, 1)"
  },
  View_71_4162: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(152, 42, 188, 1)"
  },
  View_71_4161: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_71_4160: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(0, 97, 253, 1)"
  },
  View_71_4159: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.12568306010931%"),
    backgroundColor: "rgba(0, 161, 216, 1)"
  },
  View_71_4158: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(102, 157, 52, 1)"
  },
  View_71_4157: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(195, 209, 23, 1)"
  },
  View_71_4156: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(245, 236, 0, 1)"
  },
  View_71_4155: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(209, 157, 1, 1)"
  },
  View_71_4154: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(211, 131, 1, 1)"
  },
  View_71_4153: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(218, 81, 0, 1)"
  },
  View_71_4152: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(226, 36, 0, 1)"
  },
  View_71_4151: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(153, 36, 79, 1)"
  },
  View_71_4150: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(122, 33, 158, 1)"
  },
  View_71_4149: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(55, 26, 148, 1)"
  },
  View_71_4148: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(0, 86, 214, 1)"
  },
  View_71_4147: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(0, 140, 180, 1)"
  },
  View_71_4146: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(78, 122, 39, 1)"
  },
  View_71_4145: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(155, 165, 14, 1)"
  },
  View_71_4144: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(196, 188, 0, 1)"
  },
  View_71_4143: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(166, 123, 1, 1)"
  },
  View_71_4142: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(169, 104, 0, 1)"
  },
  View_71_4141: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(173, 62, 0, 1)"
  },
  View_71_4140: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(181, 26, 0, 1)"
  },
  View_71_4139: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(121, 26, 61, 1)"
  },
  View_71_4138: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(97, 24, 124, 1)"
  },
  View_71_4137: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(44, 9, 119, 1)"
  },
  View_71_4136: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(0, 66, 169, 1)"
  },
  View_71_4135: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(1, 110, 143, 1)"
  },
  View_71_4134: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(56, 87, 26, 1)"
  },
  View_71_4133: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(111, 118, 10, 1)"
  },
  View_71_4132: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(141, 134, 2, 1)"
  },
  View_71_4131: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(120, 88, 0, 1)"
  },
  View_71_4130: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(122, 74, 0, 1)"
  },
  View_71_4129: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(123, 41, 0, 1)"
  },
  View_71_4128: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(131, 17, 0, 1)"
  },
  View_71_4127: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3812451960030785%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(85, 16, 41, 1)"
  },
  View_71_4126: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(69, 13, 89, 1)"
  },
  View_71_4125: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(26, 10, 82, 1)"
  },
  View_71_4124: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(1, 47, 123, 1)"
  },
  View_71_4123: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 77, 101, 1)"
  },
  View_71_4122: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(38, 62, 15, 1)"
  },
  View_71_4120: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(79, 85, 4, 1)"
  },
  View_71_4118: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(102, 97, 0, 1)"
  },
  View_71_4116: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.76249039200615%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(86, 61, 0, 1)"
  },
  View_71_4114: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(88, 51, 0, 1)"
  },
  View_71_4112: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(90, 28, 0, 1)"
  },
  View_71_4110: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(92, 7, 1, 1)"
  },
  View_71_4108: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.419677171406612%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(60, 7, 27, 1)"
  },
  View_71_4106: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(46, 6, 61, 1)"
  },
  View_71_4104: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(17, 5, 59, 1)"
  },
  View_71_4102: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(1, 29, 87, 1)"
  },
  View_71_4100: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(0, 55, 74, 1)"
  },
  View_71_4121: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.067640276710222%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_71_4119: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.99154496541123%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_71_4117: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.87701767870869%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_71_4115: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.80092236740969%"),
    top: hp("0%"),
    backgroundColor: "rgba(92, 92, 92, 1)"
  },
  View_71_4113: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68639508070715%"),
    top: hp("0%"),
    backgroundColor: "rgba(112, 112, 112, 1)"
  },
  View_71_4111: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.610299769408158%"),
    top: hp("0%"),
    backgroundColor: "rgba(133, 133, 133, 1)"
  },
  View_71_4109: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.495772482705618%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 153, 153, 1)"
  },
  View_71_4107: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.419677171406612%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 173, 173, 1)"
  },
  View_71_4105: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.305149884704072%"),
    top: hp("0%"),
    backgroundColor: "rgba(194, 194, 194, 1)"
  },
  View_71_4103: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1906225980015464%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_71_4101: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145272867025398%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_71_4099: {
    width: wp("1.1145272867025366%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 255, 254, 1)"
  },
  View_71_4219: {
    width: wp("1.0760953112990008%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0760953112990066%"),
    top: hp("22.950819672131146%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3
  },
  View_71_4220: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565661%"),
    top: hp("59.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_4221: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.222905457340516%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_71_4222: {
    width: wp("1.80630284396618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5380476556494997%"),
    top: hp("0.9562841530054413%"),
    justifyContent: "flex-start"
  },
  Text_71_4222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_71_4223: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349738%"),
    backgroundColor: "rgba(56, 56, 58, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_71_4224: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I71_4224_70_4470: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I71_4224_70_4471: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I71_4224_70_4472: {
    flexGrow: 1,
    width: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.37817063797079%"),
    top: hp("0.2732240437158566%")
  },
  View_71_4225: {
    width: wp("2.2290545734050733%"),
    minWidth: wp("2.2290545734050733%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_71_4225: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_71_4226: {
    flexGrow: 1,
    width: wp("13.066871637202151%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7302075326671797%"),
    top: hp("74.31693989071037%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_4227: {
    width: wp("2.7671022290545735%"),
    minWidth: wp("2.7671022290545735%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_71_4228: {
    flexGrow: 1,
    width: wp("9.377401998462721%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.689469638739425%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_4229: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_6534: {
    width: wp("0.8455034588777863%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15372790161414684%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_71_4231: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3
  },
  View_71_4232: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621061369%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_71_4234: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194466%"),
    top: hp("0%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_71_4235: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194466%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_71_4236: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_71_4237: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_71_4238: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162191%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_71_4239: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162191%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_71_4240: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  ImageBackground_71_4241: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_71_4243: {
    flexGrow: 1,
    width: wp("1.80630284396618%"),
    height: hp("1.7757822255619238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.302843966179857%"),
    top: hp("89.6174863387978%")
  },
  View_76_4103: {
    width: wp("14.411990776325903%"),
    minWidth: wp("14.411990776325903%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.79707916986934%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_76_4104: {
    flexGrow: 1,
    width: wp("12.874711760184473%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7686395080707058%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_11746: {
    width: wp("0.7287305469791492%"),
    minWidth: wp("0.7287305469791492%"),
    height: hp("2.5730182564323716%"),
    minHeight: hp("2.5730182564323716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7626726327697924%")
  },
  View_76_4106: {
    width: wp("2.0368946963873946%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.206782042659498%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_76_4106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_76_4107: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.721752498078402%")
  },
  View_76_4109: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.614911606456559%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_I76_4109_38_2891: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080708053%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_4109_38_2891_6_819: {
    flexGrow: 1,
    width: wp("3.7663335895465027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282795%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_4109_38_2891_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I76_4109_38_2892: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.419677171406619%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I76_4109_38_2892_6_815: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282795%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_4109_38_2892_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I76_4109_38_2893: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.762490392006157%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_4109_38_2893_6_819: {
    flexGrow: 1,
    width: wp("3.7663335895465027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282795%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_4109_38_2893_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_76_4110: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("39.07104242043417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.614911606456559%"),
    top: hp("17.213114754098356%")
  },
  View_105_3067: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("39.07104242043417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.614911606456559%"),
    top: hp("17.213114754098356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_105_3068: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("39.07104242043417%"),
    minHeight: hp("39.07104242043417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_105_3069: {
    width: wp("4.650269023827825%"),
    minWidth: wp("4.650269023827825%"),
    height: hp("68.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-17.076502732240442%")
  },
  View_105_3070: {
    width: wp("6.879323597232897%"),
    minWidth: wp("6.879323597232897%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.225211375864717%"),
    top: hp("-7.6502732240437155%")
  },
  ImageBackground_105_3071: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.03612605687934%"),
    top: hp("19.945355191256837%")
  },
  View_76_4111: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.614911606456559%"),
    top: hp("59.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4112: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.222905457340502%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_76_4113: {
    width: wp("1.80630284396618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5380476556495211%"),
    top: hp("0.9562841530054413%"),
    justifyContent: "flex-start"
  },
  Text_76_4113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_4114: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349738%"),
    backgroundColor: "rgba(198, 198, 200, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_76_4115: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621062079%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_4116: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_4117: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_4118: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.378170637970783%"),
    top: hp("0.2732240437158566%")
  },
  View_76_4119: {
    width: wp("2.2290545734050733%"),
    minWidth: wp("2.2290545734050733%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621062079%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_4119: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_4120: {
    flexGrow: 1,
    width: wp("13.066871637202151%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7302075326671797%"),
    top: hp("74.31693989071037%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4121: {
    width: wp("2.7671022290545735%"),
    minWidth: wp("2.7671022290545735%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_4122: {
    flexGrow: 1,
    width: wp("9.377401998462721%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.689469638739425%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4123: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_6533: {
    width: wp("0.8455034588777863%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15372790161413263%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_4125: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_76_4126: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_76_4127: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1137586471944587%"),
    top: hp("0%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_76_4128: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1137586471944587%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_76_4129: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_76_4130: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_76_4131: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162177%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_76_4132: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162177%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_76_4133: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  ImageBackground_76_4134: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_76_4136: {
    flexGrow: 1,
    width: wp("1.80630284396618%"),
    height: hp("1.7757822255619238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.30284396617985%"),
    top: hp("89.6174863387978%")
  },
  View_76_4137: {
    width: wp("14.411990776325903%"),
    minWidth: wp("14.411990776325903%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.43889315910837%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_76_4138: {
    flexGrow: 1,
    width: wp("12.874711760184473%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.76863950807072%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_11751: {
    width: wp("0.7287305469791492%"),
    minWidth: wp("0.7287305469791492%"),
    height: hp("2.5730182564323716%"),
    minHeight: hp("2.5730182564323716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7626726327697924%")
  },
  View_76_4140: {
    width: wp("2.0368946963873946%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.2067820426594835%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_76_4140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_76_4141: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.721752498078388%")
  },
  View_76_4143: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565732%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_I76_4143_38_2887: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080706632%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_4143_38_2887_6_818: {
    flexGrow: 1,
    width: wp("0.025102525926570904%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.29259644023827%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I76_4143_38_2887_6_819: {
    flexGrow: 1,
    width: wp("3.7663335895465027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282937%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_4143_38_2887_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I76_4143_38_2888: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4196771714066045%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_4143_38_2888_6_819: {
    flexGrow: 1,
    width: wp("3.7663335895465027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282937%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_4143_38_2888_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I76_4143_38_2889: {
    flexGrow: 1,
    width: wp("4.342813220599539%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.762490392006157%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I76_4143_38_2889_6_815: {
    flexGrow: 1,
    width: wp("3.7279016141429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3074558032282795%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I76_4143_38_2889_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_76_4144: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565732%"),
    top: hp("59.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4145: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.222905457340502%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_76_4146: {
    width: wp("1.80630284396618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5380476556494926%"),
    top: hp("0.9562841530054413%"),
    justifyContent: "flex-start"
  },
  Text_76_4146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_4147: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349738%"),
    backgroundColor: "rgba(56, 56, 58, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_76_4148: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_4149: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_4150: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_4151: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.378170637970783%"),
    top: hp("0.2732240437158566%")
  },
  View_76_4152: {
    width: wp("2.2290545734050733%"),
    minWidth: wp("2.2290545734050733%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_4152: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_4153: {
    flexGrow: 1,
    width: wp("13.182167563412758%"),
    height: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149116064565732%"),
    top: hp("17.213114754098356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4154: {
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4155: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.222905457340502%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_76_4156: {
    width: wp("0.4611837048424289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.191391237509606%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_76_4156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_4157: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_4158: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_4159: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_4160: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080706632%"),
    top: hp("0.2732240437158566%")
  },
  View_76_4161: {
    width: wp("1.037663335895465%"),
    minWidth: wp("1.037663335895465%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_4161: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_4162: {
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4163: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.222905457340502%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_76_4164: {
    width: wp("0.4611837048424289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.191391237509606%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_76_4164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_4165: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_4166: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_4167: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_4168: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080706632%"),
    top: hp("0.2732240437158424%")
  },
  View_76_4169: {
    width: wp("1.7294388931591083%"),
    minWidth: wp("1.7294388931591083%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_4169: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_4170: {
    width: wp("13.182167563412758%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4171: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.222905457340502%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_76_4172: {
    width: wp("0.4611837048424289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.191391237509606%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_76_4172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_4173: {
    flexGrow: 1,
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_76_4174: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_4175: {
    width: wp("9.684857801691008%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_4176: {
    width: wp("1.2298232129131437%"),
    minWidth: wp("1.2298232129131437%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07686395080706632%"),
    top: hp("0.2732240437158424%")
  },
  View_76_4177: {
    width: wp("1.3066871637202153%"),
    minWidth: wp("1.3066871637202153%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_76_4177: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_76_4178: {
    flexGrow: 1,
    width: wp("9.377401998462721%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8047655649500314%"),
    top: hp("34.42622950819673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4179: {
    width: wp("2.8823981552651805%"),
    minWidth: wp("2.8823981552651805%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.495003843197537%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_76_4180: {
    width: wp("2.536510376633359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15372790161414684%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_76_4180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_76_4181: {
    width: wp("6.072252113758648%"),
    minWidth: wp("6.072252113758648%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_76_4181: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_76_4182: {
    flexGrow: 1,
    width: wp("13.066871637202151%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7302075326671797%"),
    top: hp("74.31693989071037%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4183: {
    width: wp("2.7671022290545735%"),
    minWidth: wp("2.7671022290545735%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_4184: {
    flexGrow: 1,
    width: wp("9.377401998462721%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.689469638739425%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_4185: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_6532: {
    width: wp("0.8455034588777863%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15372790161414684%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_4187: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3
  },
  View_76_4188: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11529592621060658%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 171, 1, 1)"
  },
  View_76_4189: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194473%"),
    top: hp("0%"),
    backgroundColor: "rgba(177, 140, 254, 1)"
  },
  View_76_4190: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.113758647194473%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 140, 130, 1)"
  },
  View_76_4191: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 113, 158, 1)"
  },
  View_76_4192: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112221368178325%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 64, 21, 1)"
  },
  View_76_4193: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162191%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 34, 178, 1)"
  },
  View_76_4194: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.110684089162191%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(254, 98, 80, 1)"
  },
  View_76_4195: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 201, 254, 1)"
  },
  ImageBackground_76_4196: {
    width: wp("1.1529592621060722%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.109146810146044%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_76_4198: {
    flexGrow: 1,
    width: wp("1.80630284396618%"),
    height: hp("1.7757822255619238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.302843966179864%"),
    top: hp("89.6174863387978%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
