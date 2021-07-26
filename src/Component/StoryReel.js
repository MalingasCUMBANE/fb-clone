import React from 'react';
import Story from './Story';
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story image="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg"
                    profileSrc="https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg"
                    title="Elon Musk"
                    />

            <Story image="https://www.orfonline.org/wp-content/uploads/2019/07/hasina-Xi.jpg"
                    profileSrc="https://www.aljazeera.com/wp-content/uploads/2018/10/8d25008905eb44d59d6346d3b0ff4b89_18.jpeg?resize=770%2C513"
                    title="Shik Hasina"
                    />

            <Story image="https://sportstar.thehindu.com/migration_catalog/article17187523.ece/ALTERNATES/LANDSCAPE_1200/Ozil"
                    profileSrc="http://2.bp.blogspot.com/-uYvypTv2zIk/VKMaUozSKdI/AAAAAAAANzw/mxzRuUbcsmw/s1600/Mesut%2B%C3%96zil.jpg"
                    title="Mesut Özil"
                    />

            <Story image="https://scontent.fdac127-1.fna.fbcdn.net/v/t1.6435-9/69999391_2088874674747742_8486800762091864064_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=454319&_nc_ohc=Vti6zIM_SpQAX__6Xuk&_nc_ht=scontent.fdac127-1.fna&oh=dad96dcf54f4fe93aaaea9cb042322e8&oe=6125E752"
                    profileSrc="https://simgbb.com/avatar/H7HSK3Mv42CZ.png"
                    title="AJ Auntor"
                    />

            <Story image="https://s.yimg.com/ny/api/res/1.2/azU37voJXsxOYrqycy5Fsw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTE0NDAuMzYwMDkwMDIyNTA1Ng--/https://s.yimg.com/uu/api/res/1.2/eNpt_YSlEgocTNvHN3hkZA--~B/aD0yMDAwO3c9MTMzMzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/instyle_846/879adbcfa90b2a451dec410872a00e48"
                    profileSrc="https://www.hellomagazine.com/imagenes/profiles/jennifer-lopez/5785-jenniferlopez.jpg"
                    title="Jennifer Lopez"
                    />
        </div>
    );
};

export default StoryReel;