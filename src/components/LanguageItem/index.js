import './index.css'

const LanguageItem = prop => {
  const {LanguageDetails} = prop
  const {imageurl, imageAltText} = LanguageDetails
  return (
    <>
      <li className="item-container">
        <img className="item-image" src={imageurl} alt={`${imageAltText}`} />
      </li>
    </>
  )
}

export default LanguageItem
