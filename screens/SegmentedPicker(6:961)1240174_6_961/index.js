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
      <View style={styles.View_140_5509}>
        <View style={styles.View_6_962}>
          <View style={styles.View_I6_962_5_19}>
            <View style={styles.View_I6_962_5_20}>
              <View style={styles.View_I6_962_5_21} />
              <View style={styles.View_I6_962_5_22}>
                <Text style={styles.Text_I6_962_5_22}>Segmented Picker</Text>
              </View>
            </View>
            <View style={styles.View_I6_962_5_23}>
              <Text style={styles.Text_I6_962_5_23}>
                Human Interface Guidelines: Segmented Picker
              </Text>
            </View>
          </View>
          <View style={styles.View_I6_962_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a77f/a4b0/db4bf552c13b78e528ecf324d7eb0810"
          }}
          style={styles.ImageBackground_140_5534}
        />
      </View>
      <View style={styles.View_10_2322}>
        <View style={styles.View_I10_2322_10_2304}>
          <Text style={styles.Text_I10_2322_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I10_2322_10_2303} />
      </View>
      <View style={styles.View_7_885}>
        <View style={styles.View_7_880}>
          <Text style={styles.Text_7_880}>Option</Text>
        </View>
        <View style={styles.View_6_801}>
          <View style={styles.View_7_881}>
            <View style={styles.View_7_882}>
              <View style={styles.View_7_883}>
                <Text style={styles.Text_7_883}>Light / Selected</Text>
              </View>
              <View style={styles.View_7_884}>
                <Text style={styles.Text_7_884}>Light / Not Selected</Text>
              </View>
              <View style={styles.View_7_886}>
                <Text style={styles.Text_7_886}>Dark / Selected</Text>
              </View>
              <View style={styles.View_7_887}>
                <Text style={styles.Text_7_887}>Dark / Not Selected</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_6_803}>
            <View style={styles.View_6_804}>
              <View style={styles.View_6_807}>
                <Text style={styles.Text_6_807}>On</Text>
              </View>
            </View>
            <View style={styles.View_6_808}>
              <View style={styles.View_6_811}>
                <Text style={styles.Text_6_811}>Off</Text>
              </View>
            </View>
            <View style={styles.View_6_812}>
              <View style={styles.View_6_815}>
                <Text style={styles.Text_6_815}>On</Text>
              </View>
            </View>
            <View style={styles.View_6_816}>
              <View style={styles.View_6_819}>
                <Text style={styles.Text_6_819}>Off</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_2327}>
        <View style={styles.View_I10_2327_10_2311}>
          <Text style={styles.Text_I10_2327_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I10_2327_10_2312} />
      </View>
      <View style={styles.View_7_911}>
        <View style={styles.View_7_912}>
          <Text style={styles.Text_7_912}>SegmentedPicker</Text>
        </View>
        <View style={styles.View_7_913}>
          <View style={styles.View_7_914}>
            <View style={styles.View_7_915}>
              <View style={styles.View_7_916}>
                <Text style={styles.Text_7_916}>
                  Light / 2 Options / Right Selected
                </Text>
              </View>
              <View style={styles.View_41_2575}>
                <Text style={styles.Text_41_2575}>
                  Light / 2 Options / Left Selected
                </Text>
              </View>
              <View style={styles.View_41_2576}>
                <Text style={styles.Text_41_2576}>
                  Light / 3 Options / Right Selected
                </Text>
              </View>
              <View style={styles.View_41_2577}>
                <Text style={styles.Text_41_2577}>
                  Light / 3 Options / Center Selected
                </Text>
              </View>
              <View style={styles.View_41_2578}>
                <Text style={styles.Text_41_2578}>
                  Light / 3 Options / Left Selected
                </Text>
              </View>
              <View style={styles.View_41_2579}>
                <Text style={styles.Text_41_2579}>
                  Light / 4 Options / Right Selected
                </Text>
              </View>
              <View style={styles.View_41_2580}>
                <Text style={styles.Text_41_2580}>
                  Light / 4 Options / Right-Center Selected
                </Text>
              </View>
              <View style={styles.View_41_2581}>
                <Text style={styles.Text_41_2581}>
                  Light / 4 Options / Left-Center Selected
                </Text>
              </View>
              <View style={styles.View_41_2582}>
                <Text style={styles.Text_41_2582}>
                  Light / 4 Options / Left Selected
                </Text>
              </View>
              <View style={styles.View_41_2592}>
                <Text style={styles.Text_41_2592}>
                  Dark / 2 Options / Right Selected
                </Text>
              </View>
              <View style={styles.View_41_2593}>
                <Text style={styles.Text_41_2593}>
                  Dark / 2 Options / Left Selected
                </Text>
              </View>
              <View style={styles.View_41_2594}>
                <Text style={styles.Text_41_2594}>
                  Dark / 3 Options / Right Selected
                </Text>
              </View>
              <View style={styles.View_41_2595}>
                <Text style={styles.Text_41_2595}>
                  Dark / 3 Options / Center Selected
                </Text>
              </View>
              <View style={styles.View_41_2596}>
                <Text style={styles.Text_41_2596}>
                  Dark / 3 Options / Left Selected
                </Text>
              </View>
              <View style={styles.View_41_2597}>
                <Text style={styles.Text_41_2597}>
                  Dark / 4 Options / Right Selected
                </Text>
              </View>
              <View style={styles.View_41_2598}>
                <Text style={styles.Text_41_2598}>
                  Dark / 4 Options / Right-Center Selected
                </Text>
              </View>
              <View style={styles.View_41_2599}>
                <Text style={styles.Text_41_2599}>
                  Dark / 4 Options / Left-Center Selected
                </Text>
              </View>
              <View style={styles.View_41_2600}>
                <Text style={styles.Text_41_2600}>
                  Dark / 4 Options / Left Selected
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_6_822}>
            <View style={styles.View_6_823}>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_824}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_826"))
                }
              >
                <View style={styles.View_I6_824_6_811}>
                  <Text style={styles.Text_I6_824_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_6_825}>
                <View style={styles.View_I6_825_6_807}>
                  <Text style={styles.Text_I6_825_6_807}>On</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_6_826}>
              <View style={styles.View_6_827}>
                <View style={styles.View_I6_827_6_807}>
                  <Text style={styles.Text_I6_827_6_807}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_828}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_823"))
                }
              >
                <View style={styles.View_I6_828_6_811}>
                  <Text style={styles.Text_I6_828_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_6_829}>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_830}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_837"))
                }
              >
                <View style={styles.View_I6_830_6_810} />
                <View style={styles.View_I6_830_6_811}>
                  <Text style={styles.Text_I6_830_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_831}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_833"))
                }
              >
                <View style={styles.View_I6_831_6_811}>
                  <Text style={styles.Text_I6_831_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_6_832}>
                <View style={styles.View_I6_832_6_807}>
                  <Text style={styles.Text_I6_832_6_807}>On</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_6_833}>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_834}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_837"))
                }
              >
                <View style={styles.View_I6_834_6_811}>
                  <Text style={styles.Text_I6_834_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_6_835}>
                <View style={styles.View_I6_835_6_807}>
                  <Text style={styles.Text_I6_835_6_807}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_836}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_829"))
                }
              >
                <View style={styles.View_I6_836_6_811}>
                  <Text style={styles.Text_I6_836_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_6_837}>
              <View style={styles.View_6_838}>
                <View style={styles.View_I6_838_6_807}>
                  <Text style={styles.Text_I6_838_6_807}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_839}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_833"))
                }
              >
                <View style={styles.View_I6_839_6_810} />
                <View style={styles.View_I6_839_6_811}>
                  <Text style={styles.Text_I6_839_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_6_840}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("6_829"))
                }
              >
                <View style={styles.View_I6_840_6_811}>
                  <Text style={styles.Text_I6_840_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2710}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2711}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2572"))
                }
              >
                <View style={styles.View_I38_2711_6_810} />
                <View style={styles.View_I38_2711_6_811}>
                  <Text style={styles.Text_I38_2711_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2712}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2684"))
                }
              >
                <View style={styles.View_I38_2712_6_810} />
                <View style={styles.View_I38_2712_6_811}>
                  <Text style={styles.Text_I38_2712_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2713}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2697"))
                }
              >
                <View style={styles.View_I38_2713_6_811}>
                  <Text style={styles.Text_I38_2713_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2714}>
                <View style={styles.View_I38_2714_6_807}>
                  <Text style={styles.Text_I38_2714_6_807}>On</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_38_2697}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2698}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2572"))
                }
              >
                <View style={styles.View_I38_2698_6_810} />
                <View style={styles.View_I38_2698_6_811}>
                  <Text style={styles.Text_I38_2698_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2699}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2684"))
                }
              >
                <View style={styles.View_I38_2699_6_811}>
                  <Text style={styles.Text_I38_2699_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2700}>
                <View style={styles.View_I38_2700_6_807}>
                  <Text style={styles.Text_I38_2700_6_807}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2701}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2710"))
                }
              >
                <View style={styles.View_I38_2701_6_811}>
                  <Text style={styles.Text_I38_2701_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2684}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2685}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2572"))
                }
              >
                <View style={styles.View_I38_2685_6_811}>
                  <Text style={styles.Text_I38_2685_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2686}>
                <View style={styles.View_I38_2686_6_807}>
                  <Text style={styles.Text_I38_2686_6_807}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2687}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2697"))
                }
              >
                <View style={styles.View_I38_2687_6_810} />
                <View style={styles.View_I38_2687_6_811}>
                  <Text style={styles.Text_I38_2687_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2688}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2710"))
                }
              >
                <View style={styles.View_I38_2688_6_811}>
                  <Text style={styles.Text_I38_2688_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2572}>
              <View style={styles.View_38_2612}>
                <View style={styles.View_I38_2612_6_807}>
                  <Text style={styles.Text_I38_2612_6_807}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2573}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2684"))
                }
              >
                <View style={styles.View_I38_2573_6_810} />
                <View style={styles.View_I38_2573_6_811}>
                  <Text style={styles.Text_I38_2573_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2574}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2697"))
                }
              >
                <View style={styles.View_I38_2574_6_810} />
                <View style={styles.View_I38_2574_6_811}>
                  <Text style={styles.Text_I38_2574_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2575}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2710"))
                }
              >
                <View style={styles.View_I38_2575_6_811}>
                  <Text style={styles.Text_I38_2575_6_811}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2880}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2881}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2883"))
                }
              >
                <View style={styles.View_I38_2881_6_819}>
                  <Text style={styles.Text_I38_2881_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2882}>
                <View style={styles.View_I38_2882_6_815}>
                  <Text style={styles.Text_I38_2882_6_815}>On</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_38_2883}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2884}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2880"))
                }
              >
                <View style={styles.View_I38_2884_6_815}>
                  <Text style={styles.Text_I38_2884_6_815}>On</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2885}>
                <View style={styles.View_I38_2885_6_819}>
                  <Text style={styles.Text_I38_2885_6_819}>Off</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_38_2886}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2887}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2894"))
                }
              >
                <View style={styles.View_I38_2887_6_818} />
                <View style={styles.View_I38_2887_6_819}>
                  <Text style={styles.Text_I38_2887_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2888}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2890"))
                }
              >
                <View style={styles.View_I38_2888_6_819}>
                  <Text style={styles.Text_I38_2888_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2889}>
                <View style={styles.View_I38_2889_6_815}>
                  <Text style={styles.Text_I38_2889_6_815}>On</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_38_2890}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2891}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2894"))
                }
              >
                <View style={styles.View_I38_2891_6_819}>
                  <Text style={styles.Text_I38_2891_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2892}>
                <View style={styles.View_I38_2892_6_815}>
                  <Text style={styles.Text_I38_2892_6_815}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2893}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2886"))
                }
              >
                <View style={styles.View_I38_2893_6_819}>
                  <Text style={styles.Text_I38_2893_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2894}>
              <View style={styles.View_38_2895}>
                <View style={styles.View_I38_2895_6_815}>
                  <Text style={styles.Text_I38_2895_6_815}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2896}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2890"))
                }
              >
                <View style={styles.View_I38_2896_6_818} />
                <View style={styles.View_I38_2896_6_819}>
                  <Text style={styles.Text_I38_2896_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2897}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2886"))
                }
              >
                <View style={styles.View_I38_2897_6_819}>
                  <Text style={styles.Text_I38_2897_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2913}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2914}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2898"))
                }
              >
                <View style={styles.View_I38_2914_6_818} />
                <View style={styles.View_I38_2914_6_819}>
                  <Text style={styles.Text_I38_2914_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2915}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2903"))
                }
              >
                <View style={styles.View_I38_2915_6_818} />
                <View style={styles.View_I38_2915_6_819}>
                  <Text style={styles.Text_I38_2915_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2916}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2908"))
                }
              >
                <View style={styles.View_I38_2916_6_819}>
                  <Text style={styles.Text_I38_2916_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2917}>
                <View style={styles.View_I38_2917_6_815}>
                  <Text style={styles.Text_I38_2917_6_815}>On</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_38_2908}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2909}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2898"))
                }
              >
                <View style={styles.View_I38_2909_6_818} />
                <View style={styles.View_I38_2909_6_819}>
                  <Text style={styles.Text_I38_2909_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2910}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2903"))
                }
              >
                <View style={styles.View_I38_2910_6_819}>
                  <Text style={styles.Text_I38_2910_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2911}>
                <View style={styles.View_I38_2911_6_815}>
                  <Text style={styles.Text_I38_2911_6_815}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2912}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2913"))
                }
              >
                <View style={styles.View_I38_2912_6_819}>
                  <Text style={styles.Text_I38_2912_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2903}>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2904}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2898"))
                }
              >
                <View style={styles.View_I38_2904_6_819}>
                  <Text style={styles.Text_I38_2904_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_38_2905}>
                <View style={styles.View_I38_2905_6_815}>
                  <Text style={styles.Text_I38_2905_6_815}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2906}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2908"))
                }
              >
                <View style={styles.View_I38_2906_6_818} />
                <View style={styles.View_I38_2906_6_819}>
                  <Text style={styles.Text_I38_2906_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2907}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2913"))
                }
              >
                <View style={styles.View_I38_2907_6_819}>
                  <Text style={styles.Text_I38_2907_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_38_2898}>
              <View style={styles.View_38_2899}>
                <View style={styles.View_I38_2899_6_815}>
                  <Text style={styles.Text_I38_2899_6_815}>On</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2900}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2903"))
                }
              >
                <View style={styles.View_I38_2900_6_818} />
                <View style={styles.View_I38_2900_6_819}>
                  <Text style={styles.Text_I38_2900_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2901}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2908"))
                }
              >
                <View style={styles.View_I38_2901_6_818} />
                <View style={styles.View_I38_2901_6_819}>
                  <Text style={styles.Text_I38_2901_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_38_2902}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("38_2913"))
                }
              >
                <View style={styles.View_I38_2902_6_819}>
                  <Text style={styles.Text_I38_2902_6_819}>Off</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("295.77209806181696%") },
  View_140_5509: {
    width: wp("87.78625954198473%"),
    minWidth: wp("87.78625954198473%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.106870229007633%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_962: {
    flexGrow: 1,
    width: wp("87.78625954198473%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_962_5_19: {
    flexGrow: 1,
    width: wp("87.78625954198473%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_962_5_20: {
    width: wp("46.75572519083969%"),
    minWidth: wp("46.75572519083969%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_962_5_21: {
    width: wp("5.343511450381679%"),
    minWidth: wp("5.343511450381679%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I6_962_5_22: {
    width: wp("38.3587786259542%"),
    minWidth: wp("38.3587786259542%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.396946564885496%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I6_962_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I6_962_5_23: {
    width: wp("37.97709923664122%"),
    minWidth: wp("37.97709923664122%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.80916030534351%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I6_962_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I6_962_5_24: {
    flexGrow: 1,
    width: wp("87.78625954198473%"),
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
  ImageBackground_140_5534: {
    width: wp("5.343511450381679%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_2322: {
    width: wp("87.78625954198473%"),
    minWidth: wp("87.78625954198473%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.106870229007633%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2322_10_2304: {
    flexGrow: 1,
    width: wp("6.7748091603053435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2322_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2322_10_2303: {
    flexGrow: 1,
    width: wp("87.78625954198473%"),
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
  View_7_885: {
    width: wp("43.034351145038165%"),
    minWidth: wp("43.034351145038165%"),
    height: hp("44.81002724235827%"),
    minHeight: hp("44.81002724235827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.106870229007633%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_880: {
    width: wp("6.583969465648855%"),
    minWidth: wp("6.583969465648855%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_7_880: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_6_801: {
    width: wp("43.034351145038165%"),
    minWidth: wp("43.034351145038165%"),
    height: hp("37.15975401831455%"),
    minHeight: hp("37.15975401831455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_7_881: {
    width: wp("17.270992366412212%"),
    minWidth: wp("17.270992366412212%"),
    height: hp("27.86885245901639%"),
    minHeight: hp("27.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.763358778625957%"),
    top: hp("4.644808743169399%")
  },
  View_7_882: {
    width: wp("17.270992366412212%"),
    minWidth: wp("17.270992366412212%"),
    height: hp("27.86885245901639%"),
    minHeight: hp("27.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_883: {
    width: wp("13.835877862595419%"),
    minWidth: wp("13.835877862595419%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_7_883: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_7_884: {
    width: wp("17.270992366412212%"),
    minWidth: wp("17.270992366412212%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475407%"),
    justifyContent: "center"
  },
  Text_7_884: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_7_886: {
    width: wp("12.977099236641221%"),
    minWidth: wp("12.977099236641221%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.393442622950822%"),
    justifyContent: "center"
  },
  Text_7_886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_7_887: {
    width: wp("16.412213740458014%"),
    minWidth: wp("16.412213740458014%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.590163934426222%"),
    justifyContent: "center"
  },
  Text_7_887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_6_803: {
    width: wp("22.709923664122137%"),
    minWidth: wp("22.709923664122137%"),
    height: hp("37.15975401831455%"),
    minHeight: hp("37.15975401831455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_804: {
    width: wp("16.603053435114504%"),
    minWidth: wp("16.603053435114504%"),
    height: hp("3.8254581513952037%"),
    minHeight: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_807: {
    flexGrow: 1,
    width: wp("15.076335877862595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_808: {
    width: wp("16.603053435114504%"),
    minWidth: wp("16.603053435114504%"),
    height: hp("3.8254581513952037%"),
    minHeight: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("12.568622860100746%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_811: {
    flexGrow: 1,
    width: wp("15.076335877862595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_812: {
    width: wp("16.603053435114504%"),
    minWidth: wp("16.603053435114504%"),
    height: hp("3.8254581513952037%"),
    minHeight: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("20.76566102074794%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_6_815: {
    flexGrow: 1,
    width: wp("15.076335877862595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_816: {
    width: wp("16.603053435114504%"),
    minWidth: wp("16.603053435114504%"),
    height: hp("3.8254581513952037%"),
    minHeight: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("28.962715857667348%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_819: {
    flexGrow: 1,
    width: wp("15.171755725190838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_10_2327: {
    width: wp("87.78625954198473%"),
    minWidth: wp("87.78625954198473%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.106870229007633%"),
    top: hp("100.41112013853312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_2327_10_2311: {
    flexGrow: 1,
    width: wp("10.687022900763358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_2327_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10_2327_10_2312: {
    flexGrow: 1,
    width: wp("87.78625954198473%"),
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
  View_7_911: {
    width: wp("77.29007633587787%"),
    minWidth: wp("77.29007633587787%"),
    height: hp("169.40469377027833%"),
    minHeight: hp("169.40469377027833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.106870229007633%"),
    top: hp("117.62423489263149%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_912: {
    width: wp("16.50763358778626%"),
    minWidth: wp("16.50763358778626%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_7_912: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_7_913: {
    width: wp("77.29007633587787%"),
    minWidth: wp("77.29007633587787%"),
    height: hp("161.75442054623463%"),
    minHeight: hp("161.75442054623463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_7_914: {
    width: wp("35.400763358778626%"),
    minWidth: wp("35.400763358778626%"),
    height: hp("151.9125683060109%"),
    minHeight: hp("151.9125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.88931297709924%"),
    top: hp("4.916748713925884%")
  },
  View_7_915: {
    width: wp("35.400763358778626%"),
    minWidth: wp("35.400763358778626%"),
    height: hp("151.9125683060109%"),
    minHeight: hp("151.9125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_916: {
    width: wp("29.293893129770993%"),
    minWidth: wp("29.293893129770993%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_7_916: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2575: {
    width: wp("28.435114503816795%"),
    minWidth: wp("28.435114503816795%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907128%"),
    justifyContent: "center"
  },
  Text_41_2575: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2576: {
    width: wp("29.293893129770993%"),
    minWidth: wp("29.293893129770993%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.486338797814227%"),
    justifyContent: "center"
  },
  Text_41_2576: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2577: {
    width: wp("30.15267175572519%"),
    minWidth: wp("30.15267175572519%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.229508196721326%"),
    justifyContent: "center"
  },
  Text_41_2577: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2578: {
    width: wp("28.435114503816795%"),
    minWidth: wp("28.435114503816795%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.972677595628426%"),
    justifyContent: "center"
  },
  Text_41_2578: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2579: {
    width: wp("29.293893129770993%"),
    minWidth: wp("29.293893129770993%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.715846994535525%"),
    justifyContent: "center"
  },
  Text_41_2579: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2580: {
    width: wp("35.400763358778626%"),
    minWidth: wp("35.400763358778626%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.45901639344265%"),
    justifyContent: "center"
  },
  Text_41_2580: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2581: {
    width: wp("34.44656488549619%"),
    minWidth: wp("34.44656488549619%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.20218579234975%"),
    justifyContent: "center"
  },
  Text_41_2581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2582: {
    width: wp("28.435114503816795%"),
    minWidth: wp("28.435114503816795%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69.94535519125682%"),
    justifyContent: "center"
  },
  Text_41_2582: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2592: {
    width: wp("28.435114503816795%"),
    minWidth: wp("28.435114503816795%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78.68852459016395%"),
    justifyContent: "center"
  },
  Text_41_2592: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2593: {
    width: wp("27.576335877862597%"),
    minWidth: wp("27.576335877862597%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.43169398907105%"),
    justifyContent: "center"
  },
  Text_41_2593: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2594: {
    width: wp("28.435114503816795%"),
    minWidth: wp("28.435114503816795%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.17486338797818%"),
    justifyContent: "center"
  },
  Text_41_2594: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2595: {
    width: wp("29.293893129770993%"),
    minWidth: wp("29.293893129770993%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104.91803278688525%"),
    justifyContent: "center"
  },
  Text_41_2595: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2596: {
    width: wp("27.576335877862597%"),
    minWidth: wp("27.576335877862597%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.66120218579235%"),
    justifyContent: "center"
  },
  Text_41_2596: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2597: {
    width: wp("28.435114503816795%"),
    minWidth: wp("28.435114503816795%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122.40437158469948%"),
    justifyContent: "center"
  },
  Text_41_2597: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2598: {
    width: wp("34.44656488549619%"),
    minWidth: wp("34.44656488549619%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131.1475409836066%"),
    justifyContent: "center"
  },
  Text_41_2598: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2599: {
    width: wp("33.587786259541986%"),
    minWidth: wp("33.587786259541986%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("139.89071038251367%"),
    justifyContent: "center"
  },
  Text_41_2599: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_41_2600: {
    width: wp("27.576335877862597%"),
    minWidth: wp("27.576335877862597%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("148.63387978142075%"),
    justifyContent: "center"
  },
  Text_41_2600: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_6_822: {
    width: wp("38.83587786259542%"),
    minWidth: wp("38.83587786259542%"),
    height: hp("161.75442054623463%"),
    minHeight: hp("161.75442054623463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_823: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_6_824: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_824_6_811: {
    flexGrow: 1,
    width: wp("14.694656488549619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I6_824_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_825: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I6_825_6_807: {
    flexGrow: 1,
    width: wp("14.694656488549619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I6_825_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_826: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("13.115070947532459%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_6_827: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I6_827_6_807: {
    flexGrow: 1,
    width: wp("14.694656488549619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I6_827_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_6_828: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_828_6_811: {
    flexGrow: 1,
    width: wp("14.694656488549619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I6_828_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_829: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("21.858573871883564%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_6_830: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_830_6_810: {
    flexGrow: 1,
    width: wp("0.06196771869222626%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.596541776001906%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I6_830_6_811: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I6_830_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_6_831: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.97328244274809%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_831_6_811: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I6_831_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_832: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.755725190839698%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I6_832_6_807: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I6_832_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_833: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("30.602060119962445%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_6_834: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_834_6_811: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I6_834_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_835: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.97328244274809%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I6_835_6_807: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I6_835_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_6_836: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.755725190839698%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_836_6_811: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I6_836_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_837: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("39.345546368041326%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_6_838: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I6_838_6_807: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I6_838_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_6_839: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.97328244274809%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_839_6_810: {
    flexGrow: 1,
    width: wp("0.06196771869222626%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.59654177600191%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I6_839_6_811: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I6_839_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_6_840: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.755725190839698%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_840_6_811: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I6_840_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2710: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("48.08904929239243%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2711: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2711_6_810: {
    flexGrow: 1,
    width: wp("0.04647597101808504%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9474296278625935%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I38_2711_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2711_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2712: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2712_6_810: {
    flexGrow: 1,
    width: wp("0.04647597101808504%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.947429627862597%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I38_2712_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2712_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2713: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2713_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2713_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2714: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_2714_6_807: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2714_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2697: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("56.832518864199116%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2698: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2698_6_810: {
    flexGrow: 1,
    width: wp("0.04647597101808504%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9474296278625935%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I38_2698_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2698_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2699: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2699_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2699_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2700: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_2700_6_807: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2700_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2701: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2701_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2701_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2684: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("65.57602178855022%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2685: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2685_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2685_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2686: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_2686_6_807: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2686_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2687: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2687_6_810: {
    flexGrow: 1,
    width: wp("0.04647597101808504%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.947429627862597%"),
    top: hp("0.8196721311475699%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I38_2687_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2687_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2688: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2688_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2688_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2572: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("74.31952471290133%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_38_2612: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_2612_6_807: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2612_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2573: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2573_6_810: {
    flexGrow: 1,
    width: wp("0.04647597101808504%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.947429627862597%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I38_2573_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2573_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2574: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2574_6_810: {
    flexGrow: 1,
    width: wp("0.04647597101808504%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.947429627862597%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I38_2574_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2574_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2575: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2575_6_811: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2575_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2880: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("83.06299428470801%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2881: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2881_6_819: {
    flexGrow: 1,
    width: wp("14.790076335877863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2881_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2882: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2882_6_815: {
    flexGrow: 1,
    width: wp("14.694656488549619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2882_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2883: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("91.80649720905909%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2884: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2884_6_815: {
    flexGrow: 1,
    width: wp("14.694656488549619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2884_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2885: {
    flexGrow: 1,
    width: wp("16.173664122137403%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2885_6_819: {
    flexGrow: 1,
    width: wp("14.790076335877863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I38_2885_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2886: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("100.5500001334102%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2887: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2887_6_818: {
    flexGrow: 1,
    width: wp("0.06232516456196326%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.657763299141223%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2887_6_819: {
    flexGrow: 1,
    width: wp("9.351145038167939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2887_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2888: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.97328244274809%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2888_6_819: {
    flexGrow: 1,
    width: wp("9.351145038167939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2888_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2889: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.755725190839698%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2889_6_815: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2889_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2890: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("109.2934697052169%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2891: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2891_6_819: {
    flexGrow: 1,
    width: wp("9.351145038167939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2891_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2892: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.97328244274809%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2892_6_815: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2892_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2893: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.755725190839698%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2893_6_819: {
    flexGrow: 1,
    width: wp("9.351145038167939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2893_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2894: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("118.03697262956798%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  View_38_2895: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2895_6_815: {
    flexGrow: 1,
    width: wp("9.255725190839694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2895_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2896: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.97328244274809%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2896_6_818: {
    flexGrow: 1,
    width: wp("0.06232516456196326%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.657763299141223%"),
    top: hp("0.8196721311475699%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2896_6_819: {
    flexGrow: 1,
    width: wp("9.351145038167939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2896_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2897: {
    flexGrow: 1,
    width: wp("10.782442748091603%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.755725190839698%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2897_6_819: {
    flexGrow: 1,
    width: wp("9.351145038167939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2897_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2913: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("126.78047555391906%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2914: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2914_6_818: {
    flexGrow: 1,
    width: wp("0.046743873421472446%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.993369066078245%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2914_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2914_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2915: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2915_6_818: {
    flexGrow: 1,
    width: wp("0.046743873421472446%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.993369066078245%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2915_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2915_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2916: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2916_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2916_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2917: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.27322404371588505%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2917_6_815: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2917_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2908: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("135.52397847827018%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2909: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2909_6_818: {
    flexGrow: 1,
    width: wp("0.046743873421472446%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.993369066078245%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2909_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2909_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2910: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2910_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2910_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2911: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2911_6_815: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2911_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2912: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2912_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2912_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2903: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("144.26748140262129%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_38_2904: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2904_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2904_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2905: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2905_6_815: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2905_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2906: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2906_6_818: {
    flexGrow: 1,
    width: wp("0.046743873421472446%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.993369066078245%"),
    top: hp("0.819672131147513%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2906_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2906_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2907: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2907_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.819672131147513%"),
    justifyContent: "center"
  },
  Text_I38_2907_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_38_2898: {
    width: wp("32.729007633587784%"),
    minWidth: wp("32.729007633587784%"),
    height: hp("4.371906238826898%"),
    minHeight: hp("4.371906238826898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0534351145038165%"),
    top: hp("153.010950974428%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  View_38_2899: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1908396946564892%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I38_2899_6_815: {
    flexGrow: 1,
    width: wp("6.583969465648855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.763358778625955%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2899_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2900: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27767175572519%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2900_6_818: {
    flexGrow: 1,
    width: wp("0.046743873421472446%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.993369066078245%"),
    top: hp("0.8196721311475699%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2900_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2900_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2901: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.364503816793896%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2901_6_818: {
    flexGrow: 1,
    width: wp("0.046743873421472446%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.993369066078245%"),
    top: hp("0.8196721311475699%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_I38_2901_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259497%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2901_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_38_2902: {
    flexGrow: 1,
    width: wp("8.086832061068701%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.451335877862594%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_2902_6_819: {
    flexGrow: 1,
    width: wp("6.679389312977099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7633587786259568%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "center"
  },
  Text_I38_2902_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
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
