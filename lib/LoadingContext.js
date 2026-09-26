"use client";

import { createContext, useContext } from "react";

export const LoadingContext = createContext({
    isLoading: true,
    isLoaded: false,
});

export const useLoading = () => useContext(LoadingContext);
