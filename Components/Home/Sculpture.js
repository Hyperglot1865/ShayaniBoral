import React from 'react'
import styles from '../../src/styles/Home/Sculpture.module.css'
import Image from 'next/image'

export default function Sculpture() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <Image className={styles.artistimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
        </div>
        <div className={styles.right}>
            <div className={styles.heading}>Sculpture</div>
            <div className={styles.text}>Lorem ipsum dolor sit amet. Ut velit blanditiis ut ullam maiores et sunt nesciunt et ipsam sint qui galisum voluptatibus et illum corporis. Et nisi quia 33 commodi magni in dolore unde ut laborum saepe. <br/><br/>

            Est corrupti omnis aut eius explicabo est repellat aspernatur et beatae nisi et maiores recusandae cum necessitatibus vero qui corporis asperiores. Quo quia nisi aut animi debitis vel quis unde ea exercitationem voluptates sit impedit internos et modi esse ea ipsa blanditiis. <br/><br/>
            
            In dolores dignissimos ut doloremque nesciunt et commodi pariatur et itaque voluptas. Ut repudiandae possimus ut tempore voluptate et dignissimos quae aut adipisci dolore et quas ducimus qui galisum aliquid est natus incidunt. Sed corporis quia At facilis suscipit non quam accusamus. Eum officia rerum qui accusantium ipsum qui consequatur optio qui odio quod sit velit eaque eos eligendi galisum.</div>
        </div>
        
    </div>
  )
}
