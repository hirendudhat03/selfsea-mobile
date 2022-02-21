import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dropdown from './Dropdown';

interface OptionListType {
  title: string;
  value: string;
}

interface Props {
  defaultMonthButtonText: string;
  onSelectMonth: (item: string, index: number) => void;
  monthOptionList: OptionListType[];
  monthRowTextStyle?: {};
  monthStyle?: {};
  monthValue: string;

  defaultYearButtonText: string;
  onSelectYear: (item: string, index: number) => void;
  yearOptionList: OptionListType[];
  yearStyle?: {};
  yearRowTextStyle?: {};
  checkRight?: boolean;
  circleFill: boolean;
  yearValue: string;
  iconVisibleFill?: boolean;
}

const BirthDateInput = ({
  defaultMonthButtonText,
  onSelectMonth,
  monthOptionList,
  monthStyle,
  monthValue,

  defaultYearButtonText,
  onSelectYear,
  yearOptionList,
  yearStyle,
  checkRight,
  circleFill,
  yearValue,
  iconVisibleFill,
}: Props) => {
  return (
    <View style={styles.monthViewBottom}>
      <Dropdown
        optionList={monthOptionList}
        onSelect={onSelectMonth}
        defaultButtonText={defaultMonthButtonText}
        value={monthValue}
        style={monthStyle}
      />
      <View style={styles.yearDropdown}>
        <Dropdown
          optionList={yearOptionList}
          onSelect={onSelectYear}
          defaultButtonText={defaultYearButtonText}
          style={yearStyle}
          iconVisibleFill={iconVisibleFill}
          checkRight={checkRight}
          value={yearValue}
          circleFill={circleFill}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  monthViewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginHorizontal: 19,
  },
  yearDropdown: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
});
export default BirthDateInput;
