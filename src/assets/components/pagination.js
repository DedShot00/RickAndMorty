export const paginationLogic= (currentPage , residents) => { 

  const RESIDENTS_PP = 20
  const totalPages = Math.ceil(residents?.length / RESIDENTS_PP)
  const inPageResidents = residents?.slice(((currentPage-1)*RESIDENTS_PP),(currentPage*RESIDENTS_PP))


  const pages = []
  for (let i = 0; i < totalPages ; i++) { 
    pages.push(i + 1)
  }

  return {
    inPageResidents,
    pages
  }
 }