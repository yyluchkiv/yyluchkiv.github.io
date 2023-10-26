const DateUtility = {
  formatArticleDate (date: string) {
    const arrayDate = String(new Date(date)).split(' ')
    const month = arrayDate[1]
    const dayNumber = arrayDate[2]
    const year = arrayDate[3]
    return `${ month } ${ dayNumber }, ${ year }`
  },
  getCurrentYear() {
    return new Date().getFullYear()
  }
}

export default DateUtility