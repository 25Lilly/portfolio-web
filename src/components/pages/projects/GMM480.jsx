import React from 'react';
import ProjectOutline from './ProjectOutline';

// Text for each section, to be passed into the ProjectOutline component
const intro_text = ['The ability of humans to recognize speech independent of the speaker remains a complex and not fully understood process. Despite extensive research, the underlying mechanisms of speaker-independent speech recognition continue to be an area of active investigation. However, advancements in machine learning techniques have enabled the development of models that can recognize and classify speech with a high degree of accuracy. One widely used feature extraction method in speech recognition is the Mel-Frequency Cepstral Coefficients (MFCC), which represents the power spectrum of an audio signal in a way that mimics human auditory perception of phonemes, individual components of words [1]. MFCCs have become a standard feature for speech recognition tasks due to their effectiveness in capturing the information needed for distinguishing between different speech sounds.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/digit0MFCC.png`,
  'Figure: Audio Frame Samples of Arabic Digit 0 Cepstral Coefficients',
  'This exploration focuses on recognizing spoken Arabic digits using machine learning techniques, specifically K Means clustering and Expectation Maximization (EM) Gaussian Mixture Models (GMM). The goal is to accurately classify spoken digits based on audio data, using a set of MFCCs pre-extracted from the speech signals [2]. A key aspect of this research is to determine the optimal number of MFCCs and the appropriate number of Gaussian components in the mixture model to achieve accurate recognition. By experimenting with different configurations of clustering and mixture models, this exploration aims to provide insights into how the number of MFCCs considered, the number of clusters, and the type of model influence the performance of speech recognition systems, particularly in the context of recognizing spoken Arabic digits.'
  ];
