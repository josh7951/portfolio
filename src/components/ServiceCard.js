import React from 'react';
import styled from 'styled-components';

function ServiceCard({image, title, tag, description}) {
    return(
        <ServiceCardStyle>
            <div className="container">
                <img src={image} alt={tag}/>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </ServiceCardStyle>
    )
}

const ServiceCardStyle = styled.div`
    width: 80%;
    height: 100%;
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        img {
            width: 9rem;
            height: auto;
        }
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            padding: .8rem 0;
        }
    }
`;

export default ServiceCard;