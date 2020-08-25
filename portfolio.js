function variableResize() {

    // get the computed styles into an object
    let bodyStyles = window.getComputedStyle(document.body);	
      // set up a place to save new values back 
    let root = document.documentElement;
      
      // Minimum and Maximum viewport size - must be unitless em values
      const maxWindowSize = bodyStyles.getPropertyValue('--bp-xlarge') * 16;
      const minWindowSize = bodyStyles.getPropertyValue('--bp-small') * 16;
      
      // Get current viewport size
      const windowWidth = window.innerWidth
      
    // Scale elements and min/max values
    const pWidthVar = '--p-wdth';
      const pMinFontWidth = bodyStyles.getPropertyValue('--p-wdth-min');
      const pMaxFontWidth = bodyStyles.getPropertyValue('--p-wdth-max');
      scale(pWidthVar, pMinFontWidth, pMaxFontWidth);
  
    const pWeightVar = '--p-wght';
      const pMinFontWeight = bodyStyles.getPropertyValue('--p-wght-min');
      const pMaxFontWeight = bodyStyles.getPropertyValue('--p-wght-max');
      scale(pWeightVar, pMinFontWeight, pMaxFontWeight);
      
    const h1WidthVar = '--h1-wdth';
      const h1MinFontWidth = bodyStyles.getPropertyValue('--h1-wdth-min');
      const h1MaxFontWidth = bodyStyles.getPropertyValue('--h1-wdth-max');
      scale(h1WidthVar, h1MinFontWidth, h1MaxFontWidth);
  
    const h1WeightVar = '--h1-wght';
      const h1MinFontWeight = bodyStyles.getPropertyValue('--h1-wght-min');
      const h1MaxFontWeight = bodyStyles.getPropertyValue('--h1-wght-max');
      scale(h1WeightVar, h1MinFontWeight, h1MaxFontWeight);
      
    const h2WidthVar = '--h2-wdth';
      const h2MinFontWidth = bodyStyles.getPropertyValue('--h2-wdth-min');
      const h2MaxFontWidth = bodyStyles.getPropertyValue('--h2-wdth-max');
      scale(h2WidthVar, h2MinFontWidth, h2MaxFontWidth);
  
    const h2WeightVar = '--h2-wght';
      const h2MinFontWeight = bodyStyles.getPropertyValue('--h2-wght-min');
      const h2MaxFontWeight = bodyStyles.getPropertyValue('--h2-wght-max');
      scale(h2WeightVar, h2MinFontWeight, h2MaxFontWeight);
      
      function scale(varName, minValue, maxValue) {
          // Make sure min/max are numbers
          minValue = minValue * 1;
          maxValue = maxValue * 1;
  
          //Scale within a range
          const percent = (windowWidth - minWindowSize) / (maxWindowSize - minWindowSize);
          if (maxValue < minValue) {
              var valueScale = minValue - (percent * (minValue - maxValue));
          } else {
              var valueScale = (percent * (maxValue - minValue)) + minValue;
          }
        
          // Get the new font width
          const newValue = windowWidth > maxWindowSize
             ? maxValue 
             : windowWidth < minWindowSize 
                  ? minValue 
                  : valueScale;
         
          // Set my CSS Custom Property for width to update.
          root.style.setProperty(varName, newValue);
      }
  }
  
  window.addEventListener("load", variableResize);
  window.addEventListener("resize", variableResize);