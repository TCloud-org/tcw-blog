export const Span = {
  "1": { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 },
  "2": { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
  "3": { xs: 24, sm: 24, md: 24, lg: 8, xl: 8, xxl: 8 },
  "4": { xs: 24, sm: 24, md: 12, lg: 6, xl: 6, xxl: 6 },
  "6": { xs: 24, sm: 24, md: 12, lg: 4, xl: 4, xxl: 4 },
  "8": { xs: 24, sm: 24, md: 12, lg: 3, xl: 3, xxl: 3 },
};

export const createSpan = (span: number) => {
  return { xs: 24, sm: 24, md: 24, lg: span, xl: span, xxl: span };
};
