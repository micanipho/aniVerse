import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    container: css`
        padding: 24px;
        min-height: 100%;
    `,
    searchWrapper: css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin-bottom: 32px;
        padding: 20px 0;
    `,
    searchInput: css`
        max-width: 600px;
        width: 100%;
        font-size: 1.1rem;
        background-color: #393e46 !important;
        color: white;
        border: 2px solid #393e46;
        border-radius: 12px;
        padding: 12px 16px;
        height: 52px;

        &:hover,
        &:focus {
            border-color: #00ADB5 !important;
            background-color: #393e46 !important;
        }

        input {
            color: white;
            background-color: transparent !important;
            font-size: 1.1rem;

            &::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }
        }
    `,
    searchIcon: css`
        color: #00ADB5;
        font-size: 1.3rem;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
            color: #1f7f84;
        }
    `,
    grid: css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 20px;
    `,
    card: css`
        background: transparent;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        position: relative;
        color: #eeeeee;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 173, 181, 0.25);
        }

        &:hover .card-actions {
            opacity: 1;
        }
    `,
    
    cardActions: css`
        display: flex;
        justify-content: center;
        gap: 4px;
        padding: 0 8px 8px;
    `,
    image: css`
        width: 100%;
        height: 260px;
        object-fit: cover;
        display: block;
    `,
    title: css`
        padding: 12px;
        color: #eeeeee;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `,
    
    loading: css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
    `,
    error: css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        color: #ff6b6b;
        font-size: 1.1rem;
    `,
});
