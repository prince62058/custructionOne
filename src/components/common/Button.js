// import React, { useMemo } from 'react';
// import {
//     TouchableOpacity,
//     Text,
//     StyleSheet,
//     ActivityIndicator,
//     Image,
// } from 'react-native';

// import { useTheme } from '../../contexts/ThemeContext';

// import { Fonts, ms, vs, s } from '../../constants/constant';
// import Ionicons from '@react-native-vector-icons/ionicons';

// const Button = ({
//     title,
//     onPress,
//     disabled = false,
//     loading = false,
//     variant = 'primary', // 'primary' | 'outline'
//     style,
//     textStyle,
//     Icon1 = false,
//     Icon = false
// }) => {
//     const { colors } = useTheme();

//     const styles = useMemo(
//         () => getStyles(colors, variant, disabled),
//         [colors, variant, disabled]
//     );

//     return (
//         <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={onPress}
//             disabled={disabled || loading}
//             style={[styles.button, style]}

//         >
//             {Icon ? <Image source={Icon} style={styles.icon} /> : null}


//             {loading ? (
//                 <ActivityIndicator color={variant === 'outline' ? colors.primary : '#fff'} />
//             ) : (
//                 <Text style={[styles.text, textStyle]}>
//                     {title} {Icon1 ? <Ionicons name={Icon1} size={20} color={colors.primary} /> : null}
//                 </Text>

//             )}
//         </TouchableOpacity>
//     );
// };

// export default Button;


// const getStyles = (colors, variant, disabled,) =>
//     StyleSheet.create({
//         button: {
//             backgroundColor:
//                 variant === 'outline'
//                     ? 'transparent'
//                     : disabled
//                         ? colors.gray300
//                         : colors.primary,

//             borderWidth: variant === 'outline' ? 1 : 0,
//             borderColor: colors.primary,

//             paddingVertical: vs(12),
//             paddingHorizontal: s(40),
//             borderRadius: ms(8),
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//         },

//         text: {
//             fontSize: ms(16),
//             fontFamily: Fonts.PoppinsM,
//             color:
//                 variant === 'outline'
//                     ? colors.primary
//                     : '#FFFFFF',
//         },
//         icon: {
//             width: s(18),
//             height: s(18),
//             marginRight: s(5),
//             marginBottom: vs(5)
//         }
//     });



import React, { useMemo } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    Image,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { useTheme } from '../../contexts/ThemeContext';
import { Fonts, ms, vs, s } from '../../constants/constant';

const Button = ({
    title,
    onPress,
    disabled = false,
    loading = false,
    variant = 'primary', // 'primary' | 'outline'
    style,
    textStyle,
    Icon1 = null, // ionicons name
    Icon = null,  // image source
}) => {
    const { colors } = useTheme();

    const styles = useMemo(
        () => getStyles(colors, variant, disabled),
        [colors, variant, disabled]
    );

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            disabled={disabled || loading}
            style={[styles.button, style]}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'outline' ? colors.primary : '#fff'}
                />
            ) : (
                <>
                    {Icon && <Image source={Icon} style={styles.icon} />}

                    <Text style={[styles.text, textStyle]}>
                        {title}
                    </Text>

                    {Icon1 && (
                        <Ionicons
                            name={Icon1}
                            size={18}
                            color={variant === 'outline' ? colors.primary : '#fff'}
                            style={{ marginLeft: s(6) }}
                        />
                    )}
                </>
            )}
        </TouchableOpacity>
    );
};

export default Button;

const getStyles = (colors, variant, disabled) =>
    StyleSheet.create({
        button: {
            // flex: 1, // 🔥 MOST IMPORTANT FIX
            height: vs(48),

            // width: '100%',
            paddingHorizontal: s(10),
            backgroundColor:
                variant === 'outline'
                    ? 'transparent'
                    : disabled
                        ? colors.gray300
                        : colors.primary,

            borderWidth: variant === 'outline' ? 1 : 0,
            borderColor: colors.primary,

            borderRadius: ms(10),

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },

        text: {
            fontSize: ms(16),
            fontFamily: Fonts.PoppinsM,
            color: variant === 'outline' ? colors.primary : '#FFFFFF',
        },

        icon: {
            width: s(18),
            height: s(18),
            marginRight: s(6),
            resizeMode: 'contain',
        },
    });
