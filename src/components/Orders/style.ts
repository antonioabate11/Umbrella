import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "react-native";

export const Container = styled.View`
    height: 100%;
`;
export const ContentHeader = styled.View`
    padding: ${RFValue(10)}px;
    margin-top: ${RFValue(50)}px;
    margin-left: ${RFValue(15)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.RED3};
`;
export const CardOrder = styled.View`
    border-radius: ${RFValue(0)}px;
    padding: ${RFValue(8)}px;
    width: ${RFValue(80)}%;
    margin-left: ${RFValue(16)}px;
    flex-direction: row;
    align-items: center;
    background-color: #DCDCDC;
    border-top-right-radius: ${RFValue(5)}px;
    border-top-left-radius: ${RFValue(5)}px;
`;
export const OrderText = styled.Text`
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    color: ${({theme}) => theme.COLORS.RED5};
    margin-left: ${RFValue(20)}px;
`;
export const SetCard = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const SetImage = styled(Image)`
    width: ${RFValue(80)}px;
    height: ${RFValue(90)}px;
    border-radius: ${RFValue(8)}px;
    margin-left: ${RFValue(5)}px;
`;
export const SetName = styled.Text`
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.COLORS.RED5};
    margin-left: ${RFValue(20)}px;
    flex: 1;
`;
export const SetDescription = styled.Text`
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.COLORS.RED5};
    margin-left: ${RFValue(20)}px;
`;
export const ViewDescription = styled.View`
    background-color: #C0C0C0;
    border-radius: ${RFValue(0)}px;
    padding: ${RFValue(8)}px;
    width: ${RFValue(80)}%;
    margin-left: ${RFValue(16)}px;
    height: ${RFValue(70)}px;
    border-bottom-right-radius: ${RFValue(5)}px;
    border-bottom-left-radius: ${RFValue(5)}px;
`;
export const ViewText = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
`;

