// import React, { useState, useRef } from 'react';
// import {
//     View,
//     TextInput,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
// } from 'react-native';
// import Ionicons from '@react-native-vector-icons/ionicons';

// import { useTheme } from '../../contexts/ThemeContext';

// import { Fonts, ms, vs, s } from '../../constants/constant';

// const AppInput = ({
//     label,
//     value,
//     onChangeText,
//     placeholder,

//     type = 'text', // text | phone | email | password
//     leftIcon,
//     rightIcon,

//     error,
//     helperText,

//     disabled = false,
//     maxLength,
//     multiline = false,

//     returnKeyType = 'next',
//     onSubmitEditing,

//     style,
//     inputStyle,
//     inputCon
// }) => {
//     const { colors } = useTheme();
//     const inputRef = useRef(null);

//     const [secure, setSecure] = useState(type === 'password');
//     const [focused, setFocused] = useState(false);

//     // 🔹 keyboard type
//     const keyboardType =
//         type === 'phone'
//             ? 'phone-pad'
//             : type === 'email'
//                 ? 'email-address'
//                 : 'default';

//     return (
//         <View style={[styles.wrapper, style]}>
//             {/* LABEL */}
//             {label && (
//                 <Text style={[styles.label, { color: colors.textPrimary }]}>
//                     {label}
//                 </Text>
//             )}

//             {/* INPUT BOX */}
//             <View
//                 style={[
//                     styles.inputBox,
//                     {
//                         backgroundColor: colors.surface,
//                         borderColor: error
//                             ? '#E53935'
//                             : focused
//                                 ? colors.primary
//                                 : colors.border,
//                         opacity: disabled ? 0.6 : 1,

//                     },
//                     inputCon
//                 ]}
//             >
//                 {/* LEFT ICON */}
//                 {leftIcon && (
//                     <Ionicons
//                         name={leftIcon}
//                         size={ms(18)}
//                         color={colors.textMuted}
//                         style={{ marginRight: s(8) }}
//                     />
//                 )}

//                 <TextInput
//                     ref={inputRef}
//                     value={value}
//                     onChangeText={onChangeText}
//                     placeholder={placeholder}
//                     placeholderTextColor={colors.textMuted}
//                     keyboardType={keyboardType}
//                     secureTextEntry={secure}
//                     maxLength={maxLength}
//                     editable={!disabled}
//                     multiline={multiline}
//                     returnKeyType={returnKeyType}
//                     onSubmitEditing={onSubmitEditing}
//                     onFocus={() => setFocused(true)}
//                     onBlur={() => setFocused(false)}
//                     style={[
//                         styles.input,
//                         {
//                             color: colors.textPrimary,
//                             height: multiline ? vs(80) : vs(48),
//                         },
//                         inputStyle,
//                     ]}
//                 />

//                 {/* RIGHT ICON / PASSWORD TOGGLE */}
//                 {type === 'password' ? (
//                     <TouchableOpacity onPress={() => setSecure(!secure)}>
//                         <Ionicons
//                             name={secure ? 'eye-off-outline' : 'eye-outline'}
//                             size={ms(18)}
//                             color={colors.textMuted}
//                         />
//                     </TouchableOpacity>
//                 ) : (
//                     rightIcon && (
//                         <Ionicons
//                             name={rightIcon}
//                             size={ms(18)}
//                             color={colors.textMuted}
//                         />
//                     )
//                 )}
//             </View>

//             {/* ERROR / HELPER */}
//             {error ? (
//                 <Text style={styles.error}>{error}</Text>
//             ) : (
//                 helperText && (
//                     <Text style={[styles.helper, { color: colors.textMuted }]}>
//                         {helperText}
//                     </Text>
//                 )
//             )}
//         </View>
//     );
// };

// export default AppInput;

// const styles = StyleSheet.create({
//     wrapper: {
//         marginBottom: vs(14),
//     },

//     label: {
//         fontFamily: Fonts.InterM,
//         fontSize: ms(13),
//         marginBottom: vs(6),
//     },

//     inputBox: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderRadius: ms(10),
//         paddingHorizontal: s(12),
//     },

//     input: {
//         flex: 1,
//         fontFamily: Fonts.PoppinsR,
//         fontSize: ms(14),
//         paddingVertical: 0,
//     },

//     error: {
//         color: '#E53935',
//         fontSize: ms(12),
//         marginTop: vs(4),
//         fontFamily: Fonts.InterM,
//     },

//     helper: {
//         fontSize: ms(12),
//         marginTop: vs(4),
//         fontFamily: Fonts.InterR,
//     },
// });


import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Pressable,
    Animated
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useTheme } from '../../contexts/ThemeContext';
import { Fonts, ms, vs, s } from '../../constants/constant';

