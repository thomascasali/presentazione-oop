// Utility per calcolare automaticamente i numeri delle slide
// in base alla struttura modulare

/**
 * Calcola il numero di slide totali e gli offset per ogni modulo
 * @param {Array} modules - Array di moduli con le loro slide
 * @returns {Object} - Oggetto con informazioni sui numeri di slide
 */
const calculateSlideNumbers = (modules) => {
  let currentOffset = 0;
  const moduleInfo = [];

  modules.forEach((module, index) => {
    const slideCount = module.slides.length;
    moduleInfo.push({
      id: module.id,
      name: module.name,
      startSlide: currentOffset,
      endSlide: currentOffset + slideCount - 1,
      slideCount: slideCount,
      offset: currentOffset
    });
    currentOffset += slideCount;
  });

  return {
    totalSlides: currentOffset,
    modules: moduleInfo
  };
};

/**
 * Ottiene il numero assoluto di una slide dato il modulo e l'indice locale
 * @param {number} moduleIndex - Indice del modulo
 * @param {number} localSlideIndex - Indice locale della slide nel modulo
 * @param {Array} moduleInfo - Array con informazioni sui moduli
 * @returns {number} - Numero assoluto della slide
 */
const getAbsoluteSlideNumber = (moduleIndex, localSlideIndex, moduleInfo) => {
  if (moduleIndex >= moduleInfo.length) return 0;
  return moduleInfo[moduleIndex].offset + localSlideIndex;
};

/**
 * Ottiene il modulo e l'indice locale dato il numero assoluto della slide
 * @param {number} absoluteSlideNumber - Numero assoluto della slide
 * @param {Array} moduleInfo - Array con informazioni sui moduli
 * @returns {Object} - {moduleIndex, localSlideIndex}
 */
const getModuleAndLocalIndex = (absoluteSlideNumber, moduleInfo) => {
  for (let i = 0; i < moduleInfo.length; i++) {
    const module = moduleInfo[i];
    if (absoluteSlideNumber >= module.startSlide && absoluteSlideNumber <= module.endSlide) {
      return {
        moduleIndex: i,
        localSlideIndex: absoluteSlideNumber - module.offset
      };
    }
  }
  return { moduleIndex: 0, localSlideIndex: 0 };
};
