import React from 'react';

const CVContext = React.createContext();

export const CVProvider = CVContext.Provider;
export const CVConsumer = CVContext.Consumer;

export default CVContext;