const mfcc_text = ['The dataset used consisted of 10 spoken Arabic Digits 0-9 and had a training and testing component. In the training data, each digit had 660 utterances, with the 13 MFCC components extracted for each recorded frame of the utterance. The testing data had a similar setup, but with only 220 utterances of each digit instead of 660.',
  'A goal of the experiment was to determine the impact of the amount of cepstral coefficients considered on the accuracy results. Therefore, the code was built to take in a range of cepstral coefficients (ex. 1-3, 3-12), and build a model around that data (with dimensionality determined by how many coefficients were being used). Below is an example commonly used during testing in this experiment considering cepstral coefficients 1-3. These cepstral coefficients were considered against each other in each of the tested models to determine the number being spoken.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/digit03DMFCC.png`,
  'Figure: All Audio Samples of Arabic Digit 0\'s first 3 Cepstral Coefficients Graphed Againt Each Other'
];
const kmeans_text = ['One of the two main methods used to model the spoken digits was KMeans. KMeans is a clustering algorithm that partitions data into a predefined number of clusters based on feature similarity. It works by iteratively assigning data points to the nearest cluster center and adjusting the centers to minimize the within-cluster variance [5]. To conduct Kmeans the python library Scikit-learn was used [5]. To model the digits, the combined cepstral coefficient data for each digit was fit to a Kmeans model with a specified number of clusters. These clusters were then visualized in 3D plots when MFCCs 1-3 were used.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/KmeansClusterPlots.png`,
  'Figure: Kmeans on Cepstrals 1-3 for Each Digit with 5 Clusters',
  'To test the accuracy of the Kmeans models, the testing dataset was used. For each digit utterance in the testing dataset, the log-likelihoods of it being each digit’s model were calculated in order to find the maximum likelihood classification of that testing digit’s audio data. These classifications were then placed in a confusion matrix to visualize the accuracy of the model. The overall accuracy of the model below was 57.32%.', 
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/KmeansConfusionM.png`,
  'Figure: Kmeans confusion matrix using models made from the above clusters (cluster count = 5)',
  'The main hyperparameter to be considered with Kmeans is the cluster count. To visualize the impact of cluster count on model performance, models with counts 2-11 were built and tested against the testing dataset using maximum likelihood classification. Accuracy generally rose with increased cluster count, but began to dip at cluster sizes 10 and 11.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/KmeansClusterCountMatricies.png`,
  'Figure: Kmeans confusion matrices for each cluster counts 2-11'
];
const gmm_text = ['The other method used to model the spoken digits was Expectation Maximization (EM). EM is a probabilistic clustering algorithm that iteratively estimates the parameters of a mixture of distributions, typically Gaussian, to best fit the data. Unlike KMeans, which assigns data points to discrete clusters, EM assigns a probability distribution to each data point, indicating its likelihood of belonging to each cluster. It uses the Expectation step to assign probabilities and the Maximization step to update the parameters of the model. To conduct EM, the Python library Scikit-learn was used [5]. To model the digits, the combined cepstral coefficient data for each digit was fit to a Gaussian Mixture Model (GMM) using EM. These Gaussian components were then visualized in 3D plots when MFCCs 1-3 were used.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/EMClusterPlots.png`,
  'Figure:EM on Cepstrals 1-3 for Each Digit with 5 Components (full covariance)',
  'To test the accuracy of the EM models, the testing dataset was used. For each digit utterance in the testing dataset, the log-likelihoods of it being each digit’s model were calculated to determine the maximum likelihood classification of that testing digit’s audio data. (exactly the same as Kmeans) These classifications were then placed in a confusion matrix to visualize the accuracy of the model. The overall accuracy of the model below was 72.73%.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/EMConfusionM.png`,
  'Figure: EM confusion matrix using models made from the above clusters (cluster count = 5, full covariance)',
  'The main hyperparameter to be considered with EM is the type of covariance matrix to use. The four options are: 1) Full covariance, where each component has its own general covariance matrix, 2) Tied covariance, where all components share the same covariance matrix, 3) Diagonal covariance, where each component has its own diagonal covariance matrix, and 4) Spherical covariance, where each component has the same variance in all directions. The choice of covariance matrix can significantly impact model performance, especially in how well it can model the underlying structure of the data. Full and diagonal covariance matricies appeared to have the higher accuracies.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/EMConfusionMatricies.png`,
  'Figure: EM confusion matrices for each covariance matrix method (cluster count 5)'
];
const results_text = ['To further evaluate the performance of the clustering models, various ranges of Mel-frequency cepstral coefficients (MFCCs) were tested to identify the optimal features for modeling spoken digits. Among the different MFCC ranges, the combination of MFCCs 1-12 yielded the best cluster performance for both KMeans and EM models. This range of MFCCs captures both low- and high-frequency features of speech, which are crucial for distinguishing between different phonemes and digit utterances. By incorporating the first twelve MFCCs, the models were able to capture the temporal and spectral characteristics of speech more effectively, leading to better separation and more accurate clustering.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/MFCCresults.png`,
  'Figure: Average accuracy for MFCC ranges 1-3, 1-12, and 1-13 (cluster size 4)',
  'The accuracy for each cluster count was also evaluated to determine the optimal number of clusters for the models. The results showed that the models achieved the highest accuracy when using four clusters, indicating that a moderate number of clusters is sufficient to capture the variability in the data. This finding suggests that a balance between model complexity and data representation is essential for achieving accurate clustering results. The optimal cluster count of four reflects the trade-off between bias and variance in the models, where a higher number of clusters may lead to overfitting and reduced generalization performance. The only case that did not experience this was spherical covariance, which had a peak at 10 clusters. This is likely due to the fact that spherical covariance is the least complex model and requires more clusters to capture the data.',
  `${process.env.PUBLIC_URL}/images/projectImages/GMM480/counts.png`,
  'Figure: Average accuracy for each cluster count 1-10(MFCC range 1-3)'
];
const conclusion_text = ['In conclusion, this shows that expectation maximization algorithms are much better than Kmeans at speech recognition, with the best performance when 12 MFCCs are considered with 4 clusters and a full covariance matrix. This makes sense, because speech is complicated and we shouldn’t expect that the MFCCs are similar in most dimensions and we should expect that lots of MFCCs should be considered. The small optimal cluster count is likely due to poor performance when variance is high and supports the bias-variance tradeoff. Since we have so many cepstral coefficients and are using the highest variance EM covariance model, it makes sense our cluster count is low and that balances our bias and variance.'];
const references_text = ['[1] W. Han et al., "An efficient MFCC extraction method in speech recognition," in Proc. 2006 IEEE Int. Symp. Circuits and Systems (ISCAS), 2006, pp. 4627–4630, doi: 10.1109/ISCAS.2006.1698159.', 
  '[2] M. Bedda and N. Hammami, "Spoken Arabic Digit [Dataset]," UCI Machine Learning Repository, 2008. [Online]. Available: https://doi.org/10.24432/C52C9Q.', 
  '[3] "NumPy: The Fundamental Package for Scientific Computing with Python," NumPy, 2021. [Online]. Available: https://numpy.org/. ',
  '[4] J. D. Hunter, "Matplotlib: A 2D Graphics Environment," Computing in Science & Engineering, vol. 9, no. 3, pp. 90-95, May/Jun. 2007. doi: 10.1109/MCSE.2007.55.',
  '[5] F. Pedregosa et al., "Scikit-learn: Machine Learning in Python," Journal of Machine Learning Research, vol. 12, pp. 2825-2830, 2011. [Online]. Available: http://scikit-learn.org.',
  '[6] "Matplotlib Patches Documentation," Matplotlib, 2021. [Online]. Available: https://matplotlib.org/stable/api/patches_api.html.',
  '[7] M. Waskom et al., "Seaborn: Statistical Data Visualization," Journal of Open Source Software, vol. 6, no. 60, p. 3021, 2021. doi: 10.21105/joss.03021.',
  '[8] W. McKinney, "Data Structures for Statistical Computing in Python," in Proc. 9th Python in Science Conf., 2010, pp. 51-56. [Online]. Available: https://pandas.pydata.org. ',
  '[9] "math — Mathematical Functions," Python Software Foundation, 2021. [Online]. Available: https://docs.python.org/3/library/math.html.',
  '[10] "os — Miscellaneous Operating System Interfaces," Python Software Foundation, 2021. [Online]. Available: https://docs.python.org/3/library/os.html.',
  ''
];
const collaboration_text = [
  'This project was completed as a part of the ECE480 course on Machine Learning at Duke University. The project was completed in Python using the NumPy, Matplotlib, and Scikit-learn libraries. The project was completed over the course of a month, with the majority of the work being done in the last week of the project. Code was completed in a Jupyter Notebook environment, with the final code being exported to a Python script for submission.',
  'When I had difficulties with python syntax in this project, I asked friends (Specifically Ethan Horowitz and Michael Bryant) who were working or had worked on similar things for help. I also advised Ethan on his visualization and compared accuracies with both of them. The biggest difficulty I encountered was when I attempted to model beyond a single digit with a different setup than presented here. To solve this difficulty, I decided to start over and redo the data setup to be more focused on combined cepstral coefficients for the digits rather than singular digit utterances themselves.',
  'The jupyter notebook for this project can be found below.'
];

function GMM480() {
    return (
      <>
        <ProjectOutline
            title = 'Arabic Digit Recognizer'
            coverImage = {`${process.env.PUBLIC_URL}/images/projectImages/GMM480/digit0MFCC.png`}
            overviewDescription='An experiment building different Arabic digit recognizers using
            Kmeans Clustering and Expectation Maximization Gaussian Mixture Models based off of 
            MFCC (Mel Frequency Cepstral Coefficients) features.'
            sections = {[
              'Motivation',
              'Dataset and Digit MFCC Features',
              'Kmeans Clustering',
              'Expectation Maximization',
              'Results',
              'Conclusion',
              'References',
              'Collaboration',
              'embeddedDocument'
            ]}
            section_content={[
              intro_text, 
              mfcc_text, 
              kmeans_text, 
              gmm_text, 
              results_text, 
              conclusion_text,
              references_text,
              collaboration_text,
              ''
            ]}
            embeddedDocument= {`${process.env.PUBLIC_URL}/documents/480ipynb.pdf`}
        />
      </>
    );
}

export default GMM480;