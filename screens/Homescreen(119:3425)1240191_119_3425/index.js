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
      <View style={styles.View_140_5525}>
        <View style={styles.View_119_3426}>
          <View style={styles.View_I119_3426_36_10245}>
            <View style={styles.View_I119_3426_36_10246}>
              <View style={styles.View_I119_3426_36_10247} />
              <View style={styles.View_I119_3426_36_10248}>
                <Text style={styles.Text_I119_3426_36_10248}>Homescreen</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I119_3426_36_10250} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0301/66c8/e5b581a548de508ceb471297ada2d109"
          }}
          style={styles.ImageBackground_140_5566}
        />
      </View>
      <View style={styles.View_119_3427}>
        <View style={styles.View_I119_3427_10_2304}>
          <Text style={styles.Text_I119_3427_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I119_3427_10_2303} />
      </View>
      <View style={styles.View_119_6140}>
        <View style={styles.View_119_5373}>
          <View style={styles.View_119_5374}>
            <Text style={styles.Text_119_5374}>App Icon</Text>
          </View>
          <View style={styles.View_119_5375}>
            <View style={styles.View_119_6136}>
              <View style={styles.View_119_6137}>
                <View style={styles.View_119_6138}>
                  <Text style={styles.Text_119_6138}>With Label</Text>
                </View>
                <View style={styles.View_119_6139}>
                  <Text style={styles.Text_119_6139}>Without Label</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_119_6091}>
              <View style={styles.View_119_5382}>
                <View style={styles.View_119_5379}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                    }}
                    style={styles.ImageBackground_119_5380}
                  />
                </View>
                <View style={styles.View_119_5381}>
                  <Text style={styles.Text_119_5381}>App Name</Text>
                </View>
              </View>
              <View style={styles.View_119_6090}>
                <View style={styles.View_119_6087}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                    }}
                    style={styles.ImageBackground_119_6088}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_119_5144}>
          <View style={styles.View_119_5145}>
            <Text style={styles.Text_119_5145}>Dock</Text>
          </View>
          <View style={styles.View_119_5146}>
            <View style={styles.View_119_5147}>
              <View style={styles.View_119_5148}>
                <View style={styles.View_119_5149}>
                  <Text style={styles.Text_119_5149}>Light</Text>
                </View>
                <View style={styles.View_119_5150}>
                  <Text style={styles.Text_119_5150}>Dark</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_119_5151}>
              <View style={styles.View_119_3737}>
                <View style={styles.View_119_4326}>
                  <View style={styles.View_119_4327} />
                </View>
                <View style={styles.View_119_4245}>
                  <View style={styles.View_119_6014}>
                    <View style={styles.View_I119_6014_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6014_119_6088}
                      />
                    </View>
                  </View>
                  <View style={styles.View_119_6030}>
                    <View style={styles.View_I119_6030_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6030_119_6088}
                      />
                    </View>
                  </View>
                  <View style={styles.View_119_6034}>
                    <View style={styles.View_I119_6034_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6034_119_6088}
                      />
                    </View>
                  </View>
                  <View style={styles.View_119_6038}>
                    <View style={styles.View_I119_6038_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6038_119_6088}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_6116}>
                <View style={styles.View_119_6117}>
                  <View style={styles.View_119_6118} />
                </View>
                <View style={styles.View_119_6119}>
                  <View style={styles.View_119_6120}>
                    <View style={styles.View_I119_6120_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6120_119_6088}
                      />
                    </View>
                  </View>
                  <View style={styles.View_119_6121}>
                    <View style={styles.View_I119_6121_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6121_119_6088}
                      />
                    </View>
                  </View>
                  <View style={styles.View_119_6122}>
                    <View style={styles.View_I119_6122_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6122_119_6088}
                      />
                    </View>
                  </View>
                  <View style={styles.View_119_6123}>
                    <View style={styles.View_I119_6123_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={styles.ImageBackground_I119_6123_119_6088}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_119_5838}>
          <View style={styles.View_119_5839}>
            <Text style={styles.Text_119_5839}>Icon Row</Text>
          </View>
          <View style={styles.View_119_5840}>
            <View style={styles.View_119_5841}>
              <View style={styles.View_119_5842}>
                <View style={styles.View_119_5843}>
                  <Text style={styles.Text_119_5843}>2 apps</Text>
                </View>
                <View style={styles.View_119_5844}>
                  <Text style={styles.Text_119_5844}>4 apps</Text>
                </View>
                <View style={styles.View_119_5845}>
                  <Text style={styles.Text_119_5845}>8 apps</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_119_5846}>
              <View style={styles.View_119_5847}>
                <View style={styles.View_119_5848}>
                  <View style={styles.View_I119_5848_119_5379}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                      }}
                      style={styles.ImageBackground_I119_5848_119_5380}
                    />
                  </View>
                  <View style={styles.View_I119_5848_119_5381}>
                    <Text style={styles.Text_I119_5848_119_5381}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_119_5849}>
                  <View style={styles.View_I119_5849_119_5379}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                      }}
                      style={styles.ImageBackground_I119_5849_119_5380}
                    />
                  </View>
                  <View style={styles.View_I119_5849_119_5381}>
                    <Text style={styles.Text_I119_5849_119_5381}>App Name</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5850}>
                <View style={styles.View_119_5851}>
                  <View style={styles.View_I119_5851_119_5379}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                      }}
                      style={styles.ImageBackground_I119_5851_119_5380}
                    />
                  </View>
                  <View style={styles.View_I119_5851_119_5381}>
                    <Text style={styles.Text_I119_5851_119_5381}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_119_5852}>
                  <View style={styles.View_I119_5852_119_5379}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                      }}
                      style={styles.ImageBackground_I119_5852_119_5380}
                    />
                  </View>
                  <View style={styles.View_I119_5852_119_5381}>
                    <Text style={styles.Text_I119_5852_119_5381}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_119_5853}>
                  <View style={styles.View_I119_5853_119_5379}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                      }}
                      style={styles.ImageBackground_I119_5853_119_5380}
                    />
                  </View>
                  <View style={styles.View_I119_5853_119_5381}>
                    <Text style={styles.Text_I119_5853_119_5381}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_119_5854}>
                  <View style={styles.View_I119_5854_119_5379}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                      }}
                      style={styles.ImageBackground_I119_5854_119_5380}
                    />
                  </View>
                  <View style={styles.View_I119_5854_119_5381}>
                    <Text style={styles.Text_I119_5854_119_5381}>App Name</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5855}>
                <View style={styles.View_119_5856}>
                  <View style={styles.View_119_5857}>
                    <View style={styles.View_I119_5857_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5857_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5857_119_5381}>
                      <Text style={styles.Text_I119_5857_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_119_5858}>
                    <View style={styles.View_I119_5858_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5858_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5858_119_5381}>
                      <Text style={styles.Text_I119_5858_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_119_5859}>
                    <View style={styles.View_I119_5859_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5859_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5859_119_5381}>
                      <Text style={styles.Text_I119_5859_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_119_5860}>
                    <View style={styles.View_I119_5860_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5860_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5860_119_5381}>
                      <Text style={styles.Text_I119_5860_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_5861}>
                  <View style={styles.View_119_5862}>
                    <View style={styles.View_I119_5862_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5862_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5862_119_5381}>
                      <Text style={styles.Text_I119_5862_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_119_5863}>
                    <View style={styles.View_I119_5863_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5863_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5863_119_5381}>
                      <Text style={styles.Text_I119_5863_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_119_5864}>
                    <View style={styles.View_I119_5864_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5864_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5864_119_5381}>
                      <Text style={styles.Text_I119_5864_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_119_5865}>
                    <View style={styles.View_I119_5865_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={styles.ImageBackground_I119_5865_119_5380}
                      />
                    </View>
                    <View style={styles.View_I119_5865_119_5381}>
                      <Text style={styles.Text_I119_5865_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_119_5244}>
          <View style={styles.View_119_5245}>
            <Text style={styles.Text_119_5245}>Small Widget</Text>
          </View>
          <View style={styles.View_119_5246}>
            <View style={styles.View_119_5247}>
              <View style={styles.View_119_5248}>
                <View style={styles.View_119_5249}>
                  <Text style={styles.Text_119_5249}>One Widget</Text>
                </View>
                <View style={styles.View_119_5250}>
                  <Text style={styles.Text_119_5250}>Two Widgets</Text>
                </View>
                <View style={styles.View_119_5251}>
                  <Text style={styles.Text_119_5251}>Apps on Right</Text>
                </View>
                <View style={styles.View_120_4252}>
                  <Text style={styles.Text_120_4252}>Apps on Left</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_119_5252}>
              <View style={styles.View_119_3703}>
                <View style={styles.View_119_5328}>
                  <View style={styles.View_I119_5328_119_5320}>
                    <Text style={styles.Text_I119_5328_119_5320}>Widget</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5550}>
                <View style={styles.View_119_5551}>
                  <View style={styles.View_I119_5551_119_5320}>
                    <Text style={styles.Text_I119_5551_119_5320}>Widget</Text>
                  </View>
                </View>
                <View style={styles.View_119_5552}>
                  <View style={styles.View_I119_5552_119_5320}>
                    <Text style={styles.Text_I119_5552_119_5320}>Widget</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5340}>
                <View style={styles.View_119_5341}>
                  <View style={styles.View_I119_5341_119_5320}>
                    <Text style={styles.Text_I119_5341_119_5320}>Widget</Text>
                  </View>
                </View>
                <View style={styles.View_119_5354}>
                  <View style={styles.View_119_5345}>
                    <View style={styles.View_I119_5345_119_5387}>
                      <View style={styles.View_I119_5345_119_5387_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5345_119_5387_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5345_119_5387_119_5381}>
                        <Text style={styles.Text_I119_5345_119_5387_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5345_119_5415}>
                      <View style={styles.View_I119_5345_119_5415_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5345_119_5415_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5345_119_5415_119_5381}>
                        <Text style={styles.Text_I119_5345_119_5415_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_119_5355}>
                    <View style={styles.View_I119_5355_119_5387}>
                      <View style={styles.View_I119_5355_119_5387_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5355_119_5387_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5355_119_5387_119_5381}>
                        <Text style={styles.Text_I119_5355_119_5387_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5355_119_5415}>
                      <View style={styles.View_I119_5355_119_5415_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5355_119_5415_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5355_119_5415_119_5381}>
                        <Text style={styles.Text_I119_5355_119_5415_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5528}>
                <View style={styles.View_119_5530}>
                  <View style={styles.View_119_5531}>
                    <View style={styles.View_I119_5531_119_5387}>
                      <View style={styles.View_I119_5531_119_5387_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5531_119_5387_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5531_119_5387_119_5381}>
                        <Text style={styles.Text_I119_5531_119_5387_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5531_119_5415}>
                      <View style={styles.View_I119_5531_119_5415_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5531_119_5415_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5531_119_5415_119_5381}>
                        <Text style={styles.Text_I119_5531_119_5415_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_119_5532}>
                    <View style={styles.View_I119_5532_119_5387}>
                      <View style={styles.View_I119_5532_119_5387_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5532_119_5387_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5532_119_5387_119_5381}>
                        <Text style={styles.Text_I119_5532_119_5387_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5532_119_5415}>
                      <View style={styles.View_I119_5532_119_5415_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5532_119_5415_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5532_119_5415_119_5381}>
                        <Text style={styles.Text_I119_5532_119_5415_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_5529}>
                  <View style={styles.View_I119_5529_119_5320}>
                    <Text style={styles.Text_I119_5529_119_5320}>Widget</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_119_5555}>
          <View style={styles.View_119_5556}>
            <Text style={styles.Text_119_5556}>Medium Widget</Text>
          </View>
          <View style={styles.View_119_5557}>
            <View style={styles.View_119_5558}>
              <View style={styles.View_119_5559}>
                <View style={styles.View_119_5560}>
                  <Text style={styles.Text_119_5560}>2 apps</Text>
                </View>
                <View style={styles.View_119_5561}>
                  <Text style={styles.Text_119_5561}>Apps on Bottom</Text>
                </View>
                <View style={styles.View_119_5562}>
                  <Text style={styles.Text_119_5562}>Apps on Top</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_119_5563}>
              <View style={styles.View_119_5564}>
                <View style={styles.View_119_5565}>
                  <View style={styles.View_I119_5565_119_5323}>
                    <Text style={styles.Text_I119_5565_119_5323}>Widget</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5654}>
                <View style={styles.View_119_5655}>
                  <View style={styles.View_I119_5655_119_5323}>
                    <Text style={styles.Text_I119_5655_119_5323}>Widget</Text>
                  </View>
                </View>
                <View style={styles.View_119_5656}>
                  <View style={styles.View_I119_5656_119_5467}>
                    <View style={styles.View_I119_5656_119_5467_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5656_119_5467_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5656_119_5467_119_5381}>
                      <Text style={styles.Text_I119_5656_119_5467_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_5656_119_5471}>
                    <View style={styles.View_I119_5656_119_5471_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5656_119_5471_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5656_119_5471_119_5381}>
                      <Text style={styles.Text_I119_5656_119_5471_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_5656_119_5475}>
                    <View style={styles.View_I119_5656_119_5475_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5656_119_5475_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5656_119_5475_119_5381}>
                      <Text style={styles.Text_I119_5656_119_5475_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_5656_119_5479}>
                    <View style={styles.View_I119_5656_119_5479_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5656_119_5479_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5656_119_5479_119_5381}>
                      <Text style={styles.Text_I119_5656_119_5479_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5634}>
                <View style={styles.View_119_5636}>
                  <View style={styles.View_I119_5636_119_5467}>
                    <View style={styles.View_I119_5636_119_5467_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5636_119_5467_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5636_119_5467_119_5381}>
                      <Text style={styles.Text_I119_5636_119_5467_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_5636_119_5471}>
                    <View style={styles.View_I119_5636_119_5471_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5636_119_5471_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5636_119_5471_119_5381}>
                      <Text style={styles.Text_I119_5636_119_5471_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_5636_119_5475}>
                    <View style={styles.View_I119_5636_119_5475_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5636_119_5475_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5636_119_5475_119_5381}>
                      <Text style={styles.Text_I119_5636_119_5475_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_5636_119_5479}>
                    <View style={styles.View_I119_5636_119_5479_119_5379}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                        }}
                        style={
                          styles.ImageBackground_I119_5636_119_5479_119_5380
                        }
                      />
                    </View>
                    <View style={styles.View_I119_5636_119_5479_119_5381}>
                      <Text style={styles.Text_I119_5636_119_5479_119_5381}>
                        App Name
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_5635}>
                  <View style={styles.View_I119_5635_119_5323}>
                    <Text style={styles.Text_I119_5635_119_5323}>Widget</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_119_5674}>
          <View style={styles.View_119_5675}>
            <Text style={styles.Text_119_5675}>Large Widget</Text>
          </View>
          <View style={styles.View_119_5676}>
            <View style={styles.View_119_5677}>
              <View style={styles.View_119_5678}>
                <View style={styles.View_119_5679}>
                  <Text style={styles.Text_119_5679}>2 apps</Text>
                </View>
                <View style={styles.View_119_5680}>
                  <Text style={styles.Text_119_5680}>4 apps</Text>
                </View>
                <View style={styles.View_119_5681}>
                  <Text style={styles.Text_119_5681}>8 apps</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_119_5682}>
              <View style={styles.View_119_5683}>
                <View style={styles.View_119_5684}>
                  <View style={styles.View_I119_5684_119_5324}>
                    <Text style={styles.Text_I119_5684_119_5324}>Widget</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5762}>
                <View style={styles.View_119_5763}>
                  <View style={styles.View_I119_5763_119_5324}>
                    <Text style={styles.Text_I119_5763_119_5324}>Widget</Text>
                  </View>
                </View>
                <View style={styles.View_119_5764}>
                  <View style={styles.View_I119_5764_119_4957}>
                    <View style={styles.View_I119_5764_119_5495}>
                      <View style={styles.View_I119_5764_119_5495_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5495_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5495_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5495_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5764_119_5499}>
                      <View style={styles.View_I119_5764_119_5499_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5499_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5499_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5499_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5764_119_5503}>
                      <View style={styles.View_I119_5764_119_5503_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5503_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5503_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5503_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5764_119_5507}>
                      <View style={styles.View_I119_5764_119_5507_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5507_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5507_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5507_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I119_5764_119_5511}>
                    <View style={styles.View_I119_5764_119_5512}>
                      <View style={styles.View_I119_5764_119_5512_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5512_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5512_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5512_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5764_119_5513}>
                      <View style={styles.View_I119_5764_119_5513_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5513_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5513_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5513_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5764_119_5514}>
                      <View style={styles.View_I119_5764_119_5514_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5514_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5514_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5514_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5764_119_5515}>
                      <View style={styles.View_I119_5764_119_5515_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5764_119_5515_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5764_119_5515_119_5381}>
                        <Text style={styles.Text_I119_5764_119_5515_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_5800}>
                <View style={styles.View_119_5802}>
                  <View style={styles.View_I119_5802_119_4957}>
                    <View style={styles.View_I119_5802_119_5495}>
                      <View style={styles.View_I119_5802_119_5495_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5495_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5495_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5495_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5802_119_5499}>
                      <View style={styles.View_I119_5802_119_5499_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5499_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5499_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5499_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5802_119_5503}>
                      <View style={styles.View_I119_5802_119_5503_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5503_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5503_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5503_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5802_119_5507}>
                      <View style={styles.View_I119_5802_119_5507_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5507_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5507_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5507_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I119_5802_119_5511}>
                    <View style={styles.View_I119_5802_119_5512}>
                      <View style={styles.View_I119_5802_119_5512_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5512_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5512_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5512_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5802_119_5513}>
                      <View style={styles.View_I119_5802_119_5513_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5513_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5513_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5513_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5802_119_5514}>
                      <View style={styles.View_I119_5802_119_5514_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5514_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5514_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5514_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I119_5802_119_5515}>
                      <View style={styles.View_I119_5802_119_5515_119_5379}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                          }}
                          style={
                            styles.ImageBackground_I119_5802_119_5515_119_5380
                          }
                        />
                      </View>
                      <View style={styles.View_I119_5802_119_5515_119_5381}>
                        <Text style={styles.Text_I119_5802_119_5515_119_5381}>
                          App Name
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_5801}>
                  <View style={styles.View_I119_5801_119_5324}>
                    <Text style={styles.Text_I119_5801_119_5324}>Widget</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_119_6141}>
        <View style={styles.View_I119_6141_10_2318}>
          <Text style={styles.Text_I119_6141_10_2318}>Templates</Text>
        </View>
        <View style={styles.View_I119_6141_10_2319} />
      </View>
      <View style={styles.View_119_6146}>
        <View style={styles.View_119_6147}>
          <Text style={styles.Text_119_6147}>Homescreen</Text>
        </View>
        <View style={styles.View_119_6148}>
          <View style={styles.View_119_6149}>
            <View style={styles.View_119_6150}>
              <View style={styles.View_119_6151}>
                <Text style={styles.Text_119_6151}>Light</Text>
              </View>
              <View style={styles.View_119_6152}>
                <Text style={styles.Text_119_6152}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_119_6155}>
            <View style={styles.View_119_6332}>
              <View style={styles.View_119_6333}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d0/f310/0165ee9fdf32ff45b62833123c159b5b"
                  }}
                  style={styles.ImageBackground_I119_6333_5_256}
                />
              </View>
              <View style={styles.View_120_4374}>
                <View style={styles.View_119_6396}>
                  <View style={styles.View_I119_6396_119_5341}>
                    <View style={styles.View_I119_6396_119_5341_119_5320}>
                      <Text style={styles.Text_I119_6396_119_5341_119_5320}>
                        Widget
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_6396_119_5354}>
                    <View style={styles.View_I119_6396_119_5345}>
                      <View style={styles.View_I119_6396_119_5345_119_5387}>
                        <View
                          style={
                            styles.View_I119_6396_119_5345_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6396_119_5345_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6396_119_5345_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6396_119_5345_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6396_119_5345_119_5415}>
                        <View
                          style={
                            styles.View_I119_6396_119_5345_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6396_119_5345_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6396_119_5345_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6396_119_5345_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I119_6396_119_5355}>
                      <View style={styles.View_I119_6396_119_5355_119_5387}>
                        <View
                          style={
                            styles.View_I119_6396_119_5355_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6396_119_5355_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6396_119_5355_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6396_119_5355_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6396_119_5355_119_5415}>
                        <View
                          style={
                            styles.View_I119_6396_119_5355_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6396_119_5355_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6396_119_5355_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6396_119_5355_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_6418}>
                  <View style={styles.View_I119_6418_119_5530}>
                    <View style={styles.View_I119_6418_119_5531}>
                      <View style={styles.View_I119_6418_119_5531_119_5387}>
                        <View
                          style={
                            styles.View_I119_6418_119_5531_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6418_119_5531_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6418_119_5531_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6418_119_5531_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6418_119_5531_119_5415}>
                        <View
                          style={
                            styles.View_I119_6418_119_5531_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6418_119_5531_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6418_119_5531_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6418_119_5531_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I119_6418_119_5532}>
                      <View style={styles.View_I119_6418_119_5532_119_5387}>
                        <View
                          style={
                            styles.View_I119_6418_119_5532_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6418_119_5532_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6418_119_5532_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6418_119_5532_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6418_119_5532_119_5415}>
                        <View
                          style={
                            styles.View_I119_6418_119_5532_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6418_119_5532_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6418_119_5532_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6418_119_5532_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I119_6418_119_5529}>
                    <View style={styles.View_I119_6418_119_5529_119_5320}>
                      <Text style={styles.Text_I119_6418_119_5529_119_5320}>
                        Widget
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_6485}>
                  <View style={styles.View_I119_6485_119_5565}>
                    <View style={styles.View_I119_6485_119_5565_119_5323}>
                      <Text style={styles.Text_I119_6485_119_5565_119_5323}>
                        Widget
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_6376}>
                <View style={styles.View_I119_6376_119_4326}>
                  <View style={styles.View_I119_6376_119_4327} />
                </View>
                <View style={styles.View_I119_6376_119_4245}>
                  <View style={styles.View_I119_6376_119_6014}>
                    <View style={styles.View_I119_6376_119_6014_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6376_119_6014_119_6088
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I119_6376_119_6030}>
                    <View style={styles.View_I119_6376_119_6030_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6376_119_6030_119_6088
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I119_6376_119_6034}>
                    <View style={styles.View_I119_6376_119_6034_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6376_119_6034_119_6088
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I119_6376_119_6038}>
                    <View style={styles.View_I119_6376_119_6038_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6376_119_6038_119_6088
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_6341}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I119_6341_36_7726}
                />
                <View style={styles.View_I119_6341_36_7731}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I119_6341_36_7732}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I119_6341_36_7736}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I119_6341_36_7740}
                  />
                </View>
                <View style={styles.View_I119_6341_36_7747}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I119_6341_36_7748}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_119_6586}>
              <View style={styles.View_119_6587}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1caa/7b78/99057de4e940a4a9c78ac058302ef9f1"
                  }}
                  style={styles.ImageBackground_I119_6587_122_4128}
                />
              </View>
              <View style={styles.View_140_12215}>
                <View style={styles.View_119_6588}>
                  <View style={styles.View_I119_6588_119_5341}>
                    <View style={styles.View_I119_6588_119_5341_119_5325}>
                      <Text style={styles.Text_I119_6588_119_5341_119_5325}>
                        Widget
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I119_6588_119_5354}>
                    <View style={styles.View_I119_6588_119_5345}>
                      <View style={styles.View_I119_6588_119_5345_119_5387}>
                        <View
                          style={
                            styles.View_I119_6588_119_5345_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6588_119_5345_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6588_119_5345_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6588_119_5345_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6588_119_5345_119_5415}>
                        <View
                          style={
                            styles.View_I119_6588_119_5345_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6588_119_5345_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6588_119_5345_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6588_119_5345_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I119_6588_119_5355}>
                      <View style={styles.View_I119_6588_119_5355_119_5387}>
                        <View
                          style={
                            styles.View_I119_6588_119_5355_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6588_119_5355_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6588_119_5355_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6588_119_5355_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6588_119_5355_119_5415}>
                        <View
                          style={
                            styles.View_I119_6588_119_5355_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6588_119_5355_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6588_119_5355_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6588_119_5355_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_6589}>
                  <View style={styles.View_I119_6589_119_5530}>
                    <View style={styles.View_I119_6589_119_5531}>
                      <View style={styles.View_I119_6589_119_5531_119_5387}>
                        <View
                          style={
                            styles.View_I119_6589_119_5531_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6589_119_5531_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6589_119_5531_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6589_119_5531_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6589_119_5531_119_5415}>
                        <View
                          style={
                            styles.View_I119_6589_119_5531_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6589_119_5531_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6589_119_5531_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6589_119_5531_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I119_6589_119_5532}>
                      <View style={styles.View_I119_6589_119_5532_119_5387}>
                        <View
                          style={
                            styles.View_I119_6589_119_5532_119_5387_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6589_119_5532_119_5387_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6589_119_5532_119_5387_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6589_119_5532_119_5387_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I119_6589_119_5532_119_5415}>
                        <View
                          style={
                            styles.View_I119_6589_119_5532_119_5415_119_5379
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de81/a447/20e63cfd74e21bd7ef9a029fb9ae7105"
                            }}
                            style={
                              styles.ImageBackground_I119_6589_119_5532_119_5415_119_5380
                            }
                          />
                        </View>
                        <View
                          style={
                            styles.View_I119_6589_119_5532_119_5415_119_5381
                          }
                        >
                          <Text
                            style={
                              styles.Text_I119_6589_119_5532_119_5415_119_5381
                            }
                          >
                            App Name
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I119_6589_119_5529}>
                    <View style={styles.View_I119_6589_119_5529_119_5325}>
                      <Text style={styles.Text_I119_6589_119_5529_119_5325}>
                        Widget
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_119_6590}>
                  <View style={styles.View_I119_6590_119_5565}>
                    <View style={styles.View_I119_6590_119_5565_119_5326}>
                      <Text style={styles.Text_I119_6590_119_5565_119_5326}>
                        Widget
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_6591}>
                <View style={styles.View_I119_6591_119_6117}>
                  <View style={styles.View_I119_6591_119_6118} />
                </View>
                <View style={styles.View_I119_6591_119_6119}>
                  <View style={styles.View_I119_6591_119_6120}>
                    <View style={styles.View_I119_6591_119_6120_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6591_119_6120_119_6088
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I119_6591_119_6121}>
                    <View style={styles.View_I119_6591_119_6121_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6591_119_6121_119_6088
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I119_6591_119_6122}>
                    <View style={styles.View_I119_6591_119_6122_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6591_119_6122_119_6088
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I119_6591_119_6123}>
                    <View style={styles.View_I119_6591_119_6123_119_6087}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ef/3437/f0b5d3af73dfaa6e396b03b568514967"
                        }}
                        style={
                          styles.ImageBackground_I119_6591_119_6123_119_6088
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_119_6592}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
                  }}
                  style={styles.ImageBackground_I119_6592_36_7726}
                />
                <View style={styles.View_I119_6592_36_7731}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                    }}
                    style={styles.ImageBackground_I119_6592_36_7732}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                    }}
                    style={styles.ImageBackground_I119_6592_36_7736}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                    }}
                    style={styles.ImageBackground_I119_6592_36_7740}
                  />
                </View>
                <View style={styles.View_I119_6592_36_7747}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                    }}
                    style={styles.ImageBackground_I119_6592_36_7748}
                  />
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
  View_2: { height: hp("440.71038251366116%") },
  View_140_5525: {
    width: wp("96.10823958650046%"),
    minWidth: wp("96.10823958650046%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.945880206749772%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3426: {
    flexGrow: 1,
    width: wp("96.10823958650046%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_3426_36_10245: {
    flexGrow: 1,
    width: wp("96.10823958650046%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_3426_36_10246: {
    width: wp("96.10823958650046%"),
    minWidth: wp("96.10823958650046%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_3426_36_10247: {
    width: wp("1.7026451809060503%"),
    minWidth: wp("1.7026451809060503%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I119_3426_36_10248: {
    width: wp("93.43265430221952%"),
    minWidth: wp("93.43265430221952%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6755852842809373%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I119_3426_36_10248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_3426_36_10250: {
    flexGrow: 1,
    width: wp("96.10823958650046%"),
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
  ImageBackground_140_5566: {
    width: wp("1.7026451809060503%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_119_3427: {
    width: wp("96.10823958650046%"),
    minWidth: wp("96.10823958650046%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.945880206749772%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_3427_10_2304: {
    flexGrow: 1,
    width: wp("2.1587108543630285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I119_3427_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_3427_10_2303: {
    flexGrow: 1,
    width: wp("96.10823958650046%"),
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
  View_119_6140: {
    width: wp("96.10823958650046%"),
    minWidth: wp("96.10823958650046%"),
    height: hp("224.18032786885246%"),
    minHeight: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.945880206749772%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5373: {
    width: wp("8.33079963514746%"),
    minWidth: wp("8.33079963514746%"),
    height: hp("43.169398907103826%"),
    minHeight: hp("43.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5374: {
    width: wp("2.797202797202797%"),
    minWidth: wp("2.797202797202797%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5375: {
    width: wp("8.33079963514746%"),
    minWidth: wp("8.33079963514746%"),
    height: hp("35.51912568306011%"),
    minHeight: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_119_6136: {
    width: wp("3.587716631194892%"),
    minWidth: wp("3.587716631194892%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.743083003952569%"),
    top: hp("8.333333333333336%")
  },
  View_119_6137: {
    width: wp("3.587716631194892%"),
    minWidth: wp("3.587716631194892%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_6138: {
    width: wp("2.736394040741867%"),
    minWidth: wp("2.736394040741867%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_6138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_6139: {
    width: wp("3.587716631194892%"),
    minWidth: wp("3.587716631194892%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.573770491803266%"),
    justifyContent: "center"
  },
  Text_119_6139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_6091: {
    width: wp("3.7701429005776834%"),
    minWidth: wp("3.7701429005776834%"),
    height: hp("35.51912568306011%"),
    minHeight: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5382: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("4.371584699453557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748861%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186107%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.46994535519125%"),
    justifyContent: "flex-start"
  },
  Text_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6090: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("19.945355191256823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748861%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186107%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_119_5144: {
    width: wp("15.080571602310734%"),
    minWidth: wp("15.080571602310734%"),
    height: hp("46.17486338797814%"),
    minHeight: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.276679841897232%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5145: {
    width: wp("1.3986013986013985%"),
    minWidth: wp("1.3986013986013985%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5146: {
    width: wp("15.080571602310734%"),
    minWidth: wp("15.080571602310734%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_119_5147: {
    width: wp("1.3681970203709335%"),
    minWidth: wp("1.3681970203709335%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.712374581939798%"),
    top: hp("9.153005464480877%")
  },
  View_119_5148: {
    width: wp("1.3681970203709335%"),
    minWidth: wp("1.3681970203709335%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5149: {
    width: wp("1.3681970203709335%"),
    minWidth: wp("1.3681970203709335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5150: {
    width: wp("1.0945576162967467%"),
    minWidth: wp("1.0945576162967467%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.07650273224042%"),
    justifyContent: "center"
  },
  Text_119_5150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5151: {
    width: wp("12.739434478564911%"),
    minWidth: wp("12.739434478564911%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_3737: {
    width: wp("10.793554271815141%"),
    minWidth: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748868%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_4326: {
    flexGrow: 1,
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_4327: {
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33
  },
  View_119_4245: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5168744299179071%"),
    top: hp("2.1857923497267606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6014: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6014_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6014_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316919%"),
    resizeMode: "cover"
  },
  View_119_6030: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504736%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6030_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6030_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874316919%"),
    resizeMode: "cover"
  },
  View_119_6034: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100944%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6034_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6034_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874316919%"),
    resizeMode: "cover"
  },
  View_119_6038: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6038_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6038_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316919%"),
    resizeMode: "cover"
  },
  View_119_6116: {
    width: wp("10.793554271815141%"),
    minWidth: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748868%"),
    top: hp("21.448087431693978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6117: {
    flexGrow: 1,
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6118: {
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33
  },
  View_119_6119: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5168744299179071%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6120: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6120_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6120_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_119_6121: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504736%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6121_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6121_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_119_6122: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100944%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6122_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6122_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_119_6123: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6123_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6123_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_119_5838: {
    width: wp("14.746123441775616%"),
    minWidth: wp("14.746123441775616%"),
    height: hp("72.54098360655738%"),
    minHeight: hp("72.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.303131650957734%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5839: {
    width: wp("2.797202797202797%"),
    minWidth: wp("2.797202797202797%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5840: {
    width: wp("14.746123441775616%"),
    minWidth: wp("14.746123441775616%"),
    height: hp("64.89071038251366%"),
    minHeight: hp("64.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_119_5841: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    height: hp("41.39344262295082%"),
    minHeight: hp("41.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.104287017330499%"),
    top: hp("8.333333333333336%")
  },
  View_119_5842: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    height: hp("41.39344262295082%"),
    minHeight: hp("41.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5843: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5843: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5844: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.573770491803266%"),
    justifyContent: "center"
  },
  Text_119_5844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5845: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.11475409836064%"),
    justifyContent: "center"
  },
  Text_119_5845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5846: {
    width: wp("11.705685618729097%"),
    minWidth: wp("11.705685618729097%"),
    height: hp("64.89071038251366%"),
    minHeight: hp("64.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5847: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.972940103374885%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5848: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5848_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5848_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292185485%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5848_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.46994535519125%"),
    justifyContent: "flex-start"
  },
  Text_I119_5848_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5849: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504736%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5849_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5849_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5849_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.46994535519125%"),
    justifyContent: "flex-start"
  },
  Text_I119_5849_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5850: {
    width: wp("9.759805411979325%"),
    minWidth: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.972940103374885%"),
    top: hp("19.945355191256823%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5851: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5851_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5851_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292185485%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5851_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5851_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5852: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504736%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5852_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5852_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5852_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5852_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5853: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100951%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5853_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5853_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5853_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5853_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5854: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151421%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5854_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5854_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5854_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5854_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5855: {
    width: wp("9.759805411979325%"),
    minWidth: wp("9.759805411979325%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.972940103374885%"),
    top: hp("35.519125683060096%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5856: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5857: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5857_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5857_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292185485%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5857_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5857_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5858: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504736%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5858_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5858_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5858_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5858_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5859: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100951%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5859_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5859_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5859_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5859_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5860: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5860_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5860_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5860_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5860_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5861: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.79781420765029%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5862: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5862_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5862_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292185485%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5862_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5862_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5863: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504736%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5863_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5863_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5863_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5863_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5864: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100951%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5864_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5864_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5864_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5864_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5865: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5865_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5865_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5865_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5865_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5244: {
    width: wp("16.509577379142595%"),
    minWidth: wp("16.509577379142595%"),
    height: hp("120.21857923497268%"),
    minHeight: hp("120.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.995135299483124%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5245: {
    width: wp("4.195804195804196%"),
    minWidth: wp("4.195804195804196%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5245: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5246: {
    width: wp("16.509577379142595%"),
    minWidth: wp("16.509577379142595%"),
    height: hp("112.56830601092895%"),
    minHeight: hp("112.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_119_5247: {
    width: wp("3.587716631194892%"),
    minWidth: wp("3.587716631194892%"),
    height: hp("84.42622950819673%"),
    minHeight: hp("84.42622950819673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.921860747947711%"),
    top: hp("13.387978142076506%")
  },
  View_119_5248: {
    width: wp("3.587716631194892%"),
    minWidth: wp("3.587716631194892%"),
    height: hp("84.42622950819673%"),
    minHeight: hp("84.42622950819673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5249: {
    width: wp("2.736394040741867%"),
    minWidth: wp("2.736394040741867%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5249: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5250: {
    width: wp("3.0100334448160537%"),
    minWidth: wp("3.0100334448160537%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.5464480874317%"),
    justifyContent: "center"
  },
  Text_119_5250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5251: {
    width: wp("3.587716631194892%"),
    minWidth: wp("3.587716631194892%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.595628415300524%"),
    justifyContent: "center"
  },
  Text_119_5251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_120_4252: {
    width: wp("3.3140772271207055%"),
    minWidth: wp("3.3140772271207055%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.14754098360655%"),
    justifyContent: "center"
  },
  Text_120_4252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5252: {
    width: wp("11.94892064457282%"),
    minWidth: wp("11.94892064457282%"),
    height: hp("112.56830601092895%"),
    minHeight: hp("112.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_3703: {
    width: wp("4.712678625722104%"),
    minWidth: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748886%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5328: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5328_119_5320: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7026451809060532%"),
    top: hp("21.448087431693985%"),
    justifyContent: "flex-start"
  },
  Text_I119_5328_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5550: {
    width: wp("10.003040437823046%"),
    minWidth: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748886%"),
    top: hp("29.91803278688525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5551: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5551_119_5320: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7026451809060532%"),
    top: hp("21.448087431693992%"),
    justifyContent: "flex-start"
  },
  Text_I119_5551_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5552: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.29036181210094%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5552_119_5320: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.702645180906046%"),
    top: hp("21.448087431693992%"),
    justifyContent: "flex-start"
  },
  Text_I119_5552_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5340: {
    width: wp("9.759805411979325%"),
    minWidth: wp("9.759805411979325%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748886%"),
    top: hp("55.46448087431693%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5341: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5341_119_5320: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7026451809060532%"),
    top: hp("21.448087431693992%"),
    justifyContent: "flex-start"
  },
  Text_I119_5341_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5354: {
    flexGrow: 1,
    width: wp("4.469443599878383%"),
    height: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.29036181210094%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5345: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5345_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5345_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5345_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5345_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5345_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5345_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5345_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5345_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5345_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5345_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5355: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502735%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5355_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5355_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5355_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5355_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5355_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5355_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5355_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5355_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5355_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5355_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5528: {
    width: wp("9.759805411979325%"),
    minWidth: wp("9.759805411979325%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748886%"),
    top: hp("84.01639344262297%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5530: {
    flexGrow: 1,
    width: wp("4.469443599878383%"),
    height: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5531: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5531_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5531_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5531_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_5531_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5531_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5531_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5531_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5531_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_5531_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5531_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5532: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502706%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5532_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5532_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5532_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186551%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5532_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5532_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5532_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5532_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5532_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5532_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5532_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5529: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.047126786257216%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5529_119_5320: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7026451809060603%"),
    top: hp("21.44808743169395%"),
    justifyContent: "flex-start"
  },
  Text_I119_5529_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5555: {
    width: wp("16.965643052599575%"),
    minWidth: wp("16.965643052599575%"),
    height: hp("118.71584699453553%"),
    minHeight: hp("118.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.45059288537549%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5556: {
    width: wp("4.560656734569778%"),
    minWidth: wp("4.560656734569778%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5556: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5557: {
    width: wp("16.965643052599575%"),
    minWidth: wp("16.965643052599575%"),
    height: hp("111.0655737704918%"),
    minHeight: hp("111.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_119_5558: {
    width: wp("3.8613560352690786%"),
    minWidth: wp("3.8613560352690786%"),
    height: hp("78.68852459016394%"),
    minHeight: hp("78.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.104287017330492%"),
    top: hp("13.387978142076506%")
  },
  View_119_5559: {
    width: wp("3.8613560352690786%"),
    minWidth: wp("3.8613560352690786%"),
    height: hp("78.68852459016394%"),
    minHeight: hp("78.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5560: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5560: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5561: {
    width: wp("3.8613560352690786%"),
    minWidth: wp("3.8613560352690786%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.60655737704917%"),
    justifyContent: "center"
  },
  Text_119_5561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5562: {
    width: wp("3.0100334448160537%"),
    minWidth: wp("3.0100334448160537%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.40983606557378%"),
    justifyContent: "center"
  },
  Text_119_5562: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5563: {
    width: wp("11.94892064457282%"),
    minWidth: wp("11.94892064457282%"),
    height: hp("111.0655737704918%"),
    minHeight: hp("111.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5564: {
    width: wp("10.003040437823046%"),
    minWidth: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748815%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5565: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5565_119_5323: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465187002%"),
    top: hp("21.448087431693985%"),
    justifyContent: "flex-start"
  },
  Text_I119_5565_119_5323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5654: {
    width: wp("10.003040437823046%"),
    minWidth: wp("10.003040437823046%"),
    height: hp("37.43169398907104%"),
    minHeight: hp("37.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748815%"),
    top: hp("29.91803278688525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5655: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5655_119_5323: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465187002%"),
    top: hp("21.448087431693992%"),
    justifyContent: "flex-start"
  },
  Text_I119_5655_119_5323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5656: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12161751292187262%"),
    top: hp("26.229508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5656_119_5467: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5656_119_5467_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5656_119_5467_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5656_119_5467_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5656_119_5467_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5656_119_5471: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5656_119_5471_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5656_119_5471_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5656_119_5471_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5656_119_5471_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5656_119_5475: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.29036181210094%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5656_119_5475_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5656_119_5475_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5656_119_5475_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5656_119_5475_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5656_119_5479: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.93554271815141%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5656_119_5479_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5656_119_5479_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.546448087431699%"),
    resizeMode: "cover"
  },
  View_I119_5656_119_5479_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5656_119_5479_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5634: {
    width: wp("10.003040437823046%"),
    minWidth: wp("10.003040437823046%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748815%"),
    top: hp("71.72131147540983%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5636: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12161751292187262%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5636_119_5467: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5636_119_5467_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5636_119_5467_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5636_119_5467_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5636_119_5467_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5636_119_5471: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5636_119_5471_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5636_119_5471_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5636_119_5471_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5636_119_5471_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5636_119_5475: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.29036181210094%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5636_119_5475_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5636_119_5475_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5636_119_5475_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5636_119_5475_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5636_119_5479: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.93554271815141%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5636_119_5479_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5636_119_5479_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5636_119_5479_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_I119_5636_119_5479_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5635: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.79781420765029%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5635_119_5323: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465187002%"),
    top: hp("21.44808743169395%"),
    justifyContent: "flex-start"
  },
  Text_I119_5635_119_5323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5674: {
    width: wp("14.746123441775616%"),
    minWidth: wp("14.746123441775616%"),
    height: hp("224.18032786885246%"),
    minHeight: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.36211614472484%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5675: {
    width: wp("4.195804195804196%"),
    minWidth: wp("4.195804195804196%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5675: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5676: {
    width: wp("14.746123441775616%"),
    minWidth: wp("14.746123441775616%"),
    height: hp("216.53005464480876%"),
    minHeight: hp("216.53005464480876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_119_5677: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    height: hp("41.39344262295082%"),
    minHeight: hp("41.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.104287017330492%"),
    top: hp("8.333333333333336%")
  },
  View_119_5678: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    height: hp("41.39344262295082%"),
    minHeight: hp("41.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5679: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_5679: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5680: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.573770491803266%"),
    justifyContent: "center"
  },
  Text_119_5680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5681: {
    width: wp("1.64183642444512%"),
    minWidth: wp("1.64183642444512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.11475409836064%"),
    justifyContent: "center"
  },
  Text_119_5681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_5682: {
    width: wp("11.94892064457282%"),
    minWidth: wp("11.94892064457282%"),
    height: hp("216.53005464480876%"),
    minHeight: hp("216.53005464480876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_5683: {
    width: wp("10.003040437823046%"),
    minWidth: wp("10.003040437823046%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748815%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5684: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5684_119_5324: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465186988%"),
    top: hp("47.40437158469944%"),
    justifyContent: "flex-start"
  },
  Text_I119_5684_119_5324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5762: {
    width: wp("10.003040437823046%"),
    minWidth: wp("10.003040437823046%"),
    height: hp("77.18579234972678%"),
    minHeight: hp("77.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748815%"),
    top: hp("55.874316939890704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5763: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5763_119_5324: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465186988%"),
    top: hp("47.40437158469945%"),
    justifyContent: "flex-start"
  },
  Text_I119_5763_119_5324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5764: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1216175129218584%"),
    top: hp("52.18579234972677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_4957: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5495: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5495_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5495_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5495_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5495_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5764_119_5499: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5499_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5499_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5499_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5499_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5764_119_5503: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100954%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5503_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5503_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5503_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5503_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5764_119_5507: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5507_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5507_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5507_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5507_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5764_119_5511: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5512: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5512_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5512_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5512_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5512_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5764_119_5513: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5513_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5513_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5513_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5513_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5764_119_5514: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100954%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5514_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5514_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5514_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5514_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5764_119_5515: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5764_119_5515_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5764_119_5515_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5764_119_5515_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_5764_119_5515_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5800: {
    width: wp("10.003040437823046%"),
    minWidth: wp("10.003040437823046%"),
    height: hp("74.72677595628416%"),
    minHeight: hp("74.72677595628416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748815%"),
    top: hp("137.43169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_5802: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1216175129218584%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_4957: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5495: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5495_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5495_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5495_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5495_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5802_119_5499: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5499_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5499_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5499_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5499_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5802_119_5503: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100954%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5503_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5503_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5503_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5503_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5802_119_5507: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5507_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5507_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874316848%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5507_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5507_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5802_119_5511: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650305%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5512: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5512_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5512_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874317417%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5512_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5512_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5802_119_5513: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5513_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5513_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874317417%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5513_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5513_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5802_119_5514: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100954%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5514_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5514_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874317417%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5514_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5514_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_5802_119_5515: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.935542718151424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_5802_119_5515_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_5802_119_5515_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292187262%"),
    top: hp("-0.5464480874317417%"),
    resizeMode: "cover"
  },
  View_I119_5802_119_5515_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191243%"),
    justifyContent: "flex-start"
  },
  Text_I119_5802_119_5515_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_5801: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_5801_119_5324: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465186988%"),
    top: hp("47.40437158469942%"),
    justifyContent: "flex-start"
  },
  Text_I119_5801_119_5324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6141: {
    width: wp("96.10823958650046%"),
    minWidth: wp("96.10823958650046%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.945880206749772%"),
    top: hp("279.78142076502735%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6141_10_2318: {
    flexGrow: 1,
    width: wp("3.4356947400425666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I119_6141_10_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6141_10_2319: {
    flexGrow: 1,
    width: wp("96.10823958650046%"),
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
  View_119_6146: {
    width: wp("25.72210398297355%"),
    minWidth: wp("25.72210398297355%"),
    height: hp("134.9726775956284%"),
    minHeight: hp("134.9726775956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.945880206749772%"),
    top: hp("296.9945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6147: {
    width: wp("3.4965034965034967%"),
    minWidth: wp("3.4965034965034967%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_6147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_6148: {
    width: wp("25.72210398297355%"),
    minWidth: wp("25.72210398297355%"),
    height: hp("127.32240437158471%"),
    minHeight: hp("127.32240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_119_6149: {
    width: wp("13.469139556096078%"),
    minWidth: wp("13.469139556096078%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748861%"),
    top: hp("0%")
  },
  View_119_6150: {
    width: wp("13.469139556096078%"),
    minWidth: wp("13.469139556096078%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_6151: {
    width: wp("1.3681970203709335%"),
    minWidth: wp("1.3681970203709335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_6151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_6152: {
    width: wp("1.0945576162967467%"),
    minWidth: wp("1.0945576162967467%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.37458193979933%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_119_6152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_119_6155: {
    width: wp("25.72210398297355%"),
    minWidth: wp("25.72210398297355%"),
    height: hp("119.67213114754098%"),
    minHeight: hp("119.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_119_6332: {
    width: wp("11.401641836424444%"),
    minWidth: wp("11.401641836424444%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9729401033748861%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_119_6333: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I119_6333_5_256: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_120_4374: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("76.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6993006993006996%"),
    top: hp("9.699453551912598%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6396: {
    width: wp("9.759805411979325%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12161751292185974%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5341: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_6396_119_5341_119_5320: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.702645180906051%"),
    top: hp("21.448087431693978%"),
    justifyContent: "flex-start"
  },
  Text_I119_6396_119_5341_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6396_119_5354: {
    flexGrow: 1,
    width: wp("4.469443599878383%"),
    height: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100944%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5345: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5345_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5345_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6396_119_5345_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6396_119_5345_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6396_119_5345_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6396_119_5345_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.645180906050472%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5345_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6396_119_5345_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6396_119_5345_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6396_119_5345_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6396_119_5355: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5355_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5355_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6396_119_5355_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6396_119_5355_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191214%"),
    justifyContent: "flex-start"
  },
  Text_I119_6396_119_5355_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6396_119_5355_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.645180906050472%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6396_119_5355_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6396_119_5355_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6396_119_5355_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191214%"),
    justifyContent: "flex-start"
  },
  Text_I119_6396_119_5355_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6418: {
    width: wp("9.759805411979325%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12161751292185974%"),
    top: hp("27.86885245901641%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5530: {
    flexGrow: 1,
    width: wp("4.469443599878383%"),
    height: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5531: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5531_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5531_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6418_119_5531_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292185974%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6418_119_5531_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6418_119_5531_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6418_119_5531_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504723%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5531_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6418_119_5531_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186107%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6418_119_5531_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6418_119_5531_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6418_119_5532: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502706%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5532_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5532_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6418_119_5532_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292185974%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6418_119_5532_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6418_119_5532_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6418_119_5532_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504723%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6418_119_5532_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6418_119_5532_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186107%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6418_119_5532_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6418_119_5532_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6418_119_5529: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0471267862572216%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_6418_119_5529_119_5320: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7026451809060514%"),
    top: hp("21.448087431693978%"),
    justifyContent: "flex-start"
  },
  Text_I119_6418_119_5529_119_5320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6485: {
    width: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.73770491803276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6485_119_5565: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I119_6485_119_5565_119_5323: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465186986%"),
    top: hp("21.448087431694034%"),
    justifyContent: "flex-start"
  },
  Text_I119_6485_119_5565_119_5323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6376: {
    flexGrow: 1,
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30404378230465134%"),
    top: hp("96.85792349726773%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6376_119_4326: {
    flexGrow: 1,
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6376_119_4327: {
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29
  },
  View_I119_6376_119_4245: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.516874429917908%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6376_119_6014: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6376_119_6014_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6376_119_6014_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292185974%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_I119_6376_119_6030: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6451809060504723%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6376_119_6030_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6376_119_6030_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186107%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_I119_6376_119_6034: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.290361812100944%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6376_119_6034_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6376_119_6034_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_I119_6376_119_6038: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9355427181514155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6376_119_6038_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6376_119_6038_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_119_6341: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6341_36_7726: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I119_6341_36_7731: {
    flexGrow: 1,
    width: wp("2.0267977182464274%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.92879199604743%"),
    top: hp("1.0928961748634265%")
  },
  ImageBackground_I119_6341_36_7732: {
    width: wp("0.7396788465175704%"),
    minWidth: wp("0.7396788465175704%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2870790893888717%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_I119_6341_36_7736: {
    width: wp("0.46434709822091336%"),
    minWidth: wp("0.46434709822091336%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6697276907874734%"),
    top: hp("1.2746675418374593%")
  },
  ImageBackground_I119_6341_36_7740: {
    width: wp("0.5168744299179082%"),
    minWidth: wp("0.5168744299179082%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I119_6341_36_7747: {
    flexGrow: 1,
    width: wp("1.64183642444512%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6384919428397691%"),
    top: hp("1.6393442622951397%")
  },
  ImageBackground_I119_6341_36_7748: {
    width: wp("1.64183642444512%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_6586: {
    width: wp("11.401641836424444%"),
    minWidth: wp("11.401641836424444%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.347522043174218%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_119_6587: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I119_6587_122_4128: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_140_12215: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("76.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.820918212222562%"),
    top: hp("9.699453551912598%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_6588: {
    width: wp("9.759805411979325%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5341: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I119_6588_119_5341_119_5325: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7330495591365143%"),
    top: hp("21.448087431693978%"),
    justifyContent: "flex-start"
  },
  Text_I119_6588_119_5341_119_5325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6588_119_5354: {
    flexGrow: 1,
    width: wp("4.469443599878383%"),
    height: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.29036181210094%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5345: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5345_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5345_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6588_119_5345_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6588_119_5345_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6588_119_5345_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6588_119_5345_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5345_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6588_119_5345_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6588_119_5345_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6588_119_5345_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6588_119_5355: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5355_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5355_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6588_119_5355_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6588_119_5355_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191214%"),
    justifyContent: "flex-start"
  },
  Text_I119_6588_119_5355_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6588_119_5355_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6588_119_5355_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6588_119_5355_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6588_119_5355_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191214%"),
    justifyContent: "flex-start"
  },
  Text_I119_6588_119_5355_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6589: {
    width: wp("9.759805411979325%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.86885245901641%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5530: {
    flexGrow: 1,
    width: wp("4.469443599878383%"),
    height: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5531: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5531_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5531_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6589_119_5531_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186374%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6589_119_5531_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6589_119_5531_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6589_119_5531_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5531_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6589_119_5531_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6589_119_5531_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6589_119_5531_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6589_119_5532: {
    width: wp("4.469443599878383%"),
    minWidth: wp("4.469443599878383%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502706%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5532_119_5387: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5532_119_5387_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6589_119_5532_119_5387_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186374%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6589_119_5532_119_5387_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6589_119_5532_119_5387_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6589_119_5532_119_5415: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6589_119_5532_119_5415_119_5379: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6589_119_5532_119_5415_119_5380: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874317132%"),
    resizeMode: "cover"
  },
  View_I119_6589_119_5532_119_5415_119_5381: {
    flexGrow: 1,
    width: wp("1.8546670720583764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_I119_6589_119_5532_119_5415_119_5381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I119_6589_119_5529: {
    flexGrow: 1,
    width: wp("4.712678625722104%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.04712678625722%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I119_6589_119_5529_119_5325: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7330495591365143%"),
    top: hp("21.448087431693978%"),
    justifyContent: "flex-start"
  },
  Text_I119_6589_119_5529_119_5325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6590: {
    width: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.73770491803276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6590_119_5565: {
    flexGrow: 1,
    width: wp("10.003040437823046%"),
    height: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_I119_6590_119_5565_119_5326: {
    flexGrow: 1,
    width: wp("1.276983885679538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378230465186984%"),
    top: hp("21.448087431694034%"),
    justifyContent: "flex-start"
  },
  Text_I119_6590_119_5565_119_5326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_6591: {
    flexGrow: 1,
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30404378230465134%"),
    top: hp("96.85792349726773%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6591_119_6117: {
    flexGrow: 1,
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6591_119_6118: {
    width: wp("10.793554271815141%"),
    height: hp("12.704918032786885%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29
  },
  View_I119_6591_119_6119: {
    flexGrow: 1,
    width: wp("9.759805411979325%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5168744299179107%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6591_119_6120: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6591_119_6120_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6591_119_6120_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186374%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_I119_6591_119_6121: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64518090605047%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6591_119_6121_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6591_119_6121_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12161751292186196%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_I119_6591_119_6122: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.29036181210094%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6591_119_6122_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6591_119_6122_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_I119_6591_119_6123: {
    width: wp("1.8242626938279112%"),
    height: hp("11.202185792349727%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.93554271815141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_6591_119_6123_119_6087: {
    flexGrow: 1,
    width: wp("1.8242626938279112%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6591_119_6123_119_6088: {
    width: wp("2.067497719671633%"),
    minWidth: wp("2.067497719671633%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1216175129218584%"),
    top: hp("-0.5464480874315996%"),
    resizeMode: "cover"
  },
  View_119_6592: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I119_6592_36_7726: {
    flexGrow: 1,
    width: wp("11.401641836424444%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2732240437157998%")
  },
  View_I119_6592_36_7731: {
    flexGrow: 1,
    width: wp("2.0267977182464274%"),
    height: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.92879199604743%"),
    top: hp("1.0928961748634265%")
  },
  ImageBackground_I119_6592_36_7732: {
    width: wp("0.7396788465175704%"),
    minWidth: wp("0.7396788465175704%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2870790893888753%"),
    top: hp("1.275034419825829%")
  },
  ImageBackground_I119_6592_36_7736: {
    width: wp("0.46434709822091336%"),
    minWidth: wp("0.46434709822091336%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6697276907874752%"),
    top: hp("1.2746675418374593%")
  },
  ImageBackground_I119_6592_36_7740: {
    width: wp("0.5168744299179082%"),
    minWidth: wp("0.5168744299179082%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303316%")
  },
  View_I119_6592_36_7747: {
    flexGrow: 1,
    width: wp("1.64183642444512%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6384919428397673%"),
    top: hp("1.6393442622951397%")
  },
  ImageBackground_I119_6592_36_7748: {
    width: wp("1.64183642444512%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
