import React from 'react';
import {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../Colors/colors';
import {SvgCssUri} from 'react-native-svg/css';
import MaskedView from '@react-native-community/masked-view';

export function Icon(params) {
  var names = {
    trophy: 'https://media.nanodot.us/img/trophy.png',
    like0: 'https://media.nanodot.us/icon/like-icon-0.svg',
    like1: 'https://media.nanodot.us/icon/like-icon-1.svg',
    comments: 'https://media.nanodot.us/icon/comment-icon.svg',
    text: 'https://media.nanodot.us/icon/text.png',
    camera: 'https://media.nanodot.us/icon/camera.png',
    video: 'https://media.nanodot.us/icon/video.png',
    customEdit: 'https://media.nanodot.us/icon/edit.svg',
    customVerified: 'https://media.nanodot.us/img/Verified-Icon.png',
  };
  var {width, height, name, url, color, dontShowMask,imageStyle} = params;

  if (name && names[name]) {
    url = names[name];
  }
  if (url) {
    var urlext = url.substring(url.length - 4, url.length);
    if (urlext === '.png' || urlext === '.jpg' || urlext === '.jpeg' || urlext === '.gif') {
      var mask = (
        <Image
          source={{uri: url}}
          style={[
            imageStyle ? imageStyle : {},
            {
              width: width,
              height: height,
            },
          ]}
        />
      );
    } else if (urlext === '.svg') {
      var mask = <SvgCssUri uri={url} height={height} width={width} />;
    }
  }
  var icon = !dontShowMask ? (
    <MaskedView style={{width: width, height: height}} maskElement={mask}>
      <View style={[{width: width, height: height, backgroundColor: color}]} />
    </MaskedView>
  ) : (
    mask
  );
  return icon;
}
