import React, { createContext, useContext, useMemo, useState } from "react";
import TopToast from "../components/TopToast";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
    const [state, setState] = useState({
        visible: false,
        message: "",
        type: "error",    
        duration: 2500,
    });

    // ✅ new signature: (message, type, duration)
    const showToast = (message, type = "error", duration = 2500) => {
        setState({
            visible: true,
            message: String(message ?? ""),
            type,
            duration,
        });
    };

    const hideToast = () => {
        setState((p) => ({ ...p, visible: false }));
    };

    const value = useMemo(() => ({ showToast, hideToast }), []);

    return (
        <ToastContext.Provider value={value}>
            {children}
            <TopToast
                visible={state.visible}
                message={state.message}
                type={state.type}          
                duration={state.duration}
                onHide={hideToast}
            />
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
