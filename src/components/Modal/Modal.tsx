import {Icon} from '@ui-kitten/components';
import React from 'react';
import {
  View,
  Modal as DefaultModal,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {styles} from './Modal.style';

const Modal = (props: any) => {
  const {modalVisibility, closeModal, component} = props;
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <DefaultModal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}>
        <View style={[styles.modalContainer, {width}]}>
          <ScrollView style={styles.modalContent}>{component}</ScrollView>
          <TouchableOpacity style={styles.buttonClose} onPress={closeModal}>
            <Icon
              name="close-outline"
              fill="#000"
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
      </DefaultModal>
    </View>
  );
};

export default Modal;
