import React from 'react';
import { View, Text, Image } from 'react-native';
import Images from '../../theme/images';
import { Theme } from '../../styles';
import Alert from '../../component/Alert';
import Constant from '../../theme/constant';
import { useRoute } from '@react-navigation/native';
import Button from '../../component/Button';

const CommunityCard = ({ navigation, alert }) => {
  var theme = Theme();
  const route = useRoute();
  console.log(route.name, navigation);
  return (
    <View style={theme.communityCardView}>
      <View style={[theme.row]}>
        <View style={theme.imageView}>
          <Image source={Images.LogoTab} style={theme.iconStyle} />
        </View>
        <View style={theme.inputView}>
          <Text style={theme.titleText}>navigating identity</Text>
          <Text style={theme.descriptionText} numberOfLines={6}>
            a community to discuss questions and situations related to gender
            identity, sexual orientation, race and ethnicity
          </Text>
        </View>
        {route.name === 'AllCommunities' && !alert && (
          <View style={[theme.allComJoin]}>
            <Button type={Constant.buttons.SECONDARY} text={'join'} />
          </View>
        )}
      </View>
      {alert && (
        <View style={[theme.marginHorizontal10]}>
          {route.name === 'AllCommunities' ? (
            <Alert
              type={Constant.alert.MENTEE_FADE}
              text={'an admin has removed you. '}
            />
          ) : (
            <Alert
              type={Constant.alert.MENTEE}
              text={'live session today from 4pm-7pm EST '}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default CommunityCard;