const AppInput = ({
    label,
    value,
    onChangeText,
    placeholder,

    type = 'text',
    leftIcon,
    rightIcon,

    error,
    helperText,

    disabled = false,
    maxLength,
    multiline = false,

    returnKeyType = 'next',
    onSubmitEditing,

    style,
    inputStyle,
    inputCon,
    onFocus,
    onPressInput,

    options = [], // 👈 NEW for dropdown
}) => {
    const { colors } = useTheme();
    const inputRef = useRef(null);

    const [secure, setSecure] = useState(type === 'password');
    const [focused, setFocused] = useState(false);

    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(rotateAnim, {
            toValue: showOptions ? 1 : 0,
            useNativeDriver: true,
            speed: 14,
            bounciness: 6,
        }).start();

    }, [showOptions]);


    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });


    const [showDate, setShowDate] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const isDate = type === 'date';
    const isSelect = type === 'select';

    const keyboardType =
        type === 'phone'
            ? 'phone-pad'
            : type === 'email'
                ? 'email-address'
                : 'default';

    const onDateChange = (event, selectedDate) => {
        setShowDate(false);
        if (!selectedDate) return;

        const day = String(selectedDate.getDate()).padStart(2, '0');
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const year = selectedDate.getFullYear();

        onChangeText(`${day}/${month}/${year}`);
    };

    return (
        <View style={[styles.wrapper, style]}>
            {label && (
                <Text style={[styles.label, { color: colors.textPrimary }]}>
                    {label}
                </Text>
            )}

            <Pressable
                onPress={() => {
                    if (isDate) setShowDate(true);
                    if (isSelect) setShowOptions(prev => !prev);
                    onPressInput && onPressInput();
                }}
            >
                <View
                    style={[
                        styles.inputBox,
                        {
                            backgroundColor: colors.surface,
                            borderColor: error
                                ? '#E53935'
                                : focused
                                    ? colors.primary
                                    : colors.border,
                            opacity: disabled ? 0.6 : 1,
                        },
                        inputCon,
                    ]}
                >
                    {leftIcon && (
                        <Ionicons
                            name={leftIcon}
                            size={ms(18)}
                            color={colors.textMuted}
                            style={{ marginRight: s(8) }}
                        />
                    )}

                    <TextInput
                        ref={inputRef}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={colors.textMuted}
                        keyboardType={keyboardType}
                        secureTextEntry={secure}
                        maxLength={maxLength}
                        editable={!disabled && !isDate && !isSelect}
                        multiline={multiline}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                        onFocus={() => {
                            setFocused(true);
                            onFocus && onFocus();
                        }}
                        onBlur={() => setFocused(false)}
                        style={[
                            styles.input,
                            {
                                color: colors.textPrimary,
                                height: multiline ? vs(80) : vs(48),
                            },
                            inputStyle,
                        ]}
                    />

                    {/* Right icons */}
                    {type === 'password' ? (
                        <TouchableOpacity onPress={() => setSecure(!secure)}>
                            <Ionicons
                                name={secure ? 'eye-off-outline' : 'eye-outline'}
                                size={ms(18)}
                                color={colors.textMuted}
                            />
                        </TouchableOpacity>
                    ) : isDate ? (
                        <Ionicons name="calendar-outline" size={ms(18)} color={colors.textMuted} />
                    ) : isSelect ? (
                        <Animated.View style={{ transform: [{ rotate }] }}>
                            <Ionicons name="chevron-down" size={ms(18)} color={colors.textMuted} />
                        </Animated.View>
                    )
                        : (
                            rightIcon && (
                                <Ionicons name={rightIcon} size={ms(18)} color={colors.textMuted} />
                            )
                        )}
                </View>
            </Pressable>

            {error ? (
                <Text style={styles.error}>{error}</Text>
            ) : (
                helperText && (
                    <Text style={[styles.helper, { color: colors.textMuted }]}>
                        {helperText}
                    </Text>
                )
            )}

            {/* DATE PICKER */}
            {showDate && (
                <DateTimePicker
                    value={(() => {
                        if (value && typeof value === 'string') {
                            const params = value.split('/');
                            if (params.length === 3) {
                                // DD/MM/YYYY -> new Date(YYYY, MM-1, DD)
                                const d = new Date(params[2], params[1] - 1, params[0]);
                                if (!isNaN(d.getTime())) return d;
                            }
                        }
                        return new Date();
                    })()}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                    maximumDate={new Date()}
                />
            )}

            {/* DROPDOWN MODAL */}
            {isSelect && showOptions && (
                <View style={[styles.dropdown, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                    <FlatList
                        data={options}
                        keyExtractor={(item) => item}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.optionItem}
                                onPress={() => {
                                    onChangeText(item);
                                    setShowOptions(false);
                                }}
                            >
                                <Text style={{ color: colors.textPrimary }}>
                                    {item}
                                </Text>
                            </Pressable>
                        )}
                    />
                </View>
            )}

        </View>
    );
};

export default AppInput;

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: vs(14),
    },

    label: {
        fontFamily: Fonts.InterM,
        fontSize: ms(13),
        marginBottom: vs(6),
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: ms(10),
        paddingHorizontal: s(12),
    },

    input: {
        flex: 1,
        fontFamily: Fonts.PoppinsR,
        fontSize: ms(14),
        paddingVertical: 0,
    },

    error: {
        color: '#E53935',
        fontSize: ms(12),
        marginTop: vs(4),
        fontFamily: Fonts.InterM,
    },

    helper: {
        fontSize: ms(12),
        marginTop: vs(4),
        fontFamily: Fonts.InterR,
    },
    dropdown: {
        marginTop: vs(6),
        borderWidth: 1,
        borderRadius: ms(10),
        overflow: 'hidden',
    },

    optionItem: {
        paddingVertical: vs(12),
        paddingHorizontal: s(14),
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
    },

});

