window.addEventListener('load', () => {

    const skills = document.getElementById('skills');

        const allSkillsCategories = [
            {
                skillCategory: 'Front-end',
                skills: [
                    { image: 'image/html.png', title: 'Html' },
                    { image: 'image/css.png', title: 'Css' },
                    { image: 'image/js.png', title: 'JavaScript' },
                ],
            },
            {
                skillCategory: 'Back-end',
                skills: [
                    { image: 'image/python.png', title: 'Python' },
                    { image: 'image/php.png', title: 'Php' },
                    { image: 'image/sql.png', title: 'Sql' },
                ],
            },
            {
                skillCategory: 'Framework',
                skills: [
                    { image: 'image/bootstrap.png', title: 'Bootstrap' },
                    { image: 'image/react.png', title: 'React' },
                    { image: 'image/dj.png', title: 'Django' },
                ],
            },
            {
                skillCategory: 'Tools',
                skills: [
                    { image: 'image/firebase.png', title: 'Firebase' },
                    { image: 'image/adobe.png', title: 'Adobe suite' },
                    { image: 'image/git.png', title: 'Git' },
                    { image: 'image/vscode.png', title: 'VS Code' },
                ],
            },
        ];
    
        return (
            <section id="skills" class="skills">
                <h1 id="skills-title" class="title title-center">Meine Fähigkeiten</h1>
                {allSkillsCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h5 className="skill-title">{category.skillCategory}</h5>
                        <div id={index === 3 ? 'tools' : ''} className="skill-container">
                            {category.skills.map((skill, index) => (
                                <div className='img' key={index}>
                                    <img src={skill.image} alt="" className="skill-icon" />
                                    <p>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        )
    
    
})
