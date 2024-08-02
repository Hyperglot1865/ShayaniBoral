import React from 'react'
import styles from '../../src/styles/Home/Story.module.css'
import Image from 'next/image'

export default function Story() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <Image className={styles.artistimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
        </div>
        <div className={styles.right}>
            <div className={styles.heading}>Story</div>
            <div className={styles.text}>Lorem ipsum dolor sit amet. Ut velit blanditiis ut ullam maiores et sunt nesciunt et ipsam sint qui galisum voluptatibus et illum corporis. Et nisi quia 33 commodi magni in dolore unde ut laborum saepe. <br/><br/>

            Est corrupti omnis aut eius explicabo est repellat aspernatur et beatae nisi et maiores recusandae cum necessitatibus vero qui corporis asperiores. Quo quia nisi aut animi debitis vel quis unde ea exercitationem voluptates sit impedit internos et modi esse ea ipsa blanditiis.</div>
        </div>
        
    </div>
  )
}
