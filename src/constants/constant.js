

// src/utils/scale.js
import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const s = size => (width / guidelineBaseWidth) * size;

export const vs = size => (height / guidelineBaseHeight) * size;

export const ms = (size, factor = 0.5) =>
    size + (s(size) - size) * factor;

export const fs = size =>
    size * PixelRatio.getFontScale();

export const Fonts = {
    // Montserrat
    MontserratBlack: 'Montserrat-Black',
    MontserratBold: 'Montserrat-Bold',
    MontserratExtraBold: 'Montserrat-ExtraBold',
    MontserratLight: 'Montserrat-Light',
    MontserratMedium: 'Montserrat-Medium',
    MontserratRegular: 'Montserrat-Regular',
    MontserratSemiBold: 'Montserrat-SemiBold',

    // Poppins
    PoppinsBold: 'Poppins-Bold',
    PoppinsLight: 'Poppins-Light',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsSemiBold: 'Poppins-SemiBold',
}

export const BannerImages = []

export const Images = {
    // onBoarding
    onboarding1: "",
    onboarding2: "",
    onboarding3: "",

}

export const Icons = {
    google: "",
    facebook: "",
}



export const TRANSACTIONS = [
    { id: '1', title: 'Paid to Aman', time: 'Today at 09:20 am', amount: '₹50.0', type: 'debit' },
    { id: '2', title: 'Add to Wallet', time: 'Today at 08:20 am', amount: '₹50.0', type: 'credit' },
    { id: '3', title: 'Paid to Aman', time: 'Today at 09:20 am', amount: '₹50.0', type: 'debit' },
    { id: '4', title: 'Add to Wallet', time: 'Today at 08:20 am', amount: '₹50.0', type: 'credit' },
    { id: '5', title: 'Paid to Aman', time: 'Today at 09:20 am', amount: '₹50.0', type: 'debit' },
]
