import './myLabel.css'

export interface MyLabelProps {
  /**
   * Set text
   */
  label: string,
  /**
   * Set text size
   */
  size: 'normal'|'h1'|'h2'|'h3',
  /**
   * Set Uppercase
   */
  allCaps?: boolean,
  /**
   * Set color theme
   */
  color?: 'primary'|'secondary'|'tertiary',
  /**
   * Set custom color 
   */
  fontColor?: string,
  /**
   * Set custom color 
   */
  backgroundColor?: string,
}

export const MyLabel = ( { 
  label           = 'My label',
  size            = 'normal',
  allCaps         = false,
  color           = 'primary',
  fontColor       = '#000000',
  backgroundColor = 'transparente'
}: MyLabelProps ) => {
  return (
    <div 
      className={ `label ${ size } text-${color}` }
      style={{ color: fontColor,  backgroundColor }}>
      {
        allCaps ? label.toUpperCase() : label
      }
    </div>
  )
}
