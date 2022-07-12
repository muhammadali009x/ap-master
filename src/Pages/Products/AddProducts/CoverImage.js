import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageUploading from 'react-images-uploading';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { Alert, AlertTitle } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    noteContainer: {
        marginTop: '5px',
        marginLeft: '1rem',
        "& li": {
            padding: '3px 0px',
            fontSize: '15px',
            color: 'rgb(59, 70, 86)',
        },
        "& h4": {
            color: 'rgb(76, 84, 85)',
            fontWeight: 'bolder',
            fontSize: '18px'
        }
    },
    mainContainer: {
        margin: '20px auto',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'start',
        marginTop: '20px',
        marginBottom: '20px',
    },
    addButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        padding: '20px',
        border: '2px dashed silver',
        marginRight: '10px',
        backgroundColor: 'white',
        cursor: 'pointer',
        outline: 'none',
        "&:hover": {
            backgroundColor: '#ededed',
        },
        "& p": {
            fontWeight: 'bolder',
            color: 'rgb(76, 84, 85)'
        },
        "& span": {
            color: 'gray',
            fontSize: '10px'
        }
    },
    imageContainer: {
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        marginRight: '15px',
        marginBottom: '10px',
        position: 'relative',
    },
    imageIcon: {
        marginLeft: '10px',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        top: '3px',
        right: '3px',
        borderRadius: '2px'
    },
    icon: {
        fontSize: '30px',
        cursor: 'pointer',
        margin: '5px',
        color: 'white',
        "&:hover": {
            transform: 'scale(1.1)'
        }
    },
    image: {
        width: '200px',
        height: '150px',

        borderRadius: "1rem"
    },
    emptyimage: {
        width: '200px',
        height: '150px',
        // border: "1px solid black",
        backgroundColor: "#f0f0f0",
        borderRadius: "1rem"

    },
    errorContainer: {
        marginTop: '15px'
    },
    errorMessage: {
        marginTop: '5px',
    },
    CoverImage: {
        position: 'absolute',
        opacity: 0.4,
        backgroundColor: 'rgba(0,0,0,0.7)',
        bottom: '5px',
        right: '2px',
        left: '3px',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bolder',
        padding: '8px 0px',
        borderRadius: "0 0 1rem 1rem"
    },
    CoverImage2: {
        position: 'absolute',
        backgroundColor: '#cdcccc',
        bottom: '2rem',
        right: '12px',
        left: '12px',
        textAlign: 'center',
        color: '#5a5a5a',
        fontWeight: 'bolder',
        padding: '8px 0px',
        borderRadius: "1rem"
    },
}));

const CoverImage = () => {
    const classes = useStyles();
    const images = useSelector(state=> state.AddProductCoverImage)
    const lang_mode = useSelector(state => state.Languages.default.products.add_products);
    const maxNumber = 1;

    const dispatch = useDispatch()

    const onChange = (event) => {
        dispatch({
            type: "cover_image",
            payload: event
        })
    };
    return (
        <>
            <div className={classes.noteContainer}>
            </div>
            <Container maxWidth="lg" className={classes.mainContainer}>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={['jpg', 'png']}
                    maxFileSize={5000000}
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        errors
                    }) => (

                        // write your building UI
                        <div className="upload__image-wrapper">

                            {errors && <div className={classes.errorContainer}>
                                {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                                {errors.maxNumber &&
                                    <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        <div className={classes.errorMessage}>
                                            <b >Number Of Selected Images Exceed Maximum Number Of Images Allowed!</b>
                                            <br />
                                            <b>Maximum Number Of Images Allowed : {maxNumber}</b>
                                        </div>
                                    </Alert>}
                                {errors.acceptType &&
                                    <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        <div className={classes.errorMessage}>
                                            <b >Your Selected File Type Is Not Allowed!</b>
                                            <br />
                                            <b>Only jpg & png Image Formats Are Supported</b>
                                        </div>
                                    </Alert>}
                                {errors.maxFileSize &&
                                    <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        <div className={classes.errorMessage}>
                                            <b >Selected File Size Exceed Maximum File Size Limit!</b>
                                            <br />
                                            <b>Maximum File Size Limit Is : 5MB</b>
                                        </div>
                                    </Alert>
                                }
                            </div>}

                            <div className={classes.imageContainer}>
                                {
                                    imageList.length !== 0 ?
                                        imageList.map((image, index) => (
                                            <div key={index} className={classes.imageWrapper}>
                                                <img src={image['data_url']} alt="" className={classes.image} />

                                                <div className={classes.imageIcon}>
                                                    <DeleteForeverRoundedIcon
                                                        className={classes.icon}
                                                        onClick={() => onImageRemove(index)}
                                                    />
                                                    <CreateRoundedIcon
                                                        className={classes.icon}
                                                        onClick={() => onImageUpdate(index)}
                                                    />
                                                </div>
                                                {index === 0 &&
                                                    <div className={classes.CoverImage}>
                                                        <h5>{lang_mode.cover[0]}</h5>
                                                    </div>}
                                            </div>
                                        ))
                                        :

                                        <div>
                                            <div className={classes.imageWrapper} {...dragProps}>
                                                <div className={classes.emptyimage}></div>
                                                <div className={classes.CoverImage2}>
                                                    <h5>{lang_mode.cover[1]}</h5>
                                                </div>
                                            </div>

                                            <div className={classes.buttonContainer}>
                                                <Tooltip title="Add" aria-label="add"
                                                    style={isDragging ? { backgroundColor: 'rgb(59, 70, 86)' } : undefined}
                                                    onClick={onImageUpload}
                                                >
                                                    <Fab color="primary" className={classes.fab}>
                                                        <AddIcon />
                                                    </Fab>
                                                </Tooltip>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    )}
                </ImageUploading>
            </Container>

        </>
    );
}
export default CoverImage;