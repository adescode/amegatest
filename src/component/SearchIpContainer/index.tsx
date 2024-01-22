import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {setDefaultIp} from '../../services/httpServices';
import {Alert} from 'react-native';
import styles from './style';

const REGEX_EXP =
  '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';

const SearchIpContainer = () => {
  const [searchIpValue, setSearchIpValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleInputValue = async (value: string) => {
    if (value) {
      setSearchIpValue(value);
    } else {
      setSearchIpValue('');
      await setDefaultIp();
    }
  };

  const handleSubmit = async () => {
    if (searchIpValue) {
      const regex = new RegExp(REGEX_EXP);
      if (regex.test(searchIpValue)) {
        setIsLoading(true);
        await setDefaultIp(searchIpValue);
        setIsLoading(false);
      } else {
        Alert.alert('Invalid Ip address');
      }
    }
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ipText}>IP Tracker</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="decimal-pad"
          placeholder="Search for any Ip Address"
          value={searchIpValue}
          onChangeText={handleInputValue}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.inputButton}>
          {isLoading ? (
            <ActivityIndicator size={24} />
          ) : (
            <MaterialCommunityIcons
              name={'chevron-right'}
              color={'white'}
              size={24}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchIpContainer;
