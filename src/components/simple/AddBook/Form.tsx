import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {IBook} from '../../../core/book';


interface IProps{
    onSubmit: SubmitHandler<IBook>
}

/**
 * Book data entry form.
 * @param props contains the function of adding a book to the database.
 */
const Form: React.FC<IProps> = (props) => {
    const {
        onSubmit
    } = props;
    const {
        register, handleSubmit, formState: {errors, isValid}
    } = useForm<IBook>({
        mode: 'onChange'
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-adding-book'>
            <input
                placeholder='Title'
                {...register('title', {
                    required: true,
                    maxLength: 100,
                })}
            />
            <input
                placeholder='Authors'
                {...register('authors', {
                    required: true,
                })}
            />
            <input
                placeholder='Year'
                {...register('year', {
                    min: 1800,
                    max: 2022
                })}
            />
            <input
                placeholder='rating'
                {...register('rating', {
                    required: true,
                    min: 0,
                    max: 10
                })}
            />
            <input
                placeholder='Isbn'
                {...register('isbn', {
                    required: true,
                    pattern: {
                        value: /\b(?:ISBN(?:: ?| ))?((?:97[89])?\d{9}[\dx])\b/i,
                        message: 'Enter a 10-digit ISBN'
                    }
                })}
            />
            {errors?.isbn && (<div className='errors'>{errors.isbn.message}</div>)}
            <input type='submit' disabled={!isValid}/>
        </form>
    );
};

export default Form;