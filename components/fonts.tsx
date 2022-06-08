import { Global, css } from '@emotion/react'
import { FC } from 'react'
/* @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600&display=swap'); */

const Fonts: FC<unknown> = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    `}
  />
)
export default Fonts
