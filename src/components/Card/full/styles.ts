import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 95%;
  height: ${RFValue(450)}px;
  border-radius: ${RFValue(10)}px;
  margin-top: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  elevation: 2;
  position: relative;
  justify-content: center;
  align-self: center;
`;

export const Content = styled.View`
  flex: 0.7;
  padding-left: ${RFValue(10)}px;
`;

export const ImgContainer = styled.View`
  flex: 1.6;
  width: 100%;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: left;
`;

export const PriceContainer = styled.View`
  flex-direction: column;
  margin-left: ${RFValue(10)}px;
  position: absolute;
  bottom: ${RFValue(10)}px;
`;

export const Price = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
  color: ${({ theme }) => theme.COLORS.RED2};
`;

export const PriceType = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY4};
  letter-spacing: 1px;
`;

export const StockContainer = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: ${RFValue(0)}px;
  right: ${RFValue(0)}px;
  border-bottom-right-radius: ${RFValue(10)}px;
  border-top-left-radius: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.GRAY7};
  background-color: ${({ theme }) => theme.COLORS.GRAY2};
  padding: ${RFValue(10)}px;
`;

export const StockAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(5)}px;
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;